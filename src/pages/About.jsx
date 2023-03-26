import AboutHeader from "../components/AboutHeader";
import Commitment from "../components/Commitment";
import HeadQuarters from "../components/HeadQuarters";
import Quality from "../components/Quality";

const About = () => {
  return (
    <>
      <AboutHeader />
      <main>
        <Commitment />
        <Quality />
        <HeadQuarters />
      </main>
    </>
  );
};

export default About;
