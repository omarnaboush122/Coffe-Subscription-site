const CoffeeQuality = ({ name, desc }) => {
  return (
    <article className="bg-[#F4F1EB] text-dark-grey-blue rounded-lg flex flex-col gap-2 max-w-[350px] mx-auto p-6 cursor-pointer hover:bg-pale-orange transition-colors duration-300 md:gap-6 md:py-10">
      <h3 className=" text-2xl font-Fraunces font-black">{name}</h3>
      <p>{desc}</p>
    </article>
  );
};

export default CoffeeQuality;
