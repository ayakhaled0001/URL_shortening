function Header() {
  return (
    <header className="font-poppins flex flex-col items-center justify-center py-8 md:py-10 lg:py-12 bg-Purple-950 bg-[url(images/bg-boost-mobile.svg)] md:bg-[url(images/bg-boost-desktop.svg)] bg-no-repeat bg-cover px-4">
      <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center">
        Boost your links today
      </h1>
      <button className="my-4 md:my-5 lg:my-6 cursor-pointer font-semibold bg-Blue-400 text-white px-6 py-3 md:px-5 md:py-2 rounded-full active:bg-[#2ACFCF80] text-sm md:text-base">
        Get started
      </button>
    </header>
  );
}

export default Header;
