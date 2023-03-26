import CoffeeCup from "../assets/about/mobile/image-quality.jpg";
import CoffeeTab from "../assets/about/tablet/image-quality.jpg";
import CoffeeDesktop from "../assets/about/desktop/image-quality.jpg";

const Quality = () => {
  return (
    <section className="relative my-36 mx-6 md:mx-10 md:mt-80 lg:mx-20">
      <div className="bg-black container mx-auto pt-36 pb-16 px-6 rounded-md md:px-16 md:pt-44 lg:flex lg:justify-between lg:items-center lg:px-20 lg:pt-10 lg:pb-32">
        <article className="absolute w-[80%] h-40 -top-[10%] left-[10%] md:h-80 md:-top-[50%] lg:w-[445px] lg:h-[474px] lg:left-[60%] lg:-top-40">
          <img
            src={CoffeeCup}
            alt="coffee-cup"
            className="w-full h-full rounded-md object-cover md:hidden"
          />
          <img
            src={CoffeeTab}
            alt="coffee-cup"
            className="hidden md:block w-full h-full rounded-md object-cover lg:hidden"
          />
          <img
            src={CoffeeDesktop}
            alt="coffee-cup"
            className="hidden lg:block w-full h-full rounded-md object-cover"
          />
        </article>
        <article className="text-center lg:text-left">
          <h3 className="text-light-cream text-3xl font-Fraunces font-black mb-6 md:text-4xl lg:mb-8">
            Uncompromising quality
          </h3>
          <p className="text-light-cream opacity-80 max-w-[540px] mx-auto lg:m-0">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </article>
        <div></div>
      </div>
    </section>
  );
};

export default Quality;
