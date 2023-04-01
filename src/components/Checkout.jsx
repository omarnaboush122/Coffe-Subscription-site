import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

const Checkout = ({ handleCloseCheckout }) => {
  const [price, setPrice] = useState(0);
  const { orderDetails } = useContext(Context);

  const { preference, beanType, quantity, grindOption, delivery } =
    orderDetails;

  useEffect(() => {
    let basePrice = 0;
    if (quantity === "250g") {
      basePrice = 12.0;
    } else if (quantity === "500g") {
      basePrice = 22.0;
    } else {
      basePrice = 42.0;
    }

    let multiplier = 0;
    if (delivery === "Every week") {
      multiplier = 4;
    } else if (delivery === "Every 2 weeks") {
      multiplier = 2;
    } else {
      multiplier = 1;
    }

    setPrice(basePrice * multiplier);
  }, [quantity, delivery]);

  const order = `“I drink my coffee ${
    preference === "Capsule" ? "using" : "as"
  } ${preference}, with a ${beanType} type of bean. ${quantity} ${
    preference !== "Capsule" ? `ground ala ${grindOption}` : ""
  }, sent to me ${delivery}.`;

  return (
    <div className="fixed top-[50%] left-[50%] z-20 bg-light-cream rounded-lg w-[clamp(100px,95%,500px)] shadow-lg -translate-x-[50%] -translate-y-[50%] overflow-hidden">
      <div className="bg-dark-grey-blue p-6">
        <h3 className="text-3xl text-[#fff] font-Fraunces font-black">
          Order Summary
        </h3>
      </div>
      <div className="flex flex-col text-2xl text-grey font-Fraunces font-black p-6 pt-10">
        <div>{order}</div>
        <p className="text-dark-grey-blue text-sm my-6">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <button
          onClick={handleCloseCheckout}
          className="bg-dark-cyan text-light-cream py-3 px-6 text-lg font-Fraunces font-black rounded-lg cursor-pointer hover:bg-blue transition-colors duration-300"
        >
          Checkout - ${price.toFixed(2)} / mo
        </button>
      </div>
    </div>
  );
};

export default Checkout;
