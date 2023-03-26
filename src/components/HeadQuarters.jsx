import UK from "../assets/about/desktop/illustration-uk.svg";
import Canada from "../assets/about/desktop/illustration-canada.svg";
import Australia from "../assets/about/desktop/illustration-australia.svg";
import HeadQuarter from "./HeadQuarter";

const HeadQuarters = () => {

  return (
    <section className="my-32 mx-6 md:mx-10 lg:mx-20">
      <div className="container mx-auto">
        <h2 className="text-grey text-2xl font-Fraunces font-black text-center mb-16 md:text-left">
          Our headquarters
        </h2>
        <div className="grid grid-cols-1 text-center gap-20 md:grid-cols-3 md:gap-5 md:text-left lg:gap-10">
          <HeadQuarter img={UK} title="United Kingdom" address="68 Asfordby Rd" city="Alcaston" code="SY6 1YA" phoneNumber="+44 1241 918425"/>
          <HeadQuarter img={Canada} title="Canada" address="1528 Eglinton Avenue" city="Toronto" code="Ontario M4P 1A6" phoneNumber="+1 416 485 2997"/>
          <HeadQuarter img={Australia} title="Australia" address="36 Swanston Street" city="Kewell" code="Victoria" phoneNumber="+61 4 9928 3629"/>
        </div>
      </div>
    </section>
  );
};

export default HeadQuarters;
