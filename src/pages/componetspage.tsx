import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import OrangeLogo from "../assets/img/oxd-icon.png";

import "../css/oxdcomponets.css";

function ComPage() {
  return (
    <>
      <div className="comwrap">
        <div className="Orangelogo">
          <img src={OrangeLogo} alt="Orange Logo" />
        </div>
        <div className="leftblock">
          <Sidebar></Sidebar>
        </div>
        <div className="rightblock">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default ComPage;
