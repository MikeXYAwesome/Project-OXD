import Footer from "../components/footer";
import GuideCard from "../components/guidecard";
import OrangeLogo from "../assets/img/oxd-icon.png";
import "../css/guidepage.css";

function GuidePage() {
  return (
    <>
      <div className="GuidePageWrap">
        <div className="Orangelogo-G">
          <img src={OrangeLogo} alt="Orange Logo" />
        </div>
        <h1 className="Guidetitle">Guides</h1>
        <div className="GridWarp">
          <GuideCard
            title="QA Guide"
            description=" Resource for ensuring quality assurance in user interface design. Discover best practices for testing UI elements, optimizing usability, and ensuring a seamless user experience. Streamline your QA process and deliver flawless UI designs with actionable insights and expert guidance."
            image="img/guideimg/qabg1.png"
            textcolor="black"
            link="/qaguidepage"
          />
          <GuideCard
            title="UX Standards"
            description="A set of guidelines that define how a user interface should look, feel, and behave. They are important for ensuring that users have a consistent and predictable experience when interacting with a product"
            image="img/guideimg/uxbg1.png"
            textcolor="white"
            link="/uxpage"
          />
          <GuideCard
            title="Color Guide"
            description=" Essential toolkit for mastering color theory, selection, and application in orange experience design. Explore the psychology of color, create harmonious palettes, and ensure accessibility for all users. Unlock the full potential of color in your digital projects with real-world examples and practical tips tailored specifically for OXD professionals."
            image="img/guideimg/colorbg1.png"
            textcolor="white"
            link="/colorpage"
          />
          <GuideCard
            title="UI Guidelines"
            description=" Delves into the art and science of crafting user-friendly and efficient forms for OXD Product. this guide offers insights into optimizing form design to enhance user experience and maximize completion rates. By exploring principles of usability, visual hierarchy, input validation, and error handling,"
            image="img/guideimg/uibg1.png"
            textcolor="black"
            link="/formdesignpage"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuidePage;
