import { useState } from "react";
import Arrow from "../assets/plan/desktop/icon-arrow.svg";
import CoffeeQuality from "./CoffeeQuality";
import questionsAndAnswers from "../utils/QuestionsAndAnswersData";

const CoffeeQuestionsAndAnswers = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <>
      {questionsAndAnswers.map((question, i) => (
        <section key={i} className="my-24 mx-6 md:mx-10 lg:my-20">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-grey text-2xl font-Fraunces font-black md:text-3xl lg:text-4xl">
                {question.question}
              </h1>
              <img src={Arrow} alt="arrow" />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
              {question.answers.map((answer, i) => (
                <CoffeeQuality key={i} {...answer} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CoffeeQuestionsAndAnswers;
