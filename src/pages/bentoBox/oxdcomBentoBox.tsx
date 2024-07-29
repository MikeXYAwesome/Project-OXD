import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import ComExtend from "../../assets/img/extendcom.png";
import ComHand from "../../assets/img/thehand.png";

function OXDComBentoBox() {
  return (
    <>
      <div className="bentobox componetwarp">
        <div>
          <h1>OXD Componets</h1>
          <p>High Quality Pre Made Reusable Design Elements</p>
        </div>
        <div className="switchWrap">
          <div className="switchRound"></div>
        </div>
        <img src={ComExtend} className="comExtendpng" />
        <img src={ComHand} className="thehand" />
        <Link to="/componetspage" className="mainPagelinks">
          Look All the Building Blocks
        </Link>
      </div>
    </>
  );
}

export default OXDComBentoBox;
