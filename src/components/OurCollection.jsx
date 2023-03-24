import Gran from "../assets/home/desktop/image-gran-espresso.png";
import Danche from "../assets/home/desktop/image-danche.png";
import Piccollo from "../assets/home/desktop/image-piccollo.png";
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
      title: "Piccollo",
      desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
      img: Piccollo,
    },
    {
      id: 3,
      title: "Danche",
      desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      img: Danche,
    },
  ];

  const collectionsElements = collections.map((item) => <ItemOfCollections key={item.id} {...item} />);
  return (
    <section className="my-[120px]">
      <div className="collection w-full flex justify-center items-center px-11">
        <h1 className="text-4xl font-Fraunces font-black text-grey">
          our collection
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-12 max-w-[300px] mx-auto text-center mt-10">
        {collectionsElements}
      </div>
    </section>
  );
};

export default OurCollection;
