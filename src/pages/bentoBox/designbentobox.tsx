import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import Wave from "react-wavify";
import Clude from "../../assets/img/cloud.png";

function DesignBentoBox() {
  return (
    <>
      <div className="bentobox designbentobox">
        <h1>
          Design
          <br />
          Philosophy
        </h1>
        <img src={Clude} className="BentoClude" />
        <div className="waveWrap">
          <Wave
            fill="#07eded"
            paused={false}
            className="icewave"
            style={{ display: "flex" }}
            options={{
              height: 75,
              amplitude: 15,
              speed: 0.25,
              points: 8,
            }}
          />
        </div>

        <Link to="/designthinkingpage" className="mainPagelinks">
          See What's Behind
        </Link>
      </div>
    </>
  );
}

export default DesignBentoBox;
