import "./QuickStatStyle.css";
const QuickStat = ({ statistics }) => {
  const total_score = 15;
  return (
    <div className="quickStatDiv">
      <div className="quickStatHeading">Quick Statistics</div>

      <div className="statDiv">
        <div className="statSubDiv ">
          <div className="image-div">
            <img src="/assets/medal.svg" alt="icon" className="statIcon" />
          </div>
          <div className="quickStatInfo">
            <div className="data">{statistics?.rank}</div>
            <div className="desc">YOUR RANK</div>
          </div>
        </div>

        <div className="statSubDiv subdiv">
          <div className="image-div">
            <img src="/assets/notes.svg" alt="icon" className="statIcon" />
          </div>
          <div className="quickStatInfo">
            <div className="data">{statistics?.percentile}%</div>
            <div className="desc">PERCENTILE</div>
          </div>
        </div>

        <div className="statSubDiv subdiv">
          <div className="image-div">
            <img src="/assets/correct.png" alt="icon" className="statIcon" />
          </div>
          <div className="quickStatInfo">
            <div className="data">
              {statistics?.correct_ans < 10
                ? `0${statistics?.correct_ans}`
                : statistics?.correct_ans}{" "}
              /{total_score}
            </div>
            <div className="desc">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStat;
