import Deliver from "./Deliver";
import GrindThem from "./GrindThem";
import HowDoyouDrink from "./HowDoyouDrink";
import HowMuch from "./HowMuch";
import OrderSummary from "./OrderSummary";
import PlanNav from "./PlanNav";
import WhatType from "./WhatType";

const Container = () => {
  return (
    <div className="my-32 md:mx-10 lg:flex lg:gap-20 lg:mx-20">
      <PlanNav />
      <div className="flex flex-col gap-20 flex-1">
        <HowDoyouDrink />
        <WhatType />
        <HowMuch />
        <GrindThem />
        <Deliver />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Container;
