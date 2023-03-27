import { useState } from "react";

const OrderSummary = ({
  preference,
  beanType,
  quantity,
  grindOption,
  delivery,
}) => {
  const [isPlanCreated, setIsPlanCreated] = useState(false);

  const handleClick = () => {
    if (preference && beanType && quantity && grindOption && delivery) {
      setIsPlanCreated(true);
    }
  };
  return (
    <section className="my-32 mx-6 max-w-3xl md:mx-10 lg:my-0 lg:ml-auto">
      <div className="flex flex-col gap-14">
        <article className="bg-black px-6 py-8 rounded-lg">
          <p className="text-[#fff] opacity-50 capitalize mb-2">
            Order Summary
          </p>
          <div className="text-2xl text-[#fff] font-Fraunces font-black">
            “I drink my coffee <span>as</span>{" "}
            <span className="text-dark-cyan">
              {preference == null ? "____" : preference}
            </span>
            , with a{" "}
            <span className="text-dark-cyan">
              {beanType == null ? "____" : beanType}
            </span>{" "}
            type of bean.{" "}
            <span className="text-dark-cyan">
              {quantity == null ? "____" : quantity}
            </span>{" "}
            ground ala{" "}
            <span className="text-dark-cyan">
              {grindOption == null ? "____" : grindOption}
            </span>
            , sent to me{" "}
            <span className="text-dark-cyan">
              {delivery == null ? "____" : delivery}
            </span>
            .”
          </div>
        </article>
        <button
          onClick={handleClick}
          className={` ${
            isPlanCreated
              ? "bg-dark-cyan hover:bg-blue"
              : "bg-grey cursor-not-allowed"
          } text-light-cream max-w-xs mx-auto py-4 px-8 text-lg font-Fraunces font-black rounded-lg cursor-pointer transition-colors duration-300 lg:mr-0`}
        >
          Create Your Plan
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
