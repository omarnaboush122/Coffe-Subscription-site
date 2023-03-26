import Arrow from "../assets/plan/desktop/icon-arrow.svg";
import CoffeeQuality from "./CoffeeQuality";

const HowToDrink = () => {
  return (
    <section className="my-32 mx-6 md:mx-10 lg:my-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-grey text-2xl font-Fraunces font-black">
            How do you drink your coffee?
          </h1>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <CoffeeQuality
            name="Capsule"
            desc="Compatible with Nespresso systems and similar brewers"
          />
          <CoffeeQuality
            name="Filter"
            desc="For pour over or drip methods like Aeropress, Chemex, and V60"
          />
          <CoffeeQuality
            name="Espresso"
            desc="Dense and finely ground beans for an intense, flavorful experience"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToDrink;
