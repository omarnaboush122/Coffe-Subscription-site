import Gran from "../assets/home/desktop/image-gran-espresso.png";

const OurCollection = () => {
  return (
    <section className="my-[120px]">
      <div className="collection w-full flex justify-center items-center px-11">
        <h1 className="text-4xl font-Fraunces font-black text-grey">
          our collection
        </h1>
      </div>
      <div className="grid grid-cols-1 max-w-[300px] mx-auto text-center mt-10">
        <article className="flex flex-col justify-center items-center">
          <img src={Gran} alt="gran-espresso" className="w-[200px]" />
          <h3 className="text-dark-grey-blue font-Fraunces text-2xl font-black mt-6 mb-4">Gran Espresso</h3>
          <p className="text-dark-grey-blue">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </article>
      </div>
    </section>
  );
};

export default OurCollection;
