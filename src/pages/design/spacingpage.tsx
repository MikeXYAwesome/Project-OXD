import ScrollToTop from "../../components/ScrollToTop";
import ImageBox from "../../components/imagebox";
import Loading from "../../components/loading";
import OrangeLogo from "../../assets/img/oxd-icon.png";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import "../../css/common.css";
import "../../css/oimpage.css";
import CodeDisplay from "../../components/codeDisplay";

function SpacingPage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const presetSapceing = `
    :root {
      --spacing-4: 4px;
      --spacing-8: 8px;
      --spacing-12: 12px;
      --spacing-16: 16px;
      --spacing-20: 20px;
      --spacing-24: 24px;
      --spacing-32: 32px;
      --spacing-40: 40px;
      --spacing-48: 48px;
      --spacing-64: 64px;
    }
  `;
  const cssCode = `
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--spacing-16); /* 16px gap between grid items */
    padding: var(--spacing-16); /* 16px padding around the container */
  }

  .item {
    background-color: #eaeaea;
    padding: var(--spacing-8); /* 8px padding inside each item */
    text-align: center;
  }

  /* Example items spanning different number of columns */
  .item-1 { grid-column: span 6; }
  .item-2 { grid-column: span 3; }
  .item-3 { grid-column: span 3; }
  .item-4 { grid-column: span 12; }

  /*Font sizes and line heights are also multiples of 4: */

  body {
    font-size: 16px; /* 4 * 4 = 16 */
    line-height: 24px; /* 4 * 6 = 24 */
  }

  h1 {
    font-size: 32px; /* 4 * 8 = 32 */
    line-height: 40px; /* 4 * 10 = 40 */
  }

  p {
    margin-bottom: var(--spacing-16); /* 16px space between paragraphs */
  }
  `;
  const brakingPoints = `
    /* Medium Devices (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  /* Large Devices (1025px - 1200px) */
  @media (min-width: 1025px) and (max-width: 1200px) {
    .container {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  /* Extra Large Devices (>1200px) */
  @media (min-width: 1201px) {
    .container {
      grid-template-columns: repeat(12, 1fr);
    }
  }
  `;

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
          <div className="pageTitle">Space & Grids</div>
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
              White Space
            </li>
            <li
              className={activeSection === "base-unit" ? "active" : ""}
              onClick={() => scrollToSection("base-unit")}
            >
              Base units
            </li>
            <li
              className={activeSection === "sizing" ? "active" : ""}
              onClick={() => scrollToSection("sizing")}
            >
              Dimension
            </li>
            <li
              className={activeSection === "padding" ? "active" : ""}
              onClick={() => scrollToSection("padding")}
            >
              Cards & Paddings
            </li>
            <li
              className={activeSection === "layout" ? "active" : ""}
              onClick={() => scrollToSection("layout")}
            >
              Layout & Grid
            </li>
            <li
              className={activeSection === "grids" ? "active" : ""}
              onClick={() => scrollToSection("grids")}
            >
              Responsive Layout Grids
            </li>
            <li
              className={activeSection === "grid-system" ? "active" : ""}
              onClick={() => scrollToSection("grid-system")}
            >
              4-point Grid System
            </li>
          </ul>
        </div>
        <div className="ContentWarap">
          <div className="contentBox">
            <img
              src="img/guideimg/spacing-bg.png"
              className="longimg"
              alt="spacing"
            />

            <div className="StyleListOne">
              <div id="spacing-interdiction" className="scrollAria">
                <h2 className="subTitles">Introduction</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  Perfect spacing in UI design is crucial for several reasons.
                  Firstly, it significantly enhances readability and legibility,
                  making text easier to scan and understand quickly without
                  straining the eyes. Secondly, proper spacing establishes a
                  clear visual hierarchy, guiding users' attention to the most
                  important elements and organizing information logically.
                  Thirdly, it contributes to a clean, aesthetically pleasing
                  design, enhancing user satisfaction and trust in the product.
                  Additionally, appropriate spacing between interactive
                  elements, like buttons and links, prevents accidental clicks
                  and improves overall usability. This ensures each element is
                  easily distinguishable and accessible, reducing the likelihood
                  of errors. Moreover, proper spacing helps users focus on
                  specific elements by reducing visual clutter, making task
                  completion more efficient. Effective spacing removes
                  distractions and allows users to concentrate better. Finally,
                  consistent spacing across the UI creates a cohesive and
                  professional look, reinforcing brand identity and user
                  familiarity with the interface. Consistency helps users
                  predict where elements are likely to be found, making the UI
                  more intuitive and easier to use.
                </p>
                <p className="mt25">
                  In summary, perfect spacing enhances readability, establishes
                  visual hierarchy, improves aesthetics, boosts usability, aids
                  focus, and ensures consistency, all contributing to a better
                  user experience. let have look at fallowing oxd spacing
                  guidelines
                </p>
              </div>

              <div id="white-space" className="scrollAria">
                <h2 className="subTitles">White Space in UI Design</h2>
                <div className="simpleline"></div>

                <img src="img/guideimg/sp2.png" />

                <p className="mt25">
                  Negative space, or white space, is crucial in design for
                  providing visual clarity and organization, separating elements
                  to help users understand content. It improves readability by
                  preventing text overcrowding, especially on mobile devices.
                  Strategically used, it draws attention to specific elements
                  and enhances aesthetics, making designs clean and visually
                  appealing. Negative space reduces cognitive load by offering
                  breathing room, essential for responsive web design. It
                  supports brand identity, as seen with Apple's minimalist
                  design, and ensures balance and harmony in layout.
                  Additionally, it enhances user experience by preventing
                  accidental clicks and improving navigation.
                </p>
                <div className="mt25"></div>
                <p>
                  <strong>Psychological Impact:</strong> Negative space can
                  influence the viewer's perception of a design. A clean and
                  uncluttered layout can convey a sense of professionalism and
                  trustworthiness. Proven in graphic design, white space is not
                  merely the absence of content; it is a valuable and purposeful
                  element in good UX design. So, use it strategically to improve
                  aesthetics, functionality, and the overall user experience.
                  When it comes to usability tests, you will find it a valuable
                  tool and essential part of the design process.
                </p>
              </div>

              <div id="base-unit" className="scrollAria">
                <h2 className="subTitles">Base unit</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  The base unit defines what every measurement will be a
                  multiple of. This keeps designs consistent, improves
                  communication with developers, and reduces the number of
                  decisions a designer has to make. The most recommended base
                  unit is 8px because it makes scaling for a wide variety of
                  devices easy and consistent and OXD follow the same. This is
                  because most screen sizes are divisible by 8 and because 8 is
                  itself an easily divisible number,
                  <strong>(8/2=4, 8/4=2).</strong>
                </p>
                <ImageBox width="full">
                  <img src="img/guideimg/space-img1.png" alt="5d" />
                </ImageBox>

                <div className="mt25"></div>
                <strong>
                  Development base unit as 1rem = 16px taken as the default ,
                  and 8px 0.5rem{" "}
                </strong>
              </div>

              <div id="sizing" className="scrollAria">
                <h2 className="subTitles">Dimension</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/spacing-img2.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow mt25">
                  <p>
                    The height and width of UI elements should be measured in
                    increments of the base unit (ie. 8, 16, 24) when possible.
                    This creates clear hierarchy, aligns elements neatly, and
                    provides a consistent visual rhythm. For example, line
                    height, buttons, and form inputs can be expected to have the
                    same incremental heights across all OXD designs.
                  </p>
                </div>
              </div>
              <div id="padding" className="scrollAria">
                <h2 className="subTitles">Cards & Paddings</h2>
                <div className="simpleline"></div>
                <p>
                  Padding refers to the space between UI elements and is also
                  measured in increments of the base unit. Consistent,
                  predicable padding is aesthetically pleasing, clarifies the
                  relationship between elements, and improves readability. For
                  example, the padding inside a component should create a
                  holistic spacing pattern between all its elements.
                </p>
                <div className="mt25"></div>
                <strong>Main Containe & Column, Row Paddings</strong>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/spacing-img3.png"></img>
                  </ImageBox>
                </div>
                <strong>Card Inside Padding</strong>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/spacing-img4.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/spacing-img5.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow mt25"></div>
                <div className="simpleline"></div>
                <div className="flexrow mt25">
                  <strong>Card Side Menu Padding</strong>
                </div>

                <div className="flexrow">
                  <img
                    src="img/guideimg/spacing-img6.png"
                    className="longimg"
                  ></img>
                </div>
                <div className="paraStyleOne mt25"></div>
              </div>
              <div id="layout" className="scrollAria">
                <h2 className="subTitles">Layout and Grids</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/layout-img1.jpg"></img>
                  </ImageBox>
                </div>
                <div className="mt50">
                  <strong>Grid Anatomy</strong>
                  <p>
                    Grid Anatomy All grids are made up of three elements:
                    columns, gutters, and margins. Columns are the building
                    blocks of a grid and mark where elements should be placed.
                    Gutters are the negative space between columns and their
                    width should be a multiple of the base unit. Margins are the
                    negative space between the edge of the outside column and
                    the frame.
                  </p>
                  <div className="mt25">
                    <strong>Basic Layout</strong>
                  </div>
                  <img
                    src="img/guideimg/layout-img4.png"
                    className="longimg"
                  ></img>
                </div>
                <div className="mt25">
                  <strong>OXD Main Layout (with side-bar open)</strong>
                </div>
                <div className="flexrow">
                  <img
                    src="img/guideimg/layout-img2.jpg"
                    className="longimg"
                  ></img>
                </div>
                <div className="mt25">
                  <strong>OXD Main Layout (with side bar collapse)</strong>
                </div>
                <div className="flexrow">
                  <img
                    src="img/guideimg/layout-img3.jpg"
                    className="longimg"
                  ></img>
                </div>
              </div>
              <div id="grids" className="scrollAria">
                <h2 className="subTitles">Responsive Layout Grids</h2>
                <div className="simpleline"></div>
                <div className="flexrow mt25">
                  <p>
                    When designing responsive layout grids for web-only
                    applications, it's essential to define breakpoints that
                    adapt to various screen sizes, from small mobile devices to
                    large desktop monitors. However, OXD only supports
                    resolutions of 720p (Medium) and higher. The standard screen
                    size for OXD is 1080p, which is the most common resolution
                    in 2023 according to research.
                  </p>
                </div>
                <div className="mt25">
                  <strong>Braking Points (Screen Resolution)</strong>
                </div>
                <div className="flexrow">
                  <CodeDisplay code={brakingPoints} />
                </div>
              </div>
              <div id="grid-system" className="scrollAria">
                <h2 className="subTitles">
                  Use 4-point Grid System in Spacing
                </h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <img
                    src="img/guideimg/layout-img5.png"
                    className="longimg"
                  ></img>
                </div>
                <div className="mt25">
                  <strong>Principles of the 4-Point Grid System</strong>
                  <ul>
                    <li>
                      <strong>Consistency:</strong> All measurements (margins,
                      paddings, heights, widths) should be multiples of 4
                      pixels.
                    </li>
                    <li>
                      <strong>Simplicity:</strong> Reduces the number of
                      decisions designers and developers need to make,
                      streamlining the design process.
                    </li>
                    <li>
                      <strong>Scalability:</strong> Ensures designs can be
                      easily adapted to different screen sizes and resolutions.
                    </li>
                  </ul>
                  <div className="mt25">
                    <strong>
                      Spacing Define by values as multiples of 4:(OXD Presets)
                    </strong>
                  </div>
                  <CodeDisplay code={presetSapceing} />

                  <CodeDisplay code={cssCode} />
                  <p>
                    Implementing a 4-point grid system in your web design
                    workflow simplifies the design process, ensures consistency,
                    and improves scalability. By defining all measurements in
                    multiples of 4, you create a harmonious and visually
                    appealing layout. This system is particularly useful in
                    responsive design, where maintaining uniformity across
                    various devices is crucial.
                  </p>
                  <div className="mt25"></div>
                </div>
              </div>
              <div className="simpleline mt25"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SpacingPage;
