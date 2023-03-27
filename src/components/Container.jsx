import { useState } from "react";
import Deliver from "./Deliver";
import GrindThem from "./GrindThem";
import HowDoyouDrink from "./HowDoyouDrink";
import HowMuch from "./HowMuch";
import OrderSummary from "./OrderSummary";
import PlanNav from "./PlanNav";
import WhatType from "./WhatType";

const Container = () => {
  const [preference, setPreference] = useState(null);
  const [beanType, setBeanType] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [grindOption, setGrindOption] = useState(null);
  const [delivery, setDelivery] = useState(null);

  return (
    <div className="my-32 md:mx-10 lg:flex lg:gap-20 lg:mx-20">
      <PlanNav />
      <div className="flex flex-col gap-20">
        <HowDoyouDrink preference={preference} setPreference={setPreference} />
        <WhatType beanType={beanType} setBeanType={setBeanType}/>
        <HowMuch quantity={quantity} setQuantity={setQuantity} />
        <GrindThem grindOption={grindOption} setGrindOption={setGrindOption} />
        <Deliver delivery={delivery} setDelivery={setDelivery} />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Container;
