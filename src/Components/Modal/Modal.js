import "./ModalStyle.css";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Modal = ({ statistics, setStatistics, setOpenModal }) => {
  const data = [
    {
      name: "rank",
      value: "rank",
    },
    {
      name: "percentile",
      value: "percentile",
    },
    {
      name: "current-score (out of 15)",
      value: "correct_ans",
    },
  ];
  const [inputData, setInputData] = useState(statistics);
  const handleChange = (e, name) => {
    setInputData({ ...inputData, [name]: e.target.value });
    console.log(inputData);
  };
  const handleSave = () => {
    setStatistics(inputData);
    setOpenModal(false);
  };
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalUpperDiv">
          <p className="modalHeading">Update Scores</p>
          <img src="/assets/html.png" className="modalIcon" />
        </div>
        <div className="modalMiddleDiv">
          {data?.map((item, id) => {
            return (
              <div className="modalItem">
                <div className="modalItemDiv">
                  <div className="logo-bg">{id + 1}</div>
                  <p className="modal-text">
                    Update your <span className="text-bold">{item.name}</span>
                  </p>
                </div>
                <input
                  className="inputDiv"
                  name={item?.name}
                  value={inputData[item.value]}
                  onChange={(e) => {
                    handleChange(e, item?.value);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="lowerModalDiv">
          <div className="lower-right-div">
            <button
              className="cancel-btn buttonDiv"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancel
            </button>
            <button className="save-btn buttonDiv" onClick={handleSave}>
              Save <AiOutlineArrowRight style={{ fontWeight: "bold" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
