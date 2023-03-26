

const PlanHeader = () => {
  return (
    <header className="plan h-[400px] mx-6 my-3 rounded-md md:mx-10 lg:h-[450px] lg:mx-20">
      <div className="flex flex-col items-center justify-center text-center w-full h-full max-w-[400px] mx-auto text-light-cream px-6 md:text-left md:items-start md:pl-14 md:m-0 md:max-w-[480px] lg:pl-20 lg:max-w-2xl">
        <h1 className="text-[40px] leading-10 font-Fraunces font-black md:text-5xl lg:text-7xl">
        Create a plan
        </h1>
        <p className="mt-6 mb-10 opacity-80 max-w-[450px] lg:text-lg lg:mt-8">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
      </div>
    </header>
  );
}

export default PlanHeader;
