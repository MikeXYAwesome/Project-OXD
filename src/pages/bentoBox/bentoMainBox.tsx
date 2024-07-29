import SplineAnimation from "../../components/animation";
import "../../css/bentobox.css";
import { Link } from "react-router-dom";

function MainbentoBox() {
  return (
    <>
      <div className="bentobox mainBentoBox">
        <div>
          <h1>
            Orange <br />
            eXperience <br />
            Design
          </h1>
          <h4 className="JamboTitle">
            Design that not only <br></br>follow functions, also feelings
          </h4>
          <p>
            OXD Design Guide Get in-depth information and design resources for
            designing UI, OXD (Orange eXperience Design) based on the
            user-centered design system, crafted with latest UX research to give
            user-friendly and modern symmetrical looking UI, inline with
            OrangeHRM brand guide.
          </p>
        </div>
        <div className="animatinMainbox">
          <SplineAnimation></SplineAnimation>
        </div>

        <Link to="/aboutpage" className="mainPagelinks">
          About Guide
        </Link>
      </div>
    </>
  );
}

export default MainbentoBox;
