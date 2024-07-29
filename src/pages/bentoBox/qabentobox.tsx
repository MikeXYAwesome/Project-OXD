import "../../css/bentobox.css";
import { Link } from "react-router-dom";

function QaBentoBox() {
  return (
    <>
      <div className="bentobox qabentowrap">
        <h1>Guides</h1>
        <p></p>
        <Link to="../guidepage" className="mainPagelinks">
          Learn Guidelines
        </Link>
      </div>
    </>
  );
}

export default QaBentoBox;
