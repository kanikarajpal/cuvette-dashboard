import "./ComparisonDivStyle.css";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
} from "victory";

const data = [
  { x: 0, y: 0 },
  { x: 20, y: 3 },
  { x: 40, y: 4 },
  { x: 60, y: 2 },
  { x: 80, y: 4 },
  { x: 100, y: 5 },
];

const ComparisonDiv = ({ percentile }) => {
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
          <VictoryAxis // X-Axis
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
            labels={() => `Your score : ${percentile} Percentile  `}
            labelComponent={
              <VictoryTooltip
                cornerRadius={5}
                pointerLength={10}
                flyoutStyle={{
                  fill: "#1E272E", // Background color
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
