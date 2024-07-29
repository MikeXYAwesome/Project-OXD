import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import WidgetsMan from "../../assets/img/WidgetsMan.png";

function WidgetsBentoBox() {
  return (
    <>
      <div className="bentobox widgetsbentowrap">
        <h1> OXD Widgets</h1>
        <p></p>
        <img src={WidgetsMan} className="WidgetsMan" />
        <Link
          to="https://www.figma.com/design/trq6xZEJklS2oTFCyNzvdW/OXD-Widgets?node-id=0-1&t=GYuSDpGNe2JR9EcJ-1"
          className="mainPagelinks"
        >
          See The Magic
        </Link>
      </div>
    </>
  );
}

export default WidgetsBentoBox;
