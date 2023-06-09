import { useEffect, useState } from "react";
import Arrow from "../assets/plan/desktop/icon-arrow.svg";

const Deliver = ({ delivery, setDelivery, quantity }) => {
  const [data, setData] = useState([
    {
      question: "How often should we deliver?",
      answers: [
        {
          title: "Every week",
          desc: `$7.20 per shipment. Includes free first-class shipping.`,
        },
        {
          title: "Every 2 weeks",
          desc: `$9.60 per shipment. Includes free priority shipping.`,
        },
        {
          title: "Every month",
          desc: `$12.00 per shipment. Includes free priority shipping.`,
        },
      ],
    },
  ]);

  useEffect(() => {
    if (quantity === "250g") {
      setData([
        {
          question: "How often should we deliver?",
          answers: [
            {
              title: "Every week",
              desc: `$7.20 per shipment. Includes free first-class shipping.`,
            },
            {
              title: "Every 2 weeks",
              desc: `$9.60 per shipment. Includes free priority shipping.`,
            },
            {
              title: "Every month",
              desc: `$12.00 per shipment. Includes free priority shipping.`,
            },
          ],
        },
      ]);
    } else if (quantity === "500g") {
      setData([
        {
          question: "How often should we deliver?",
          answers: [
            {
              title: "Every week",
              desc: `$13.00 per shipment. Includes free first-class shipping.`,
            },
            {
              title: "Every 2 weeks",
              desc: `$17.50 per shipment. Includes free priority shipping.`,
            },
            {
              title: "Every month",
              desc: `$22.00 per shipment. Includes free priority shipping.`,
            },
          ],
        },
      ]);
    } else {
      setData([
        {
          question: "How often should we deliver?",
          answers: [
            {
              title: "Every week",
              desc: `$22.00 per shipment. Includes free first-class shipping.`,
            },
            {
              title: "Every 2 weeks",
              desc: `$32.00 per shipment. Includes free priority shipping.`,
            },
            {
              title: "Every month",
              desc: `$42.00 per shipment. Includes free priority shipping.`,
            },
          ],
        },
      ]);
    }
  }, [quantity]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <section id="deliveries" className="mx-6 md:mx-10">
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
                onClick={() => setDelivery(item.title)}
                className={`${
                  delivery === item.title
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

export default Deliver;
