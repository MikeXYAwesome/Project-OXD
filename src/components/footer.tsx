import "../css/footer.css";
import SvgOXDlogo from "../assets/svgs/oxd-freestyle.svg";

function Footer() {
  return (
    <footer className="footerWrap">
      <div className="footerCurve"></div>
      <div className="footerContent">
        <div className="footerLogos">
          <img src={SvgOXDlogo} alt="OXD Logo" className="footerOxdLogo" />
        </div>
        <div className="footerLinks"></div>
        <div className="footerCopyright"> OXD version 3.0 </div>
        <div className="footerCopyright">
          &copy; {new Date().getFullYear()} OrangeHRM.inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
