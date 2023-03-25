import ChooseUs from "../components/ChooseUs";
import Header from "../components/Header";
import OurCollection from "../components/OurCollection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <OurCollection />
        <ChooseUs />
      </main>
    </>
  );
};

export default Home;
