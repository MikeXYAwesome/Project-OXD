import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import OimBulb from "../../assets/img/oimbulb.png";
import lightTheBulb from "../../assets/img/lightbulb.png";

function OimBentoBox() {
  return (
    <>
      <div className="bentobox oimbentobox">
        <h1>
          OXD Interactive<br></br> Module
        </h1>
        <img src={OimBulb} className="oimimg" />
        <img src={lightTheBulb} className="lightOn" />
        <Link to="/oimpage" className="mainPagelinks">
          Learn Interactive Modules
        </Link>
      </div>
    </>
  );
}

export default OimBentoBox;
