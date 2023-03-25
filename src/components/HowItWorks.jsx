const HowItWorks = () => {
  return (
    <section className="w-[88vw] mx-auto mt-[700px] mb-[120px] md:mt-96 lg:mt-56">
      <h2 className="text-grey font-Fraunces font-black text-2xl text-center">
        How it works
      </h2>
      <div className="grid grid-cols-1 gap-14 mt-20">
        <article className="flex flex-col justify-center items-center text-center gap-6">
          <span className="text-pale-orange text-7xl font-Fraunces font-black">01</span>
          <h3 className="text-3xl text-dark-grey-blue font-Fraunces font-black">Pick your coffee</h3>
          <p className="text-dark-grey-blue">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </article>
      </div>
    </section>
  );
};

export default HowItWorks;
