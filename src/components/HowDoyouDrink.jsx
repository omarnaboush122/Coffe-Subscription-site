import { useState } from "react";
import Arrow from "../assets/plan/desktop/icon-arrow.svg";

const HowDoyouDrink = () => {
  const [data, setData] = useState([
    {
      question: "How do you drink your coffee?",
      answers: [
        {
          title: "Capsule",
          desc: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: "Filter",
          desc: "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          title: "Espresso",
          desc: "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
  ]);

  const [answer, setAnswer] = useState(null);

  return (
    <section className="my-24 mx-6 md:mx-10 lg:my-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-grey text-2xl font-Fraunces font-black md:text-3xl lg:text-4xl">
            {data[0].question}
          </h1>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
          {data[0].answers.map((item, i) => (
            <article
              key={i}
              onClick={() => setAnswer(item.title)}
              className={`${
                answer === item.title
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
      </div>
    </section>
  );
};

export default HowDoyouDrink;
