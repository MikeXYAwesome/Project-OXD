import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import UXPerson from "../../assets/img/uxperson.png";

function UxBentoBox() {
  return (
    <>
      <div className="bentobox uxbentobox">
        <h1>
          User Experience <br></br>Standards
        </h1>
        <img src={UXPerson} className="uxperson" />
        <Link to="/uxpage" className="mainPagelinks">
          Learn More
        </Link>
      </div>
    </>
  );
}

export default UxBentoBox;
