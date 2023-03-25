import Quality from "../assets/home/desktop/icon-coffee-bean.svg";
import Benefits from "../assets/home/desktop/icon-gift.svg";
import Shipping from "../assets/home/desktop/icon-truck.svg";
import Service from "./Service";

const ChooseUs = () => {
  const services = [
    {
      id: 1,
      title: "Best quality",
      desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
      img: Quality,
    },
    {
      id: 2,
      title: "Exclusive benefits",
      desc: "Special offers and swag when you subscribe, including 30% off your first shipment.",
      img: Benefits,
    },
    {
      id: 3,
      title: "Free shipping",
      desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
      img: Shipping,
    },
  ];

  const servicesElements = services.map((item) => (
    <Service key={item.id} {...item} />
  ));

  return (
    <section className="relative bg-black h-[900px] my-[120px] mx-6 rounded-lg md:h-[600px] md:mx-10 lg:mx-20">
      <div className="pt-14 px-6">
        <div className="max-w-[540px] mx-auto text-center mb-16 lg:mb-32">
          <h2 className="text-light-cream text-3xl font-Fraunces font-black mb-6">
            Why choose us?
          </h2>
          <p className="text-light-cream opacity-80">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more experience on every level.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:px-14 lg:grid-cols-3">{servicesElements}</div>
      </div>
    </section>
  );
};

export default ChooseUs;
