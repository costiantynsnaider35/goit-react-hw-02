const Feedback = ({ feedBack, totalFeedBack }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedBack.good}</li>
        <li>Neutral: {feedBack.neutral}</li>
        <li>Bad: {feedBack.bad}</li>
        <li>Total: {totalFeedBack}</li>
        <li>Positive: {Math.round((feedBack.good / totalFeedBack) * 100)}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
