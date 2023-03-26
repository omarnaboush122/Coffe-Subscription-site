import HowToDrink from "../components/HowToDrink";
import PlanHeader from "../components/PlanHeader";
import Steps from "../components/Steps";
import TypesOfCoffee from "../components/TypesOfCoffee";

const Plan = () => {
  return (
    <>
      <PlanHeader />
      <main>
        <Steps />
        <HowToDrink />
        <TypesOfCoffee />
      </main>
    </>
  );
};

export default Plan;
