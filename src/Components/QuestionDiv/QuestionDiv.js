import "./QuestionDivStyle.css";

import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

const centerX = "45%";
const centerY = "40%";
const CustomSVG = () => {
  return (
    <svg width="100%" height="100%">
      {/* Place the <img> element in the center */}
      <image
        x={centerX}
        y={centerY}
        width="60"
        height="60"
        href="/assets/icon.png"
      />
    </svg>
  );
};

const QuestionDiv = ({ score }) => {
  const getData = (percent) => {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  };
  const [state, setState] = useState({
    percent: 25,
    data: getData(0),
  });
  let setStateInterval;

  useEffect(() => {
    let percent = (score / 15) * 100;
    setStateInterval = window.setInterval(() => {
      setState({
        percent,
        data: getData(percent),
      });
    }, 2000);

    return () => {
      window.clearInterval(setStateInterval);
    };
  }, []);

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
        However it still needs some improvement.
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
                fill: ({ datum }) => {
                  const color = "#438AF6";
                  return datum.x === 1 ? color : "rgba(67, 138, 246, 0.10)";
                },
              },
            }}
          />

          <CustomSVG />
        </svg>
      </div>
    </div>
  );
};

export default QuestionDiv;
