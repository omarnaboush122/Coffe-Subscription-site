import ChooseUs from "../components/ChooseUs";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import OurCollection from "../components/OurCollection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <OurCollection />
        <ChooseUs />
        <HowItWorks />
      </main>
    </>
  );
};

export default Home;
