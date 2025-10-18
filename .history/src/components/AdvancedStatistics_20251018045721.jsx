function AdvancedStatistics() {
  return (
    <section className="font-poppins pt-16 md:pt-20 lg:pt-25 py-12 md:py-15 bg-gray-100">
      <div className="w-11/12 md:w-4/6 lg:w-4/12 mx-auto text-center py-5 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-3xl py-2 text-Gray-900 font-bold">
          Advanced Statistics
        </h1>
        <p className="text-Gray-500 text-sm md:text-base lg:text-base">
          track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center gap-6 md:gap-8 xl:gap-10 my-8 px-4">
        <div className="w-full md:w-80 xl:w-90 bg-white rounded-md px-6 pt-15 pb-8 relative z-10 mx-auto md:mx-0">
          <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 md:left-6 md:transform-none inline-block bg-Purple-950 p-4 rounded-full">
            <img src="images/icon-brand-recognition.svg" className="w-9" />
          </div>

          <h1 className="text-lg md:text-xl font-bold text-Gray-900 text-center md:text-left">
            Brand Recognition
          </h1>
          <p className="text-Gray-500 text-sm md:text-base text-center md:text-left">
            Boost your brand recognition with each click . Generic links don't
            mean a thing . branded links helps instil confidence in your content
          </p>
        </div>
        <div className="w-full md:w-80 lg:w-90 translate-y-0 lg:translate-y-10 bg-white rounded-md px-6 pt-15 pb-8 relative mx-auto md:mx-0">
          <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 md:left-6 md:transform-none inline-block bg-Purple-950 p-4 rounded-full">
            <img src="images/icon-detailed-records.svg" className="w-9" />
          </div>

          <h1 className="text-lg md:text-xl font-bold text-Gray-900 text-center md:text-left">
            Detailed Records
          </h1>
          <p className="text-Gray-500 text-sm md:text-base text-center md:text-left">
            Gain insights into who is clicking your links . knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="w-full md:w-80 lg:w-90 translate-y-0 lg:translate-y-14 bg-white rounded-md px-6 pt-15 pb-8 relative mx-auto md:mx-0">
          <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 md:left-6 md:transform-none inline-block bg-Purple-950 p-4 rounded-full">
            <img src="images/icon-fully-customizable.svg" className="w-9" />
          </div>

          <h1 className="text-lg md:text-xl font-bold text-Gray-900 text-center md:text-left">
            Fully Customizable
          </h1>
          <p className="text-Gray-500 text-sm md:text-base text-center md:text-left">
            Improve brand awareness and content discoverability through
            customizable links , supercharging audience engagement
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdvancedStatistics;
