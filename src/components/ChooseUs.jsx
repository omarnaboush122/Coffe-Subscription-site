import Quality from "../assets/home/desktop/icon-coffee-bean.svg";

const ChooseUs = () => {
  return (
    <section className="relative bg-black w-[88vw] h-[900px] my-[120px] mx-auto rounded-lg">
      <div className="pt-14 px-6">
        <div className="text-center mb-16">
          <h2 className="text-light-cream text-3xl font-Fraunces font-black mb-6">
            Why choose us?
          </h2>
          <p className="text-light-cream opacity-80">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more experience on every level.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <article className="bg-dark-cyan h-96 px-6 flex flex-col justify-center items-center text-center gap-14 rounded-lg">
            <img src={Quality} alt="quality" />
            <div>
              <h3 className="text-2xl text-light-cream font-Fraunces font-black mb-6">Best quality</h3>
              <p className="text-light-cream">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
