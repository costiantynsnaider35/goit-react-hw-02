import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedBackData, setFeedBackData] = useState(() => {
    const saveBackData = JSON.parse(
      window.localStorage.getItem("feedBackData")
    );
    return saveBackData || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedBackData", JSON.stringify(feedBackData));
  }, [feedBackData]);

  const totalFeedBack =
    feedBackData.good + feedBackData.neutral + feedBackData.bad;

  const updateFeedBack = (feedbackType) => {
    setFeedBackData((value) => ({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    }));
  };

  const resetFeedBack = () => {
    setFeedBackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="wrapper">
      <Description />
      <Options
        totalFeedBack={totalFeedBack}
        handleUpdateFeedBack={updateFeedBack}
        resetFeedBack={resetFeedBack}
      />
      {totalFeedBack > 0 ? (
        <Feedback feedBack={feedBackData} totalFeedBack={totalFeedBack} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
