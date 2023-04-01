import { useContext, useEffect, useState } from "react";
import Checkout from "./Checkout";
import { Context } from "../Context";

const OrderSummary = () => {
  const [isAllFieldsCorrect, setIsAllFieldsCorrect] = useState(false);
  const [isPlanCreated, setIsPlanCreated] = useState(false);

  const { orderDetails, setOrderDetails } = useContext(Context);

  const { preference, beanType, quantity, grindOption, delivery } =
    orderDetails;

  const isCapsule = preference === "Capsule";
  useEffect(() => {
    const isFieldsComplete =
      preference &&
      beanType &&
      quantity &&
      delivery &&
      (isCapsule || grindOption);

    setIsAllFieldsCorrect(isFieldsComplete);
  }, [preference, beanType, quantity, grindOption, delivery]);

  const handleCreatePlan = () => {
    setIsPlanCreated(true);
  };

  const handleCloseCheckout = () => {
    setIsPlanCreated(false);
    setOrderDetails({
      preference: null,
      beanType: null,
      quantity: null,
      grindOption: null,
      delivery: null,
    });
  };

  return (
    <section className="relative my-32 mx-6 max-w-3xl md:mx-10 lg:my-0 lg:ml-auto">
      {isPlanCreated && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.4)] z-10"
          onClick={handleCloseCheckout}
        ></div>
      )}
      <div className="flex flex-col gap-14">
        {isPlanCreated && (
          <Checkout handleCloseCheckout={handleCloseCheckout} />
        )}
        <article className="bg-black px-6 py-8 rounded-lg">
          <p className="text-[#fff] opacity-50 capitalize mb-2">
            Order Summary
          </p>
          <div className="text-2xl text-[#fff] font-Fraunces font-black">
            “I drink my coffee{" "}
            <span>{preference === "Capsule" ? "using" : "as"}</span>{" "}
            <span className="text-dark-cyan">{preference || "____"}</span>, with
            a <span className="text-dark-cyan">{beanType || "____"}</span> type
            of bean.{" "}
            <span className="text-dark-cyan">{quantity || "____"}</span>{" "}
            {!isCapsule && (
              <>
                ground ala{" "}
                <span className="text-dark-cyan">{grindOption || "____"}</span>
              </>
            )}
            , sent to me{" "}
            <span className="text-dark-cyan">{delivery || "____"}</span>.
          </div>
        </article>
        <button
          className={`${
            isAllFieldsCorrect
              ? "bg-dark-cyan cursor-pointer hover:bg-blue"
              : "bg-grey opacity-50 cursor-not-allowed"
          } text-light-cream max-w-xs mx-auto py-4 px-8 text-lg font-Fraunces font-black rounded-lg transition-colors duration-300 lg:mr-0`}
          onClick={handleCreatePlan}
          disabled={!isAllFieldsCorrect}
        >
          Create Your Plan
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
