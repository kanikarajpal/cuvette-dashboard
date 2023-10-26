import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryAnimation } from "victory";
import "./QuestionDivStyle.css";

const QuestionDiv = ({ score }) => {
  const getData = (percent) => [
    { x: 1, y: percent },
    { x: 2, y: 100 - percent },
  ];

  const [state, setState] = useState({
    percent: 25,
    data: getData(0),
  });
  let setStateInterval;

  useEffect(() => {
    const percent = (score / 15) * 100;
    setStateInterval = setInterval(() => {
      setState({ percent, data: getData(percent) });
    }, 2000);

    return () => {
      clearInterval(setStateInterval);
    };
  }, [score]);

  return (
    <div className="QuestionsDiv">
      <div className="QuestionsUpperDiv">
        <div className="QuestionsDivHeading">Question Analysis</div>
        <div className="quesDiv">{score < 10 ? `0${score}` : score}/15</div>
      </div>

      <p className="middleDiv">
        <span className="bold-text">
          You scored {score} questions out of 15.
        </span>{" "}
        However, it still needs some improvement.
      </p>
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={state.data}
            innerRadius={90}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) =>
                  datum.x === 1 ? "#438AF6" : "rgba(67, 138, 246, 0.10)",
              },
            }}
          />
          <image
            x="45%"
            y="40%"
            width="60"
            height="60"
            href="/assets/icon.png"
          />
        </svg>
      </div>
    </div>
  );
};

export default QuestionDiv;
