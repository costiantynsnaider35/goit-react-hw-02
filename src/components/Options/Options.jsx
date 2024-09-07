const Options = ({ totalFeedBack, handleUpdateFeedBack, resetFeedBack }) => {
  return (
    <div>
      <button onClick={() => handleUpdateFeedBack("good")}>Good</button>
      <button onClick={() => handleUpdateFeedBack("neutral")}>Neutral</button>
      <button onClick={() => handleUpdateFeedBack("bad")}>Bad</button>
      {totalFeedBack > 0 && <button onClick={resetFeedBack}>Reset</button>}
    </div>
  );
};

export default Options;
