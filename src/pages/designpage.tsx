import { Link } from "react-router-dom";
import DesignIcon from "../../src/assets/svgs/icons.svg";
import DesignColor from "../../src/assets/svgs/colors.svg";
import DesignSpacing from "../../src/assets/svgs/space.svg";
import DesignTypo from "../../src/assets/svgs/typo.svg";
import DesignShape from "../../src/assets/svgs/shapes.svg";
import DesignThnking from "../../src/assets/img/design-thinking.png";
import DesignCloud from "../../src/assets/img/designclude.png";
import "../css/designpage.css";
import Footer from "../components/footer";

// import Designarrow from "../../src/assets/img/designarrow.png";

function DesignPage() {
  return (
    <>
      <div className="designpagewrap">
        <div className="designBanner">
          <div className="designDetailWarp">
            <img src={DesignCloud} className="bannerClude" />
            <h1 className="marginleft01">Design</h1>
            <h1 className="marginleft02">Thinking</h1>
            <p className="p01">
              <strong>
                Design thinking is a user-centered approach to problem-solving
                that <br />
                emphasizes empathy and creativity.
              </strong>
            </p>

            <p className="p01">
              Design Thinking is an iterative process focused on understanding
              the user, challenging assumptions, and redefining problems to
              identify alternative strategies and solutions. This approach
              combines solution-based thinking with hands-on methods, aiming to
              develop a deep understanding of the target audience. By fostering
              empathy, Design Thinking enables us to observe and connect with
              users, prompting us to question the problem, assumptions, and
              implications. This methodology is particularly effective in
              addressing ill-defined or unknown issues.
              <b>
                <div className="designbt">
                  <Link to={"/designthinkingpage"}> Learn More</Link>
                </div>
              </b>
            </p>
            {/* <p className="p02">
              Design Thinking revolves around a deep interest in developing an
              understanding of the people for whom we’re designing the products
              or services. It helps us observe and develop empathy with the
              target user. Design Thinking helps us in the process of
              questioning: questioning the problem, questioning the assumptions,
              and questioning the implications. Design Thinking is extremely
              useful in tackling problems that are ill-defined or unknown
             
            </p> */}
            {/* <div className="moreRound">
              <img src={Designarrow} />
            </div> */}
          </div>
          <img src={DesignThnking} className="designbannerimg" />
        </div>
        <div className="bannerReflection"></div>
        <div className="flexwrap">
          <div className="flexBoxbig">
            <div className="flexBoxWrap">
              <Link to="/spacingpage">
                <div className="flexBox">
                  <img src={DesignSpacing} className="Dimg1" />
                  <h3>Space & Alignments</h3>
                </div>
              </Link>
              <Link to="/typopage">
                <div className="flexBox">
                  <img src={DesignTypo} className="Dimg2" />
                  <h3>Fonts</h3>
                </div>
              </Link>
              <Link to="/iconpage">
                <div className="flexBox">
                  <img src={DesignIcon} className="Dimg3" />
                  <h3>Icons</h3>
                </div>
              </Link>
              <Link to="/shapepage">
                <div className="flexBox">
                  <img src={DesignShape} className="Dimg4" />
                  <h3>Shapes</h3>
                </div>
              </Link>
              <Link to="/colorpage">
                <div className="flexBox">
                  <img src={DesignColor} className="Dimg5" />
                  <h3>Colour</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DesignPage;
