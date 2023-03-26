import UK from "../assets/about/desktop/illustration-uk.svg";

const HeadQuarters = () => {
  return (
    <section className="my-32 mx-6 md:mx-10 lg:mx-20">
      <div className="container mx-auto">
        <h2 className="text-grey text-2xl font-Fraunces font-black text-center mb-16">
          Our headquarters
        </h2>
        <div className="grid grid-cols-1 text-center">
          <article className="flex flex-col justify-center items-center">
            <img src={UK} alt="united-kingdom" />
            <h3 className="text-dark-grey-blue text-2xl font-Fraunces font-black mt-11 mb-6">
              United Kingdom
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-dark-grey-blue">68 Asfordby Rd</li>
              <li className="text-dark-grey-blue">Alcaston</li>
              <li className="text-dark-grey-blue">SY6 1YA</li>
              <li className="text-dark-grey-blue">+44 1241 918425</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeadQuarters;
