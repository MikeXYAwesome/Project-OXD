import { useEffect, useState } from "react";
import "../css/homepage.css";
import MainbentoBox from "./bentoBox/bentoMainBox";
import OimBentoBox from "./bentoBox/oimBentoBox";
import FigmaBentoBox from "./bentoBox/figmaBentoBox";
import UxBentoBox from "./bentoBox/bentoboxux";
import DesignBentoBox from "./bentoBox/designbentobox";
import MadebybentoBox from "./bentoBox/madebyBentoBox";
import OXDComBentoBox from "./bentoBox/oxdcomBentoBox";
import IconsBentoBox from "./bentoBox/iconbentobox";
import QaBentoBox from "./bentoBox/qabentobox";
import WidgetsBentoBox from "./bentoBox/oxdWidgetbentobox";
import SvgMagnificatGalss from "../assets/img/magnificatglass.png";
import SvgOhrmLogo from "../assets/svgs/OrangeHRM_Logo.svg";
import Svgswingarrow from "../assets/svgs/swingarrow.svg";
import Svgpentool from "../assets/svgs/pen.svg";
import Footer from "../components/footer";
import Loading from "../components/loading";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="homePageWrap">
        <div className="Ohrmlogo">
          <img src={SvgOhrmLogo} alt="" className="OhrmLogo" />
        </div>
        <div className="oxdtxt">Orange eXperience Design</div>
        <div className="flotitmewrap">
          <div>
            <img src={Svgswingarrow} alt="" className="Swingarrow" />
          </div>
          <div>
            <img src={Svgpentool} alt="" className="pentool" />
          </div>
        </div>

        <div className="homeBannerWarp">
          <h1 className="oxdtxt"></h1>
        </div>

        <div className="bentoMainwarp">
          <div className="bentowrpa1">
            <MainbentoBox />
            <div className="TitleExplore">
              <div>Explore</div>
              <div>
                <img src={SvgMagnificatGalss} className="MgGlass" />
              </div>
            </div>
          </div>

          <div className="bentosidea">
            <div className="bentowrpa2">
              <OimBentoBox />
            </div>
            <div className="bentowrpa3">
              <FigmaBentoBox />
            </div>
            <div className="bentowrpa4">
              <UxBentoBox />
            </div>
          </div>
          <div className="bentosideb">
            <div className="bentowrpa5">
              <DesignBentoBox />
            </div>
          </div>
          <div className="bentosidebc">
            <div className="bentowrpa6">
              <MadebybentoBox />
            </div>
            <div className="bentowrpa7">
              <OXDComBentoBox />
            </div>
          </div>
          <div className="bentowrpa8">
            <IconsBentoBox />
          </div>
          <div className="bentowrpa9">
            <QaBentoBox />
          </div>
          <div className="bentowrpa10">
            <WidgetsBentoBox />
          </div>
          <div className="OtherLinkCard" data-aos="fade-right">
            {/* <Link to="/exampage" className="Olinks">
              <img src={SvgExam} />
              OXD Exam
            </Link>
            <Link to="/design/colorpage" className="Olinks">
              <img src={SvgCetificate} />
              OXD Certifications
            </Link>
            <Link to="/oxdblogpage" className="Olinks">
              <img src={SvgBlog} />
              OXD Blogs
            </Link>
            <Link to="/controlpanel" className="Olinks">
              Xy Admin
            </Link> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
