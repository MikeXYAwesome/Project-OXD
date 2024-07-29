import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import Lightpng from "../../assets/img/madebylight.png";

function MadebybentoBox() {
  return (
    <>
      <div className="bentobox madebywrap">
        <h1>inspired By OXD</h1>
        <p></p>
        <img src={Lightpng} className="greenlight" />
        <Link to="/madebypage" className="mainPagelinks">
          See The Magic
        </Link>
      </div>
    </>
  );
}

export default MadebybentoBox;
