const CoffeeQuality = ({name,desc}) => {
  return (
    <article className="bg-[#F4F1EB] rounded-lg flex flex-col gap-2 max-w-[350px] mx-auto p-6">
      <h3 className="text-dark-grey-blue text-2xl font-Fraunces font-black">
        {name}
      </h3>
      <p className="text-dark-grey-blue">
        {desc}
      </p>
    </article>
  );
};

export default CoffeeQuality;
