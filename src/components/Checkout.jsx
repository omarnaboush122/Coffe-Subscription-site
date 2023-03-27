const Checkout = ({
  preference,
  beanType,
  quantity,
  grindOption,
  delivery,
}) => {
  return (
    <div className="absolute top-0 left-[50%] z-20 bg-light-cream rounded-lg w-80 mx-auto h-[600px]">
      <div className="bg-dark-grey-blue p-6">
        <h3 className="text-3xl font-Fraunces font-black">Order Summary</h3>
      </div>
      <div className="text-2xl text-grey font-Fraunces font-black p-6 pt-10">
        “I drink my coffee{" "}
        <span>{preference == "Capsule" ? "using" : "as"}</span>{" "}
        <span className="text-dark-cyan">{preference}</span>, with a{" "}
        <span className="text-dark-cyan">{beanType}</span> type of bean.{" "}
        <span className="text-dark-cyan">{quantity}</span> ground ala{" "}
        <span className="text-dark-cyan">{grindOption}</span>, sent to me{" "}
        <span className="text-dark-cyan">{delivery}</span>
        .”
        <p className="text-dark-grey-blue text-sm mb-6">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <button className="bg-dark-cyan text-light-cream mx-auto py-4 px-8 text-lg font-Fraunces font-black rounded-lg cursor-pointer hover:bg-blue transition-colors duration-300">
          Checkout - $14.00 / mo
        </button>
      </div>
    </div>
  );
};

export default Checkout;
