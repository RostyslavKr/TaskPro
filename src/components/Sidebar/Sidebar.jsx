import Logo from "./Logo";
import Boards from "./Boards";
import Help from "./Help";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Logo />
        <Boards />
      </div>
      <div className="sidebar-bottom">
        <Help />
        <button type="button" className="logout-button button">
          <svg className="logout-icon">
            <use href="" />
          </svg>
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
