const AboutHeader = () => {
  return (
    <header className="about h-[400px] mx-6 my-3 rounded-md md:mx-10 lg:h-[450px] lg:mx-20">
      <div className="flex flex-col justify-center items-center h-full max-w-[500px] mx-auto gap-6 px-6 text-center md:m-0 md:text-left md:items-start md:pl-14 lg:pl-16">
        <h1 className="text-light-cream text-3xl font-Fraunces font-black md:text-4xl lg:text-5xl">
          About Us
        </h1>
        <p className="text-light-cream opacity-80">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </header>
  );
};

export default AboutHeader;
