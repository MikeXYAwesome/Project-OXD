import ScrollToTop from "../../components/ScrollToTop";
import ImageBox from "../../components/imagebox";
import Loading from "../../components/loading";
import OrangeLogo from "../../assets/img/oxd-icon.png";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import "../../css/common.css";
import "../../css/oimpage.css";
import { Link } from "react-router-dom";

function FormDesignPage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const handleScroll = () => {
      const sections = [
        "design-interdiction",
        "form-proximity",
        "form-radio",
        "form-checkbox",
        "form-dropdown",
        "form-actionbt",
        "form-column",
        "form-error",
        "form-modal",
        "form-placeholder",
        "form-prominent",
        "form-profile",
        "form-lable",
      ];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="PageWarp">
        <div className="pageLogo">
          <img src={OrangeLogo} alt="Orange Logo" />
        </div>
        <div className="sidewarp">
          <div className="pageTitle">UI Guidelines</div>
          <h3 className="titleSidewarp">content</h3>
          <ul>
            <li
              className={
                activeSection === "design-interdiction" ? "active" : ""
              }
              onClick={() => scrollToSection("design-interdiction")}
            >
              Interdiction
            </li>
            <li
              className={activeSection === "form-proximity" ? "active" : ""}
              onClick={() => scrollToSection("form-proximity")}
            >
              Form Group and Proximity
            </li>
            <li
              className={activeSection === "form-radio" ? "active" : ""}
              onClick={() => scrollToSection("form-radio")}
            >
              Batter alternative To Radio
            </li>
            <li
              className={activeSection === "form-checkbox" ? "active" : ""}
              onClick={() => scrollToSection("form-checkbox")}
            >
              Too Many Checkboxes?
            </li>
            <li
              className={activeSection === "form-dropdown" ? "active" : ""}
              onClick={() => scrollToSection("form-dropdown")}
            >
              Radio Button vs Drop-downs
            </li>
            <li
              className={activeSection === "form-actionbt" ? "active" : ""}
              onClick={() => scrollToSection("form-actionbt")}
            >
              Action Buttons Alignment
            </li>
            <li
              className={activeSection === "form-column" ? "active" : ""}
              onClick={() => scrollToSection("form-column")}
            >
              Single-Column Beats Multi-column
            </li>
            <li
              className={activeSection === "form-error" ? "active" : ""}
              onClick={() => scrollToSection("form-error")}
            >
              Communicate Errors Clearly
            </li>
            <li
              className={activeSection === "form-modal" ? "active" : ""}
              onClick={() => scrollToSection("form-modal")}
            >
              Avoid Using Modal Too Often
            </li>
            <li
              className={activeSection === "form-placeholder" ? "active" : ""}
              onClick={() => scrollToSection("form-placeholder")}
            >
              Insert Placeholder Text
            </li>
            <li
              className={activeSection === "form-prominent" ? "active" : ""}
              onClick={() => scrollToSection("form-prominent")}
            >
              Prominent Action Button
            </li>
            <li
              className={activeSection === "form-profile" ? "active" : ""}
              onClick={() => scrollToSection("form-profile")}
            >
              Circular Profile Pictures
            </li>
            <li
              className={activeSection === "form-lable" ? "active" : ""}
              onClick={() => scrollToSection("form-lable")}
            >
              Long Input Lables?
            </li>
          </ul>
        </div>
        <div className="ContentWarap">
          <div className="contentBox">
            <h1 className="mainTitle" style={{ height: "250px" }}>
              Form Design UI Guideline
            </h1>
            <div className="StyleListOne">
              <div id="design-interdiction" className="scrollAria">
                <h2 className="subTitles">Interdiction</h2>
                <div className="simpleline"></div>
                <ImageBox width="full">
                  <img src="img/guideimg/formdesign-bg.png" alt="hci" />
                </ImageBox>
                <p className="mt25">
                  These OXD UI guidelines ensure consistent and standard UI
                  forms, lists, and views, enhancing the overall user
                  experience. By integrating these principles, the structure of
                  the UI is maintained effectively, resulting in better UX
                  integration. This approach promotes uniformity and coherence
                  across all UI components, ensuring a seamless and intuitive
                  user interface.
                </p>
              </div>

              <div id="form-proximity" className="scrollAria">
                <h2 className="subTitles">Form Group and Proximity</h2>
                <div className="simpleline"></div>
                <div className="mt25">
                  <strong>Law of Proximity</strong>
                </div>
                <div className="flexrow">
                  <img
                    src="img/guideimg/formpage-img2.png"
                    className="longimg"
                  ></img>
                </div>
                <p>
                  This principle of placing related items closer to each other
                  isn't new; it’s actually the Law of Proximity from Gestalt
                  psychology. Gestalt psychologists were concerned with how and
                  why the brain perceives an object as a whole rather than as a
                  sum of individual parts. They came up with several laws
                  explaining how people organize visual information; the Law of
                  Proximity was one of these.
                </p>

                <p>
                  Instead of seeing 20 individual dots, we see two groups: one
                  of 12 dots and one of 8. This is a shortcut our brain takes
                  when processing visual information and is in fact another
                  example of the Law of Proximity.
                </p>
                <div className="mt25">
                  <strong>Group together related fields.</strong>
                </div>
                <p>
                  Long forms, with many fields, can feel overwhelming. Grouping
                  related fields together helps users make sense of the
                  information that they must fill in eg:-
                </p>
                <div className="flexrow">
                  <img
                    src="img/guideimg/formpage-img1.png"
                    className="longimg"
                  ></img>
                </div>
              </div>

              <div id="form-radio" className="scrollAria">
                <h2 className="subTitles">
                  Radio Pill Selector - Batter alternative To Radio
                </h2>
                <div className="simpleline"></div>

                <div className="flexrow mt25">
                  <p>
                    Instead of traditional radio buttons, you can use pill
                    selectors for a more visually appealing and intuitive way to
                    choose options. These pills enhance the user experience by
                    making selections easier and more engaging. Check out the
                    example form to see how it works.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img3.png"></img>
                  </ImageBox>
                </div>
              </div>
              <div id="form-checkbox" className="scrollAria">
                <h2 className="subTitles">Avoid Using Too Many Checkboxes</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img4.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow mt25">
                  <p>
                    Having too many checkboxes in one area or form can overwhelm
                    and confuse users, making it difficult for them to make
                    selections efficiently. This cluttered interface can lead to
                    poor user experience and decreased usability. use
                    alternative like, Pill Selectors or Multi-select Dropdowns
                    it keeping the interface more clean.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img5.png"></img>
                  </ImageBox>
                </div>
                <div className="paraStyleOne mt25">
                  <p>
                    <strong>Always Align Vertically </strong> <br />
                    Try to present vertically, with one choice per line, this
                    rule works toggles and checkboxes. If you must use a
                    horizontal layout with multiple options per line, make sure
                    to space the button and label so that it’s abundantly clear
                    which choice goes with the label, (Always Align Vertically,
                    Except When Grouped Separately)
                  </p>
                </div>
              </div>
              <div id="form-dropdown" className="scrollAria">
                <h2 className="subTitles">
                  Use Radio Button Rather Than Drop-downs
                </h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img6.png"></img>
                  </ImageBox>
                </div>
                <div className="mt25">
                  <p>
                    If Possible use radio buttons rather than drop-downs.
                    Drop-down will require extra action (the user needs to tap
                    on the drop-down element to see the options). The radio
                    button on the other hand makes all options visible. so that
                    users can easily compare them. (but do not use for more than
                    5 items or list of options)
                  </p>
                </div>
                <ImageBox width="full">
                  <img src="img/guideimg/frompage-img7.png"></img>
                </ImageBox>
              </div>
              <div id="form-actionbt" className="scrollAria">
                <h2 className="subTitles">
                  Action Buttons Should be Right Aligned
                </h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <img
                    src="img/guideimg/formpage-img8.png"
                    className="longimg"
                  ></img>
                </div>
                <div className="mt25">
                  <p>
                    Action button order should be as the most prominent action
                    should come right.Therefore, in a list view action buttons
                    should ordered primary to secondary,right-to-left(Eg:
                    Delete, Download, Edit)
                  </p>
                </div>
              </div>
              <div id="form-column" className="scrollAria">
                <h2 className="subTitles">
                  Single-column beats multi-column forms.
                </h2>
                <div className="simpleline"></div>

                <div className="flexrow mt25">
                  <p>
                    Studies show that single-column forms can be completed 15
                    seconds faster than multi-column forms. This difference is
                    significant at a 95% confidence level. This guideline is not
                    new; it has been recognized for years but has become even
                    more relevant with modern design trends.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img9.png"></img>
                  </ImageBox>
                </div>
              </div>
              <div id="form-error" className="scrollAria">
                <h2 className="subTitles">Communicate Errors Clearly.</h2>
                <div className="simpleline"></div>

                <div className="mt25">
                  <p>
                    Users will inevitably make mistakes, even if you apply every
                    best practice in form design. How you handle error messages
                    is crucial.
                  </p>
                  <img
                    src="img/guideimg/formpage-img10.png"
                    className="longimg"
                  ></img>
                  <div className="mt25">
                    <strong>Example of Form Validation Error Handling</strong>
                  </div>
                  <p>
                    Designing effective error messages is key to minimizing user
                    frustration. When users encounter errors and feel
                    frustrated, their stress levels increase. If this stress
                    becomes too much, users may abandon your site and turn to a
                    competitor.
                  </p>

                  <p>
                    To create effective error messages, follow these best
                    practices:
                  </p>
                  <ul>
                    <li>
                      <strong>Don't blame the user:</strong> Avoid language that
                      places fault on the user.
                    </li>
                    <li>
                      <strong>Use human language:</strong> Write messages in a
                      friendly, conversational tone.
                    </li>
                    <li>
                      <strong>Be clear and intuitive:</strong> Ensure errors are
                      easy to understand and place messages where users expect
                      to see them.
                    </li>
                    <li>
                      <strong>Provide solutions:</strong> Clearly explain how
                      users can fix the errors.
                    </li>
                    <li>
                      <strong>Use inline validation:</strong> Instead of listing
                      all errors at the top of the page, show error messages
                      next to the relevant fields.
                    </li>
                  </ul>

                  <p>
                    By following these guidelines, you can enhance the user
                    experience and reduce the likelihood of users abandoning
                    your form.
                  </p>
                </div>
                <div className="flexrow">
                  <img
                    src="img/guideimg/formpage-img11.png"
                    className="longimg"
                  ></img>
                </div>
              </div>
              <div id="form-modal" className="scrollAria">
                <h2 className="subTitles">Avoid Using Modal Too Often</h2>
                <div className="simpleline"></div>
                <div className="flexrow mt25">
                  <p>
                    Modals are a useful option for highlighting important
                    information. However, they should only be used in focus mode
                    when necessary. Avoid placing one modal on top of another,
                    as users may experience fatigue from seeing too many pop-ups
                    and may try to work around them.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img12.png"></img>
                  </ImageBox>
                </div>
              </div>
              <div id="form-placeholder" className="scrollAria">
                <h2 className="subTitles">Insert Placeholder Text</h2>
                <div className="simpleline"></div>
                <div className="flexrow mt25">
                  <p>
                    Also known as “helper” text, this provides users with an
                    example of the information they need to input as well as how
                    the format should be.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img13.png"></img>
                  </ImageBox>
                </div>
              </div>
              <div id="form-prominent" className="scrollAria">
                <h2 className="subTitles">
                  Most Prominent Action Button Should Come Right
                </h2>
                <div className="simpleline"></div>
                <div className="flexrow mt25">
                  <p>
                    Action button order should be as the most prominent action
                    should come right.Therefore, in a list view action buttons
                    should ordered primary to secondary,right-to-left(Eg:
                    Delete, Download, Edit)
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img14.png"></img>
                  </ImageBox>
                </div>
              </div>
              <div id="form-profile" className="scrollAria">
                <h2 className="subTitles">
                  Circular profile pictures accentuate faces more
                  <br />
                  than square ones.
                </h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img15.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow mt25">
                  <p>
                    Square isn’t the best shape to use because it makes it hard
                    to visually process faces. Most faces are at the center of a
                    profile picture. When looking at a face in a square profile
                    picture, users will spend longer focusing on it. In circular
                    profile pictures the less background area there is, the more
                    users can easily focus on the face.
                  </p>
                </div>
              </div>
              <div id="form-lable" className="scrollAria">
                <h2 className="subTitles">Do Not Use Very Long Input Lables</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img16.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow mt25">
                  <p>
                    Avoid using long labels for inputs, as they are harder to
                    read and clutter the UI with unnecessary text. Typically,
                    users only read these labels the first time they see them.
                    In UX, it's better to keep labels short. If further
                    explanation is needed, use placeholders or help prompt popup
                    componet to explanation.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/formpage-img17.png"></img>
                  </ImageBox>
                </div>
              </div>
              <div className="simpleline mt25"></div>
              <div className="flexrowEnd">
                <p className="mt25">
                  Learn more about UI Quality Control Standards at
                  <Link to={"../qaguidepage"}> QA Guideline</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default FormDesignPage;
