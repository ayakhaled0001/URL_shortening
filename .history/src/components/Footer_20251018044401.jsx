function Footer() {
  return (
    <footer className="p-6 md:p-8 lg:p-10 text-Gray-400 font-poppins bg-Gray-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 md:gap-8 lg:gap-0">
      <div className="text-center md:text-left lg:col-span-1">
        <span className="font-bold text-3xl md:text-4xl text-white">Shortly</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-0 lg:col-span-4">
        <ul className="text-center md:text-left">
          <p className="text-white mb-2 md:mb-1.5 font-semibold text-sm md:text-base">Features</p>
          <li className="text-xs md:text-sm mb-1">link shortening</li>
          <li className="text-xs md:text-sm mb-1">branded links</li>
          <li className="text-xs md:text-sm mb-1">analytics</li>
        </ul>
        <ul className="text-center md:text-left">
          <p className="text-white mb-2 md:mb-1.5 font-semibold text-sm md:text-base">Resources</p>
          <li className="text-xs md:text-sm mb-1">Blog</li>
          <li className="text-xs md:text-sm mb-1">Developers</li>
          <li className="text-xs md:text-sm mb-1">Support</li>
        </ul>
        <ul className="text-center md:text-left">
          <p className="text-white mb-2 md:mb-1.5 font-semibold text-sm md:text-base">Company</p>
          <li className="text-xs md:text-sm mb-1">About</li>
          <li className="text-xs md:text-sm mb-1">Our team</li>
          <li className="text-xs md:text-sm mb-1">Careers</li>
          <li className="text-xs md:text-sm mb-1">Contact</li>
        </ul>
        <ul className="flex justify-center md:justify-start gap-4 md:gap-5">
          <li>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="images/icon-facebook.svg" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="images/icon-twitter.svg" alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="images/icon-pinterest.svg" alt="Pinterest" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="images/icon-instagram.svg" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
