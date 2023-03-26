import { useState } from "react";

const CoffeeQuality = ({ title, desc }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <article
      onClick={toggleClick}
      className={`${
        isClicked
          ? "bg-dark-cyan text-light-cream"
          : "bg-[#F4F1EB] text-dark-grey-blue hover:bg-pale-orange"
      } rounded-lg flex flex-col gap-2 max-w-[350px] mx-auto p-6 cursor-pointer transition-colors duration-300 md:gap-6 md:py-10`}
    >
      <h3 className=" text-2xl font-Fraunces font-black">{title}</h3>
      <p>{desc}</p>
    </article>
  );
};

export default CoffeeQuality;
