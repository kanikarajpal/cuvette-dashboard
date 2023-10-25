import "./SkillDivStyle.css";

const SkillDiv = ({ setOpenModal }) => {
  return (
    <div className="skillDiv">
      <div className="skillLeftDiv">
        <img src="assets/html.png" alt="html icon" className="icon" />
        <div className="skillsText">
          <p className="text-bold">HyperText Markup Language</p>
          <p className="text-normal">
            Questions : 08 | Duration : 15mins | Submitted on 5June 2021{" "}
          </p>
        </div>
      </div>
      <button
        className="updateBtn buttonDiv"
        onClick={() => {
          setOpenModal((res) => !res);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default SkillDiv;
