import ScrollToTop from "../../components/ScrollToTop";
import ImageBox from "../../components/imagebox";
import Loading from "../../components/loading";
import OrangeLogo from "../../assets/img/oxd-icon.png";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import "../../css/common.css";
import "../../css/oimpage.css";

function ShapePage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const handleScroll = () => {
      const sections = [
        "spacing-interdiction",
        "white-space",
        "base-unit",
        "sizing",
        "padding",
        "layout",
        "grids",
        "grid-system",
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
          <div className="pageTitle">Shapes & Depth</div>
          <h3 className="titleSidewarp">content</h3>
          <ul>
            <li
              className={
                activeSection === "spacing-interdiction" ? "active" : ""
              }
              onClick={() => scrollToSection("spacing-interdiction")}
            >
              Introduction
            </li>
            <li
              className={activeSection === "white-space" ? "active" : ""}
              onClick={() => scrollToSection("white-space")}
            >
              OXD Basic Shapes
            </li>
            <li
              className={activeSection === "base-unit" ? "active" : ""}
              onClick={() => scrollToSection("base-unit")}
            >
              Rounded Corners
            </li>
            <li
              className={activeSection === "sizing" ? "active" : ""}
              onClick={() => scrollToSection("sizing")}
            >
              Adding Depth
            </li>
            <li
              className={activeSection === "padding" ? "active" : ""}
              onClick={() => scrollToSection("padding")}
            >
              Skeuomorphism
            </li>
            <li
              className={activeSection === "layout" ? "active" : ""}
              onClick={() => scrollToSection("layout")}
            >
              Shadows And Overlays
            </li>
          </ul>
        </div>
        <div className="ContentWarap">
          <div className="contentBox">
            <img
              src="img/guideimg/shape-img1.jpg"
              className="longimg top-rdu"
              alt="spacing"
            />

            <div className="StyleListOne top-rdu">
              <div id="spacing-interdiction" className="scrollAria">
                <h2 className="subTitles ">Introduction</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  Shapes play a pivotal role in UI design, influencing user
                  perception and behavior in profound ways. Firstly, shapes
                  contribute to the overall aesthetic appeal of the interface,
                  making it visually engaging and attractive to users. Rounded
                  shapes, for instance, evoke feelings of friendliness and
                  approachability, while sharp, angular shapes can convey
                  professionalism and seriousness. Secondly, shapes help in
                  establishing a clear visual hierarchy, guiding users'
                  attention to the most critical elements on the screen. By
                  strategically using different shapes, designers can
                  effectively organize content and create intuitive navigation
                  paths.
                </p>
                <p className="mt25">
                  Additionally, the psychology of shapes can enhance usability
                  and user satisfaction. Circular shapes often suggest
                  completeness and unity, encouraging users to interact with
                  elements like buttons and icons. Rectangular shapes, on the
                  other hand, are associated with stability and trustworthiness,
                  making them ideal for sections that require user confidence,
                  such as forms and input fields. Moreover, the use of
                  consistent shapes across the UI fosters a sense of
                  familiarity, helping users to predict and understand the
                  function of different elements quickly.
                </p>
                <p className="mt25">
                  Furthermore, shapes can be used to evoke specific emotional
                  responses. For example, curved shapes tend to be perceived as
                  more pleasant and inviting, reducing user anxiety and creating
                  a positive user experience. Sharp shapes can create a sense of
                  urgency or importance, prompting users to take action. By
                  understanding the psychological impact of shapes, OXD
                  designers can craft interfaces that not only look good but
                  also feel right to the users.
                </p>
                <p className="mt25">
                  The thoughtful use of shapes in UI design enhances visual
                  appeal, establishes clear visual hierarchy, improves
                  usability, and evokes appropriate emotional responses, all
                  contributing to a superior user experience. Let us delve
                  deeper into the guidelines for utilizing shapes effectively in
                  OXD design.
                </p>
              </div>

              <div id="white-space" className="scrollAria">
                <h2 className="subTitles">OXD Basic Shapes</h2>
                <div className="simpleline"></div>

                <img src="img/guideimg/shape-img2.png" className="longimg" />

                <p className="mt25">
                  As seen above, OXD design extensively uses rounded shapes
                  across the UI. All patterns feature smooth, rounded corners,
                  from tooltips to large modals. When creating new elements or
                  components, it is essential to adhere to this rounded design
                  language. The OXD design system does not include sharp edges,
                  and this pattern must be preserved when developing or
                  maintaining the UI. Let's look at some rules for UI design
                  below.
                </p>
                <p className="mt25">
                  <strong>
                    Every element in OXD design has a distinct shape that makes
                    it easy to recognize its purpose. For example, buttons have
                    a different shape compared to status labels or text boxes.
                    Dropdowns have button-like shapes inside them,
                    distinguishing them from text boxes. This design choice
                    ensures that users can easily identify each element at a
                    glance, even without labels. Imagine if all labels were
                    removed, like in the top image. You would still be able to
                    tell which element is which just by their shapes. This is
                    the power of shape in OXD design. Psychologically, humans
                    are faster at recognizing shapes than reading labels, making
                    for a quicker and more intuitive user experience.
                  </strong>
                </p>
              </div>

              <div id="base-unit" className="scrollAria">
                <h2 className="subTitles">Rounded Corners</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  Use a mathematical formula to calculate the optimal corner
                  radius for OXD elements, If you nest two elements with the
                  same corner radius, you will land up with an optical effect
                  that is unnatural and doesn't look pleasing to the eye.
                </p>
                <ImageBox width="full">
                  <img src="img/guideimg/shape-img4.png" alt="shapeimge" />
                </ImageBox>
                <div className="mt25"></div>
                Use the following formula to calculate the perfect corner radius
                for your inner element.<br></br>
                <strong>Inner radius = Outer radius - Outer thickness/2</strong>
                <ImageBox width="full">
                  <img src="img/guideimg/shape-img5.png" alt="shapeimge" />
                </ImageBox>
              </div>

              <div id="sizing" className="scrollAria">
                <h2 className="subTitles">Adding Depth</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/shape-img6.png"></img>
                  </ImageBox>
                </div>
                <div className=" mt25">
                  <p className="mt25">
                    Adding depth to UI design enhances user experience by
                    creating a sense of realism and engagement. Techniques like
                    shadows, gradients, and layering contribute to a more
                    immersive interface. Shadows give elements a
                    three-dimensional feel, making buttons and cards more
                    tactile. Gradients add dynamic movement, guiding users'
                    attention. Layering elements creates a clear visual
                    hierarchy, aiding navigation and reducing cognitive load.
                  </p>
                  <p className="mt25">
                    Moreover, depth improves accessibility by distinguishing
                    interactive elements from the background. It also enhances
                    brand perception, conveying professionalism and modernity.
                    Consistent use of depth ensures a cohesive look and
                    reinforces user trust.
                  </p>
                  <section>
                    <h2 className="mt25">Layer Structure in OXD Design</h2>
                    <p className="mt25">
                      OXD design employs a three-layer approach to create a
                      sense of depth and realism, resulting in skeuomorphic UI
                      components. Here’s a detailed breakdown of each layer:
                    </p>
                    <ol className="mt25">
                      <li>
                        <strong>Shadow Layer (Overlay Layer)</strong>
                        <ul>
                          <li>
                            <strong>Purpose:</strong> Creates depth for the
                            entire component.
                          </li>
                          <li>
                            <strong>Function:</strong> Acts as a wrapper
                            container.
                          </li>
                          <li>
                            <strong>Characteristics:</strong> Utilizes shadows
                            to provide a foundational depth.
                          </li>
                          <li>
                            <strong>Usage:</strong> Envelops other layers and
                            elements, ensuring they appear elevated and distinct
                            from the background.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Depth Layer (3D Layer)</strong>
                        <ul>
                          <li>
                            <strong>Purpose:</strong> Adds internal depth and
                            complexity.
                          </li>
                          <li>
                            <strong>Function:</strong> Provides shadows and
                            gradient backgrounds to elements.
                          </li>
                          <li>
                            <strong>Characteristics:</strong> Varies depending
                            on the UI element.
                          </li>
                          <li>
                            <strong>Usage:</strong> Enhances the
                            three-dimensional look within components, giving a
                            realistic appearance.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Surface Elements Layer</strong>
                        <ul>
                          <li>
                            <strong>Purpose:</strong> Contains actual input
                            elements and interactive components.
                          </li>
                          <li>
                            <strong>Function:</strong> Represents the flat,
                            interactive layer.
                          </li>
                          <li>
                            <strong>Characteristics:</strong> Includes buttons,
                            text fields, and other UI controls.
                          </li>
                          <li>
                            <strong>Usage:</strong> Positioned at the forefront,
                            it is the primary interactive layer users engage
                            with.
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <h3 className="mt25">Combined Effect</h3>
                    <p className="mt25">
                      When all three layers are combined, they create a
                      skeuomorphic look:
                    </p>
                    <ul>
                      <li>
                        <strong>Shadow Layer:</strong> Provides the base depth.
                      </li>
                      <li>
                        <strong>Depth Layer:</strong> Adds intricate internal
                        depth and realism.
                      </li>
                      <li>
                        <strong>Surface Elements Layer:</strong> Hosts the
                        interactive elements.
                      </li>
                    </ul>
                    <p>
                      Together, these layers craft a cohesive, visually engaging
                      UI with a realistic, three-dimensional effect.
                    </p>
                  </section>
                </div>
                <div className="flexrow mt25">
                  <ImageBox width="full">
                    <img src="img/guideimg/shape-img7.png"></img>
                  </ImageBox>
                </div>
              </div>
              <div id="padding" className="scrollAria">
                <h2 className="subTitles">Skeuomorphism</h2>
                <div className="simpleline"></div>
                <p>
                  While skeuomorphism can enhance usability and aesthetics, it
                  is essential to balance realism with functionality. Overly
                  detailed designs can clutter the interface and distract from
                  core functionalities. Modern OXD UI design often combines
                  skeuomorphic elements with flat design principles to achieve a
                  clean, intuitive, and visually appealing interface.
                </p>
                <div className="mt25"></div>
                <strong>Example Skeuomorphism OXD Component</strong>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/shape-img8.png"></img>
                  </ImageBox>
                </div>

                <div className="paraStyleOne mt25"></div>
              </div>
              <div id="layout" className="scrollAria">
                <h2 className="subTitles">Shadows And Overlays</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/shape-img10.png"></img>
                  </ImageBox>
                </div>
                <div className="mt50">
                  <strong>UI Overlays in OXD Design</strong>
                  <p className="mt25">
                    OXD overlays are used for modal elements like modals and
                    drawers. Each overlay has its own layer, which is triggered
                    with the modal. The layer has a black tint that
                    progressively darkens towards the bottom, adding depth
                    similar to real-life items. The shadows of the elements
                    remain visible through the overlay, enhancing the
                    three-dimensional effect. Clicking the close button or
                    outside the corresponding modal will eliminate the overlay
                    with a fade-out effect.
                  </p>
                  <p className="mt25">
                    These overlays not only enhance the visual hierarchy but
                    also focus the user's attention on the active modal,
                    creating an immersive and intuitive experience. The
                    progressive darkening and visible shadows maintain a
                    consistent skeuomorphic feel, blending seamlessly with the
                    rest of the design.
                  </p>

                  <img
                    src="img/guideimg/shape-img11.png"
                    className="longimg"
                  ></img>
                  <div className="mt25">
                    <strong>Shadows in UI Elements</strong>
                  </div>
                  <p className="mt25">
                    Shadows are integrated into every UI element that pops up
                    from the surface. Elements larger than dropdowns typically
                    have a separate shadow layer underneath, elevating the popup
                    layer. This use of shadows not only provides a sense of
                    depth but also visually separates the popup elements from
                    the background, making interactions more intuitive and
                    enhancing the overall user experience.
                  </p>
                </div>
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

export default ShapePage;
