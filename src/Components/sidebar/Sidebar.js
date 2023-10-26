import { SIDEBAR_ITEMS } from "../../utils/data";
import "./SidebarStyle.css";
const Sidebar = () => {
  return (
    <div className="container">
      <div className="mainDiv">
        {SIDEBAR_ITEMS &&
          SIDEBAR_ITEMS.map(({ icon, name, id }) => {
            return (
              <div
                className={`innerDiv ${
                  name === SIDEBAR_ITEMS[1].name ? "activeDiv" : ""
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
