import "./MainContainerStyle.css";
import { useState } from "react";

import SkillDiv from "../SkillDiv/SkillDiv";
import QuestionDiv from "../QuestionDiv/QuestionDiv";
import ComparisonDiv from "../ComparisonDiv/ComparisonDiv";
import SyllabusDiv from "../SyllabusDiv/SyllabusDiv";
import QuickStat from "../QuickStat/QuickStat";
import Modal from "../Modal/Modal";

const MainContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [statistics, setStatistics] = useState({
    rank: 12890,
    percentile: 37,
    correct_ans: 7,
  });
  if (openModal)
    return (
      <Modal
        statistics={statistics}
        setStatistics={setStatistics}
        setOpenModal={setOpenModal}
      />
    );

  return (
    <div className="containerBox">
      <div className="upperSkillDiv">Skill Test</div>
      <div className="lowerSkillDiv">
        <div className="mainLeftDiv">
          <SkillDiv setOpenModal={setOpenModal} />
          <QuickStat statistics={statistics} />
          <ComparisonDiv percentile={statistics?.percentile} />
        </div>

        <div className="mainRightDiv">
          <SyllabusDiv />
          <QuestionDiv score={statistics?.correct_ans} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
