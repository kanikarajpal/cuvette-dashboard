import "./SyllabusDivStyle.css";
import { SYLLABUS_DATA } from "../../utils/data";
import ProgressBar from "@ramonak/react-progress-bar";
const SyllabusDiv = () => {
  return (
    <div className="syllabusDiv">
      <div className="syllabusHeading">Syllabus wise Analysis</div>
      {SYLLABUS_DATA &&
        SYLLABUS_DATA.map((item) => {
          return (
            <div>
              <div className="subHeading">{item?.name}</div>
              <div className="progressBarDiv">
                <ProgressBar
                  width="197px"
                  height="10px"
                  completed={item.percentage}
                  bgColor={item.primaryColor}
                  baseBgColor={item?.secondaryColor}
                  maxCompleted={100}
                  isLabelVisible={false}
                  className="progressBar"
                />
                <div
                  className="percentageDiv"
                  style={{ color: item?.primaryColor }}
                >
                  {item?.percentage}%
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SyllabusDiv;
