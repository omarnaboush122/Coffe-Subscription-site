import { Link } from "react-router-dom";
import Step from "./Step";

const HowItWorks = () => {
  return (
    <section className="mx-6 mt-[700px] mb-[120px] md:mt-[500px] md:mx-10 lg:mt-80 lg:mx-40">
      <h2 className="text-grey font-Fraunces font-black text-2xl text-center md:text-left">
        How it works
      </h2>
      <div className="hidden md:block relative w-[500px] h-1 bg-pale-orange my-14 lg:w-[650px] xl:w-[800px]">
        <span className="absolute -top-[15px] left-0 w-8 h-8 bg-light-cream rounded-full border-2 border-solid border-dark-cyan"></span>
        <span className="absolute -top-[15px] left-[50%] w-8 h-8 bg-light-cream rounded-full border-2 border-solid border-dark-cyan"></span>
        <span className="absolute -top-[15px] left-[100%] w-8 h-8 bg-light-cream rounded-full border-2 border-solid border-dark-cyan"></span>
      </div>
      <div className="grid grid-cols-1 gap-14 mt-20 md:grid-cols-3 md:gap-10 md:max-w-[700px] lg:max-w-[1045px] lg:gap-24">
        <Step
          number="01"
          title="Pick your coffee"
          desc="Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out."
        />
        <Step
          number="02"
          title="Choose the frequency"
          desc="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
        />
        <Step
          number="03"
          title="Receive and enjoy!"
          desc="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
          world-class coffees curated to provide a distinct tasting experience."
        />
      </div>
      <Link to="/plan" className="flex items-center justify-center text-center">
        <button className="py-4 px-8 bg-dark-cyan text-light-cream text-lg font-Fraunces font-black mt-20 rounded-md cursor-pointer hover:bg-blue transition-colors duration-300">
          Create your plan
        </button>
      </Link>
    </section>
  );
};

export default HowItWorks;
