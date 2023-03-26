import CoffeeQuestionsAndAnswers from "../components/CoffeeQuestionsAndAnswers";
import PlanHeader from "../components/PlanHeader";
import Steps from "../components/Steps";

const Plan = () => {
  return (
    <>
      <PlanHeader />
      <main>
        <Steps />
        <CoffeeQuestionsAndAnswers />
      </main>
    </>
  );
};

export default Plan;
