import { useContext, useState } from "react";
import Deliver from "./Deliver";
import GrindThem from "./GrindThem";
import HowDoyouDrink from "./HowDoyouDrink";
import HowMuch from "./HowMuch";
import OrderSummary from "./OrderSummary";
import PlanNav from "./PlanNav";
import WhatType from "./WhatType";
import { Context } from "../Context";

const Container = () => {
  const { orderDetails, setOrderDetails } = useContext(Context);

  const { preference, beanType, quantity, grindOption, delivery } =
    orderDetails;

  const setPreference = (preference) =>
    setOrderDetails({ ...orderDetails, preference });
  const setBeanType = (beanType) =>
    setOrderDetails({ ...orderDetails, beanType });
  const setQuantity = (quantity) =>
    setOrderDetails({ ...orderDetails, quantity });
  const setGrindOption = (grindOption) =>
    setOrderDetails({ ...orderDetails, grindOption });
  const setDelivery = (delivery) =>
    setOrderDetails({ ...orderDetails, delivery });

  return (
    <div className="my-32 md:mx-10 lg:flex lg:gap-20 lg:mx-20">
      <PlanNav />
      <div className="flex flex-col gap-20">
        <HowDoyouDrink preference={preference} setPreference={setPreference} />
        <WhatType beanType={beanType} setBeanType={setBeanType} />
        <HowMuch quantity={quantity} setQuantity={setQuantity} />
        <GrindThem
          grindOption={grindOption}
          setGrindOption={setGrindOption}
          preference={preference}
        />
        <Deliver
          delivery={delivery}
          setDelivery={setDelivery}
          quantity={quantity}
        />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Container;
