import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import IconGirl from "../../assets/img/icongirl.png";
import IconTop from "../../assets/svgs/iconstop.svg";
import IconBttom from "../../assets/svgs/iconbottom.svg";

function IconsBentoBox() {
  return (
    <>
      <div className="bentobox bentoiconWrap">
        <h1>OXD Icons</h1>
        {/* <p>Ice burge</p> */}
        <img src={IconTop} className="icontop" />
        <img src={IconGirl} className="icongirl" />
        <img src={IconBttom} className="iconbottom" />
        <Link to="/iconpage" className="mainPagelinks">
          Get Icons
        </Link>
      </div>
    </>
  );
}

export default IconsBentoBox;
