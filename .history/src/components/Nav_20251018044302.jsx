function Nav() {
  return (
    <nav className="font-poppins flex justify-between py-4 px-4 md:py-6 md:px-8 lg:py-8 lg:px-18 text-Gray-500 font-semibold text-sm md:text-base lg:text-lg">
      <div className="flex gap-2 md:gap-4 w-3/6 items-center">
        <img src="images/logo.svg" alt="logo" className="mx-1 md:mx-2" />
        <ul className="hidden md:flex gap-2 lg:gap-4">
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 md:gap-3 lg:gap-5 items-center">
        <button className="cursor-pointer font-semibold text-sm md:text-base">log in</button>
        <button className="cursor-pointer font-semibold bg-Blue-400 text-white px-3 py-1.5 md:px-4 md:py-1.5 lg:px-5 lg:py-2 rounded-full active:bg-[#2ACFCF80] text-sm md:text-base">
          sign up
        </button>
      </div>
    </nav>
  );
}

export default Nav;
