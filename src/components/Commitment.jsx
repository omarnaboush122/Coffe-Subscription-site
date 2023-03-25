import CoffeMan from "../assets/about/mobile/image-commitment.jpg";

const Commitment = () => {
  return (
    <section className="my-[120px] mx-6 md:my-40 md:mx-10 lg:mx-40">
      <div className="flex flex-col gap-12 text-center md:flex-row md:text-left md:gap-16 lg:items-center lg:gap-32">
        <article>
          <img
            src={CoffeMan}
            alt="man make a coffee"
            className="rounded-md object-cover md:w-72 md:h-[470px] lg:w-[445px] lg:h-[520px]"
          />
        </article>
        <article>
          <h3 className="text-dark-grey-blue text-3xl font-Fraunces font-black mb-8 lg:text-4xl">
            Our commitment
          </h3>
          <p className="text-dark-grey-blue opacity-80 max-w-[340px] mx-auto md:m-0 lg:max-w-[540px]">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Commitment;
