function Hero() {
  return (
    <main className="font-poppins flex flex-col lg:flex-row items-center px-4 py-8 md:py-12 lg:py-16">
      <div className="order-2 lg:order-1 w-full lg:w-4/6 mx-auto text-center lg:text-left">
        <div className="w-full lg:w-4/6 mx-auto">
          <h1 className="my-3 text-4xl md:text-5xl lg:text-7xl font-bold text-Gray-950 leading-tight">
            More than justify shorter links
          </h1>
          <p className="text-Gray-500 font-semibold text-base md:text-lg lg:text-xl mb-6 lg:mb-8">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="my-6 cursor-pointer font-semibold bg-Blue-400 text-white px-6 py-3 md:px-8 md:py-3 lg:px-5 lg:py-2 rounded-full active:bg-[#2ACFCF80] text-base md:text-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-2/6 flex justify-center lg:justify-end">
        <img 
          src="images/illustration-working.svg" 
          alt="Working illustration"
          className="w-full max-w-md lg:max-w-none h-auto"
        />
      </div>
    </main>
  );
}

export default Hero;
