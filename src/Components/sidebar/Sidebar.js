import { SIDEBAR_ITEMS } from "../../utils/data";
import { useState } from "react";
import "./SidebarStyle.css";
const Sidebar = () => {
  const [activeState, setActiveState] = useState(SIDEBAR_ITEMS[1]);
  return (
    <div className="container">
      <div className="mainDiv">
        {SIDEBAR_ITEMS &&
          SIDEBAR_ITEMS.map(({ icon, name, id }) => {
            return (
              <div
                className={`innerDiv ${
                  name === activeState.name ? "activeDiv" : ""
                }`}
              >
                {icon}
                <p>{name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
