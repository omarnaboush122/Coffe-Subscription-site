import Arrow from "../assets/plan/desktop/icon-arrow.svg";
import CoffeeQuality from "./CoffeeQuality";

const TypesOfCoffee = () => {
  return (
    <section className="my-24 mx-6 md:mx-10 lg:my-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-grey text-xl font-Fraunces font-black md:text-3xl lg:text-4xl">
            What type of coffee?
          </h1>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
          <CoffeeQuality
            name="Single Origin"
            desc="Distinct, high quality coffee from a specific family-owned farm"
          />
          <CoffeeQuality
            name="Decaf"
            desc="Just like regular coffee, except the caffeine has been removed"
          />
          <CoffeeQuality
            name="Blended"
            desc="Combination of two or three dark roasted beans of organic coffees"
          />
        </div>
      </div>
    </section>
  );
};

export default TypesOfCoffee;
