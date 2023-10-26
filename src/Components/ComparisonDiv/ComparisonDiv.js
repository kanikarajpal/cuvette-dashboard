import "./ComparisonDivStyle.css";
import { useState, useEffect } from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
} from "victory";

const generateRandomData = () => {
  return Array(5)
    .fill()
    .map((_, index) => ({
      x: index * 20,
      y: Math.floor(Math.random() * 5),
    }));
};

const ComparisonDiv = ({ percentile }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const randomData = generateRandomData();
    const updatedData = [...randomData, { x: parseInt(percentile, 10), y: 5 }];
    console.log(updatedData, "data");
    setData(updatedData);
  }, [percentile]);
  return (
    <div className="comparisonDiv">
      <div className="comparisonUpperDiv">
        <div className="leftComparisonDiv">
          <p className="comparisonHeading">Comparison Graph</p>
          <p className="comparisonText">
            <span className="bold-text">
              You scored {percentile}% percentile
            </span>{" "}
            which is lower than the <br />
            average percentile 72% of all the engineers who took this assessment
          </p>
        </div>
        <div className="rightComparisonDiv">
          <div className="image-div">
            <img src="/assets/graph.svg" alt="icon" className="statIcon" />
          </div>
        </div>
      </div>
      <div className="comparisonLowerDiv">
        <VictoryChart height={200}>
          <VictoryAxis
            style={{
              axisLabel: { fill: "#9EAAB7" },
              tickLabels: { fill: "#9EAAB7" },
            }}
          />
          <VictoryLine
            interpolation="natural"
            data={data}
            style={{ data: { stroke: "#C8D6E5" } }}
          />
          <VictoryScatter
            data={data}
            size={5}
            style={{ data: { fill: "#438AF6" } }}
            labels={({ datum }) => {
              if (datum.x === percentile) {
                return `Your score: ${percentile} Percentile`;
              } else {
                return `Score: ${datum.x}`;
              }
            }}
            labelComponent={
              <VictoryTooltip
                cornerRadius={5}
                pointerLength={10}
                flyoutStyle={{
                  fill: "#1E272E",
                  stroke: "#1E272E",
                  strokeWidth: 1,
                }}
                style={{ fill: "white" }}
              />
            }
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default ComparisonDiv;
