import Gran from "../assets/home/desktop/image-gran-espresso.png";
import Danche from "../assets/home/desktop/image-danche.png";
import Piccollo from "../assets/home/desktop/image-piccollo.png";
import Planalto from "../assets/home/desktop/image-planalto.png";
import ItemOfCollections from "./ItemOfCollections";

const OurCollection = () => {
  const collections = [
    {
      id: 1,
      title: "Gran Espresso",
      desc: "Light and flavorful blend with cocoa and black pepper for an intense experience",
      img: Gran,
    },
    {
      id: 2,
      title: "Planalto",
      desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
      img: Planalto,
    },
    {
      id: 3,
      title: "Piccollo",
      desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
      img: Piccollo,
    },
    {
      id: 4,
      title: "Danche",
      desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      img: Danche,
    },
  ];

  const collectionsElements = collections.map((item) => (
    <ItemOfCollections key={item.id} {...item} />
  ));

  return (
    <section className="relative my-[120px] lg:my-60">
      <div className="collection w-full flex justify-center items-center px-11 md:absolute md:-top-16 lg:-top-20">
        <h1 className="text-4xl font-Fraunces font-black text-grey opacity-20 md:text-8xl lg:text-9xl">
          our collection
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-12 relative max-w-[300px] mx-auto text-center mt-10 md:max-w-[600px] md:text-left lg:grid-cols-4 lg:max-w-[1000px] lg:text-center lg:gap-4">
        {collectionsElements}
      </div>
    </section>
  );
};

export default OurCollection;
