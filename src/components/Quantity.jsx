import { useState } from "react";
import Arrow from "../assets/plan/desktop/icon-arrow.svg";

const Quantity = ({quantity,setQuantity}) => {
  const [data, setData] = useState([
    {
      question: "How much would you like?",
      answers: [
        {
          title: "250g",
          desc: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          title: "500g",
          desc: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          title: "1000g",
          desc: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <section id="quantity" className="mx-6 md:mx-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-grey text-2xl font-Fraunces font-black md:text-3xl lg:text-4xl">
            {data[0].question}
          </h1>
          <img
            src={Arrow}
            alt="arrow"
            onClick={toggleVisibility}
            className="cursor-pointer"
          />
        </div>
        {isVisible ? (
          <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
            {data[0].answers.map((item, i) => (
              <article
                key={i}
                onClick={() => setQuantity(item.title)}
                className={`${
                  quantity === item.title
                    ? "bg-dark-cyan text-light-cream"
                    : "bg-[#F4F1EB] text-dark-grey-blue hover:bg-pale-orange"
                } rounded-lg flex flex-col gap-2 max-w-[350px] mx-auto p-6 cursor-pointer transition-colors duration-300 md:gap-6 md:py-10`}
              >
                <h3 className=" text-2xl font-Fraunces font-black">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Quantity;
