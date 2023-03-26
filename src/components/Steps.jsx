import PlanStep from "./PlanStep";

const Steps = () => {
  return (
    <section className="bg-black mx-6 mt-14 rounded-md md:mx-10 lg:mx-20">
      <div className="hidden md:block relative top-20 left-14 w-[70%] h-[2px] bg-pale-orange my-14">
        <span className="absolute -top-[15px] left-0 w-8 h-8 bg-light-cream rounded-full border-2 border-solid border-dark-cyan"></span>
        <span className="absolute -top-[15px] left-[50%] w-8 h-8 bg-light-cream rounded-full border-2 border-solid border-dark-cyan"></span>
        <span className="absolute -top-[15px] left-[100%] w-8 h-8 bg-light-cream rounded-full border-2 border-solid border-dark-cyan"></span>
      </div>
      <div className="grid grid-cols-1 gap-14 px-6 py-20 md:grid-cols-3 md:gap-10 md:px-10 lg:gap-24 lg:pl-16">
        <PlanStep
          number="01"
          title="Pick your coffee"
          desc="Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out."
        />
        <PlanStep
          number="02"
          title="Choose the frequency"
          desc="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
        />
        <PlanStep
          number="03"
          title="Receive and enjoy!"
          desc="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
          world-class coffees curated to provide a distinct tasting experience."
        />
      </div>
    </section>
  );
};

export default Steps;
