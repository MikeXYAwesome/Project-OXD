import ScrollToTop from "../components/ScrollToTop";
import ImageBox from "../components/imagebox";
import Loading from "../components/loading";
import OrangeLogo from "../assets/img/oxd-icon.png";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import "../css/common.css";
import "../css/oimpage.css";
import { Link } from "react-router-dom";

function DesignThinkPage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const handleScroll = () => {
      const sections = [
        "design-interdiction",
        "design-thinking",
        "design-hierarchy",
        "design-rounded",
        "design-symmetrical",
        "design-models",
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
          <div className="pageTitle">Design Philosophy</div>
          <h3 className="titleSidewarp">content</h3>
          <ul>
            <li
              className={
                activeSection === "design-interdiction" ? "active" : ""
              }
              onClick={() => scrollToSection("design-interdiction")}
            >
              introduction
            </li>
            <li
              className={activeSection === "design-thinking" ? "active" : ""}
              onClick={() => scrollToSection("design-thinking")}
            >
              OXD Design Thinking’s Phases
            </li>
            <li
              className={activeSection === "design-hierarchy" ? "active" : ""}
              onClick={() => scrollToSection("design-hierarchy")}
            >
              OXD Visual Design Hierarchy
            </li>
            <li
              className={activeSection === "design-rounded" ? "active" : ""}
              onClick={() => scrollToSection("design-rounded")}
            >
              Why Rounded Shape UI?
            </li>
            <li
              className={activeSection === "design-symmetrical" ? "active" : ""}
              onClick={() => scrollToSection("design-symmetrical")}
            >
              Symmetrical UI Design
            </li>
            <li
              className={activeSection === "design-models" ? "active" : ""}
              onClick={() => scrollToSection("design-models")}
            >
              Mental Models
            </li>
          </ul>
        </div>
        <div className="ContentWarap">
          <div className="contentBox">
            <h1 className="mainTitle">OXD Design Philosophy</h1>
            <div className="StyleListOne">
              <div id="design-interdiction" className="scrollAria">
                <h2 className="subTitles">Introduction</h2>
                <div className="simpleline"></div>
                <ImageBox width="full">
                  <img src="img/guideimg/designpage-bg.png" alt="hci" />
                </ImageBox>
                <p className="mt25">
                  Design Thinking is an iterative process in which we seek to
                  understand the user, challenge assumptions, and redefine
                  problems in an attempt to identify alternative strategies and
                  solutions that might not be instantly apparent with our
                  initial level of understanding. At the same time, Design
                  Thinking provides a solution-based approach to solving
                  problems. It is a way of thinking and working as well as a
                  collection of hands-on methods. Design Thinking revolves
                  around a deep interest in developing an understanding of the
                  people for whom we’re designing the products or services. It
                  helps us observe and develop empathy with the target user.
                  Design Thinking helps us in the process of questioning:
                  questioning the problem, questioning the assumptions, and
                  questioning the implications. Design Thinking is extremely
                  useful in tackling problems that are ill-defined or unknown,
                  by re-framing the problem in human-centric ways, creating many
                  ideas in brainstorming sessions, and adopting a hands-on
                  approach in prototyping and testing. Design Thinking also
                  involves ongoing experimentation: sketching, prototyping,
                  testing, and trying out concepts and ideas.
                </p>
              </div>

              <div id="design-thinking" className="scrollAria">
                <h2 className="subTitles">OXD Design Thinking’s Phases</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  There are many variants of the Design Thinking process in use
                  today, and they have from three to seven phases, stages, or
                  modes. However, all variants of Design Thinking are very
                  similar. All variants of Design Thinking embody the same
                  principles, which were first described by Nobel Prize laureate
                  Herbert Simon in The Sciences of the Artificial in 1969. Here,
                  we will focus on the five-phase model proposed by the
                  Hasso-Plattner Institute of Design at Stanford, which is also
                  known as d.school. We’ve chosen d.school’s approach because
                  they’re at the forefront of applying and teaching Design
                  Thinking. The five phases of Design Thinking, are as follows:
                </p>
                <ImageBox width="full">
                  <img src="img/guideimg/designpage-img4.png" alt="5d" />
                </ImageBox>
                <div className="paraStyleOne mt25">
                  <p>
                    <strong>Empathise – </strong>
                    with your users
                  </p>
                  <p>
                    <strong>Define – </strong>
                    your users’ needs, their problem, and your insights
                  </p>
                  <p>
                    <strong>Ideate – </strong>
                    by challenging assumptions and creating ideas for innovative
                    solutions
                  </p>
                  <p>
                    <strong>Prototype – </strong>
                    to start creating solutions
                  </p>
                  <p>
                    <strong>Test – </strong>
                    solutions
                  </p>
                  <p className="mt25">
                    It is important to note that the five phases, stages, or
                    modes are not always sequential. They do not have to follow
                    any specific order and can often occur in parallel and
                    repeat iteratively. Given that, you should not understand
                    the phases as a hierarchical or step-by-step process.
                    Instead, you should look at it as an overview of the modes
                    or phases that contribute to an innovative project, rather
                    than sequential steps.
                  </p>
                </div>
              </div>

              <div id="design-hierarchy" className="scrollAria">
                <h2 className="subTitles">OXD Visual Design Hierarchy</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/designpage-img1.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow mt25">
                  <p>
                    A clear visual hierarchy guides the eye to the most
                    important elements on the page. It can be created through
                    variations in color and contrast, scale, and grouping.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/designpage-img2.png"></img>
                  </ImageBox>
                </div>
                <div className="paraStyleOne mt25">
                  <p>
                    <strong> OXD example Visual Hierarchy</strong> <br />
                    Here you can see a removed label OXD form. you can see the
                    difference between the elements and or "shapes", because of
                    the visual differences the user can immediately identify the
                    element very easily, the reason behind this is humans tend
                    to recognize shapes faster than a typo, OXD design this core
                    of this psychology, as for example you can recognize the
                    dropdowns and normal text box without a label, same goes to
                    the button, in here solid green button stand out as the
                    primary button.
                  </p>
                </div>
              </div>
              <div id="design-rounded" className="scrollAria">
                <h2 className="subTitles">Why Rounded Shape UI?</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/designpage-img5.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow mt25">
                  <p>
                    Right off the bat, rounded corners look visually appealing
                    but did you know that there are actual psychological studies
                    to back this theory? This is a classical conditioning
                    principle where our brain is conditioned to think sharp
                    objects can be harmful. A real-life example where sharp
                    corners are considered harmful is when you’re baby-proofing
                    your house by using rounded fittings on sharp table corners.
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/designpage-img6.png"></img>
                  </ImageBox>
                </div>
                <div className="paraStyleOne mt25">
                  <p>
                    <strong> Why? </strong> <br />
                    Rounded corners in modern UI design are popular due to their
                    aesthetic appeal and ability to create a softer, more
                    approachable feel. They enhance visual flow and continuity,
                    guiding users' eyes smoothly across the interface. This
                    design choice keeps focus on content rather than container,
                    improving user engagement. Rounded corners are versatile,
                    ensuring consistency across various devices and screen
                    sizes. Psychologically, rounded shapes are associated with
                    positive emotions, enhancing user experience. Technological
                    advancements make implementing rounded corners easy and
                    performance-efficient. Overall, they balance functionality,
                    aesthetics, and user experience, contributing to the success
                    of modern UI.
                  </p>
                </div>
              </div>
              <div id="design-symmetrical" className="scrollAria">
                <h2 className="subTitles">Symmetrical UI Design</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/designpage-img9.png"></img>
                  </ImageBox>
                </div>
                <div className="mt25">
                  <p>
                    Symmetrical UI design involves creating a balanced and
                    harmonious layout where elements are evenly distributed on
                    either side of a central axis. Here are the key aspects of
                    symmetrical UI design:
                  </p>
                  <ul>
                    <li>
                      <strong>Visual Balance</strong>: Symmetry creates a sense
                      of stability and order, making the interface appear
                      organized and aesthetically pleasing.
                    </li>
                    <li>
                      <strong>Predictability</strong>: Users find symmetrical
                      designs predictable and easy to navigate, as elements
                      mirror each other, reducing cognitive load.
                    </li>
                    <li>
                      <strong>Formality and Professionalism</strong>:
                      Symmetrical layouts convey a sense of formality and
                      professionalism, often used in corporate and institutional
                      websites.
                    </li>
                    <li>
                      <strong>Focus and Emphasis</strong>: Centralizing key
                      elements in a symmetrical design can draw attention to
                      important content, enhancing user focus.
                    </li>
                    <li>
                      <strong>Consistency</strong>: Symmetry ensures consistent
                      spacing and alignment, contributing to a cohesive design
                      language across the interface.
                    </li>
                    <li>
                      <strong>Accessibility</strong>: A symmetrical design can
                      improve accessibility by providing a clear and
                      straightforward structure that users can easily understand
                      and interact with.
                    </li>
                    <li>
                      <strong>Aesthetic Appeal</strong>: The inherent beauty of
                      symmetry appeals to human perception, making the design
                      more attractive and engaging.
                    </li>
                    <li>
                      <strong>Ease of Design</strong>: Symmetrical layouts can
                      simplify the design process, providing a clear framework
                      for placing elements and maintaining visual harmony.
                    </li>
                  </ul>
                  <p>
                    Overall, symmetrical UI design enhances user experience by
                    combining visual appeal with functional clarity, creating
                    interfaces that are both beautiful and easy to use.
                  </p>
                </div>
              </div>
              <div id="design-models" className="scrollAria">
                <h2 className="subTitles">Mental Models</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <img
                    src="img/guideimg/designpage-img10.png"
                    className="longimg"
                  ></img>
                </div>
                <div className="mt25">
                  <strong>A Mental Model Is Based on Belief, Not Facts</strong>
                  <p>
                    A mental model represents what users know (or think they
                    know) about a system, such as our products. Users base their
                    predictions and actions on these mental models, planning
                    their future interactions accordingly. Therefore, a primary
                    goal for designers is to ensure the user interface clearly
                    conveys the system's nature, helping users form accurate and
                    useful mental models.
                  </p>
                  <p>
                    Users often create mental models using their general
                    knowledge and experiences from other websites, as suggested
                    by Jakob's law of the internet user experience: users spend
                    most of their time on sites other than ours. As a result, a
                    significant part of users' mental models of your site is
                    influenced by their interactions with other sites, leading
                    them to expect similar behaviors across different websites.
                  </p>
                  <div className="mt25">
                    <strong>Each User Has Their Own Mental Model</strong>
                  </div>
                  <p>
                    A mental model is based on each user’s individual background
                    knowledge and past experiences, meaning different users
                    might construct different mental models of the same system.
                    One of the biggest challenges in usability is the gap
                    between designers' and users' mental models. Designers
                    develop detailed mental models of their creations, believing
                    each feature is straightforward. However, most users’ mental
                    models of the system are usually less developed, leading to
                    mistakes and difficulties in use.
                  </p>
                  <p>
                    Mental models can evolve over time with more experience,
                    either with the system itself or through interactions with
                    other systems.
                  </p>
                  <div className="mt25"></div>
                  <strong>Key Points about Mental Models</strong>
                  <ul>
                    <li>
                      <strong>User-Centered Design:</strong> Understanding
                      users' mental models is crucial for designing intuitive
                      and user-friendly interfaces. Designers need to align the
                      system’s design with the users' expectations to reduce
                      confusion and increase efficiency.
                    </li>
                    <li>
                      <strong>Mapping User Behavior:</strong> Mental models help
                      in predicting how users will interact with a system. This
                      involves understanding the thought process and the steps
                      users take to accomplish tasks.
                    </li>
                    <li>
                      <strong>Designing for Familiarity:</strong> Leveraging
                      common patterns and conventions can help match the users'
                      mental models. For example, placing the shopping cart icon
                      in the top right corner of an e-commerce site aligns with
                      users' expectations.
                    </li>
                    <li>
                      <strong>Usability Testing:</strong> Conducting usability
                      tests can reveal mismatches between the users' mental
                      models and the actual system. These insights are valuable
                      for making necessary adjustments.
                    </li>
                    <li>
                      <strong>Communication and Feedback:</strong> Providing
                      clear feedback helps users understand the system's
                      response to their actions, reinforcing their mental
                      models. This can be achieved through meaningful error
                      messages, progress indicators, and confirmations.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="simpleline mt25"></div>
              <div className="flexrowEnd">
                <p className="mt25">
                  Learn more guidelines in
                  <Link to={"../uxpage"}> UX Guideline</Link>
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

export default DesignThinkPage;
