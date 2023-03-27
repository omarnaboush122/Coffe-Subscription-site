import { useEffect, useState } from "react";
import Checkout from "./Checkout";

const OrderSummary = ({
  preference,
  beanType,
  quantity,
  grindOption,
  delivery,
}) => {
  const [isAllFieldsCorrect, setIsAllFiledCorrect] = useState(false);
  const [isPlanCreated, setIsPlanCreated] = useState(false);

  const handleClick = () => {
    if (isAllFieldsCorrect) {
      setIsPlanCreated(true);
    }
  };

  useEffect(() => {
    if (preference === "Capsule") {
      if (preference && beanType && quantity && delivery) {
        setIsAllFiledCorrect(true);
      }
    } else {
      if (preference && beanType && quantity && grindOption && delivery) {
        setIsAllFiledCorrect(true);
      }
    }
  }, [preference, beanType, quantity, grindOption, delivery]);

  return (
    <section className="relative my-32 mx-6 max-w-3xl md:mx-10 lg:my-0 lg:ml-auto">
      {isPlanCreated && (
        <div className="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.4)] z-10"></div>
      )}
      <div className="flex flex-col gap-14">
        {isPlanCreated && (
          <Checkout
            preference={preference}
            beanType={beanType}
            quantity={quantity}
            grindOption={grindOption}
            delivery={delivery}
            setIsPlanCreated={setIsPlanCreated}
          />
        )}
        <article className="bg-black px-6 py-8 rounded-lg">
          <p className="text-[#fff] opacity-50 capitalize mb-2">
            Order Summary
          </p>
          <div className="text-2xl text-[#fff] font-Fraunces font-black">
            “I drink my coffee{" "}
            <span>{preference === "Capsule" ? "using" : "as"}</span>{" "}
            <span className="text-dark-cyan">
              {preference ? preference : "____"}
            </span>
            , with a{" "}
            <span className="text-dark-cyan">
              {beanType ? beanType : "____"}
            </span>{" "}
            type of bean.{" "}
            <span className="text-dark-cyan">
              {quantity ? quantity : "____"}
            </span>{" "}
            {preference !== "Capsule" && (
              <>
                ground ala{" "}
                <span className="text-dark-cyan">
                  {grindOption ? grindOption : "____"}
                </span>
              </>
            )}
            , sent to me{" "}
            <span className="text-dark-cyan">
              {delivery ? delivery : "____"}
            </span>
            .”
          </div>
        </article>
        <button
          onClick={handleClick}
          className={` ${
            isAllFieldsCorrect
              ? "bg-dark-cyan cursor-pointer hover:bg-blue"
              : "bg-grey opacity-50 cursor-not-allowed"
          } text-light-cream max-w-xs mx-auto py-4 px-8 text-lg font-Fraunces font-black rounded-lg transition-colors duration-300 lg:mr-0`}
        >
          Create Your Plan
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
