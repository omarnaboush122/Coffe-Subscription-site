import Deliver from "../components/Deliver";
import GrindThem from "../components/GrindThem";
import HowDoyouDrink from "../components/HowDoyouDrink";
import HowMuch from "../components/HowMuch";
import PlanHeader from "../components/PlanHeader";
import Steps from "../components/Steps";
import WhatType from "../components/WhatType";

const Plan = () => {
  return (
    <>
      <PlanHeader />
      <main>
        <Steps />
        <HowDoyouDrink />
        <WhatType />
        <HowMuch />
        <GrindThem />
        <Deliver />
      </main>
    </>
  );
};

export default Plan;
