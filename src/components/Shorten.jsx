import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenURL } from "../features/URLthunks";

function Shorten() {
  const { listOfShortenURL, loading, error } = useSelector(
    (state) => state.URLShortening
  );
  const [copyStates, setCopyStates] = useState({}); // Track state per URL
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const timeRefs = useRef({}); // Multiple timeouts for multiple URLs

  const copyToClipboard = async (text, urlId) => {
    try {
      await navigator.clipboard.writeText(text);

      // Set copy success for this specific URL
      setCopyStates((prev) => ({
        ...prev,
        [urlId]: "Copied!",
      }));

      // Clear previous timeout for this URL if exists
      if (timeRefs.current[urlId]) {
        clearTimeout(timeRefs.current[urlId]);
      }

      // Set new timeout for this specific URL
      timeRefs.current[urlId] = setTimeout(() => {
        setCopyStates((prev) => ({
          ...prev,
          [urlId]: "",
        }));
      }, 2000);
    } catch (err) {
      setCopyStates((prev) => ({
        ...prev,
        [urlId]: "Failed to copy!",
      }));
      console.error("Failed to copy: ", err);
    }
  };

  function handleShortening() {
    if (!input.trim()) return;
    dispatch(shortenURL(input));
    setInput("");
  }

  return (
    <>
      <section className="font-poppins bg-no-repeat bg-cover bg-[url(images/bg-shorten-mobile.svg)] md:bg-[url(images/bg-shorten-desktop.svg)] flex flex-col md:flex-row gap-3 translate-y-13 w-11/12 md:w-10/12 lg:w-8/12 mx-auto p-4 md:p-6 lg:p-10 bg-Purple-950 rounded-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="placeholder:text-Gray-500 placeholder:font-semibold w-full outline-none bg-white rounded-md px-4 py-3 md:px-5 text-sm md:text-base"
          placeholder={loading ? "loading ...." : "Shorten a link here ..."}
          disabled={loading}
        />
        <button
          onClick={handleShortening}
          className="text-nowrap bg-Blue-400 px-6 py-3 md:py-2 rounded-md text-sm md:text-base font-semibold">
          Shorten it!
        </button>
      </section>
      <div className="translate-y-17 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        {listOfShortenURL.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row my-1 shadow-2xl items-start md:items-center bg-white rounded-md justify-between p-3 md:p-4">
            <p className="overflow-ellipsis overflow-hidden px-2 font-semibold text-sm md:text-base w-full md:w-auto border-b md:border-b-0 border-gray-200 md:border-0 pb-2 md:pb-0 mb-2 md:mb-0">
              {e.original}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto">
              <p className="text-Blue-400 text-sm md:text-base">{e.short}</p>
              <button
                className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold w-full md:w-auto ${
                  copyStates[i]
                    ? "bg-Purple-950 text-white"
                    : "bg-Blue-400 text-white"
                }`}
                onClick={() => copyToClipboard(e.short, i)}>
                {copyStates[i] ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shorten;
