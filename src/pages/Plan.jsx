import PlanHeader from "../components/PlanHeader";
import Questions from "../components/Questions";
import Steps from "../components/Steps";

const Plan = () => {
  return (
    <>
      <PlanHeader />
      <main>
        <Steps />
        <Questions />
      </main>
    </>
  );
};

export default Plan;
