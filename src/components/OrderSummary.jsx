const OrderSummary = () => {
  return (
    <section className="my-32 mx-6 max-w-3xl md:mx-10 lg:my-0 lg:ml-auto">
      <div className="flex flex-col gap-14">
        <article className="bg-black px-6 py-8 rounded-lg">
          <p className="text-[#fff] opacity-50 capitalize mb-2">
            Order Summary
          </p>
          <div className="text-2xl text-[#fff] font-Fraunces font-black">
            “I drink my coffee <span>as</span>{" "}
            <span className="text-dark-cyan">Filter</span>, with a{" "}
            <span className="text-dark-cyan">Decaf</span> type of bean.{" "}
            <span className="text-dark-cyan">250g</span> ground ala{" "}
            <span className="text-dark-cyan">Cafetiére</span>, sent to me{" "}
            <span className="text-dark-cyan">Every Week</span>.”
          </div>
        </article>
        <button className=" bg-dark-cyan text-light-cream max-w-xs mx-auto py-4 px-8 text-lg font-Fraunces font-black rounded-lg cursor-pointer hover:bg-blue transition-colors duration-300 lg:mr-0">
          Create Your Plan
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
