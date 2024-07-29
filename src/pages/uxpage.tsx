import ScrollToTop from "../components/ScrollToTop";
import ImageBox from "../components/imagebox";
import Loading from "../components/loading";
import OrangeLogo from "../assets/img/oxd-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../css/common.css";

function UxGuidePage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const laws = [
    {
      id: "hicks-law",
      title: "Hick's Law",
      description:
        "The time it takes to make a decision increases with the number and complexity of choices.",
      imgUrl: "../img/guideimg/law1.png",
    },
    {
      id: "fitts-law",
      title: "Fitts's Law",
      description:
        "The time required to move to a target area is a function of the distance to the target and the size of the target.",
      imgUrl: "../img/guideimg/law2.png",
    },
    {
      id: "millers-law",
      title: "Miller's Law",
      description:
        "The average person can only keep 7 (plus or minus 2) items in their working memory at once.",
      imgUrl: "../img/guideimg/law5.png",
    },
    {
      id: "gestalt-principles",
      title: "Gestalt Principles",
      description:
        "Principles of perceptual organization that explain how humans perceive and make sense of visual information, including proximity, similarity, closure, and continuity.",
      imgUrl: "../img/guideimg/law4.png",
    },
    {
      id: "parkinsons-law",
      title: "Parkinson's Law of Triviality (Bike-Shedding)",
      description:
        "People tend to give disproportionate weight to trivial issues, often at the expense of more important ones.",
      imgUrl: "../img/guideimg/law3.png",
    },
    {
      id: "zeigarnik-effect",
      title: "Zeigarnik Effect",
      description:
        "People remember uncompleted or interrupted tasks better than completed tasks.",
      imgUrl: "../img/guideimg/law6.png",
    },
    {
      id: "serial-position-effect",
      title: "Serial Position Effect",
      description:
        "People are more likely to remember the first and last items in a series, while items in the middle are less likely to be remembered.",
      imgUrl: "../img/guideimg/law7.png",
    },
    {
      id: "law-of-pragnanz",
      title: "Law of Prägnanz",
      description:
        "People perceive complex shapes as simple and symmetrical whenever possible.",
      imgUrl: "../img/guideimg/law8.png",
    },
    {
      id: "teslers-law",
      title: "Tesler's Law (The Law of Conservation of Complexity)",
      description:
        "Every application has an inherent amount of complexity that cannot be removed; it can only be shifted from one place to another.",
      imgUrl: "../img/guideimg/law9.png",
    },
    {
      id: "user-expectation-principle",
      title: "User Expectation Principle",
      description:
        "Users form expectations about how an interface should behave based on their prior experiences, and deviations from these expectations can lead to confusion or frustration.",
      imgUrl: "../img/guideimg/law10.png",
    },
    {
      id: "law-of-similarity",
      title: "Law of Similarity",
      description:
        "Objects that are similar in appearance are more likely to be perceived as belonging to the same group or category.",
      imgUrl: "../img/guideimg/law11.png",
    },
    {
      id: "doherty-threshold",
      title: "Doherty Threshold",
      description:
        "Response time should be kept below 400 milliseconds to maintain the user's flow of thought.",
      imgUrl: "../img/guideimg/law12.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const handleScroll = () => {
      const sections = [
        "ux-focuse",
        "ux-interdiction",
        "ux-reaserch",
        "ux-process",
        "ux-laws",
        "ux-ruls",
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
          <div className="pageTitle">UX Standards</div>
          <h3 className="titleSidewarp">content</h3>
          <ul>
            <li
              className={activeSection === "ux-focuse" ? "active" : ""}
              onClick={() => scrollToSection("ux-focuse")}
            >
              Focuse
            </li>
            <li
              className={activeSection === "ux-interdiction" ? "active" : ""}
              onClick={() => scrollToSection("ux-interdiction")}
            >
              Interdiction
            </li>
            <li
              className={activeSection === "ux-reaserch" ? "active" : ""}
              onClick={() => scrollToSection("ux-reaserch")}
            >
              Our UX Research Process
            </li>
            <li
              className={activeSection === "ux-process" ? "active" : ""}
              onClick={() => scrollToSection("ux-process")}
            >
              OXD UX Process for UI
            </li>
            <li
              className={activeSection === "ux-laws" ? "active" : ""}
              onClick={() => scrollToSection("ux-laws")}
            >
              UX Laws and Principles
            </li>
            <li
              className={activeSection === "ux-ruls" ? "active" : ""}
              onClick={() => scrollToSection("ux-ruls")}
            >
              UX Guidelines (Do's and Don'ts)
            </li>
          </ul>
        </div>
        <div className="ContentWarap">
          <div className="contentBox">
            <h1 className="mainTitle">UX Guide for Better UI</h1>

            <div className="StyleListOne">
              <div className="scrollAria grayAria" id="ux-focuse">
                <div className="simpleline"></div>
                <h2 className="subTitles">Human-Computer Interaction (HCI)</h2>
                <p>
                  HCI is a multidisciplinary field focusing on the design and
                  use of computer technology, emphasizing the interfaces between
                  people (users) and computers. Here’s a brief overview of key
                  topics within the HCI module:
                </p>
                <br />
                <h3>Key Concepts and Definitions</h3>
                <ul>
                  <li>
                    <strong>HCI:</strong> Study of how people interact with
                    computers and to design technologies that let humans
                    interact with computers in novel ways.
                  </li>
                  <li>
                    <strong>User Interface (UI):</strong> The space where
                    interactions between humans and machines occur.
                  </li>
                  <li>
                    <span className="overlay">
                      <strong className="highlight">
                        User Experience (UX): The overall experience of a person
                        using a product, especially in terms of how easy or
                        pleasing it is to use.
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>
              <div id="ux-interdiction" className="scrollAria">
                <h2 className="subTitles">Interdiction</h2>
                <div className="simpleline"></div>
                <ImageBox width="full">
                  <img src="img/guideimg/uxbg.jpg" alt="OXD UX Process" />
                </ImageBox>
                <p className="mt25">
                  User Experience (UX) is about how people feel when using a
                  product, like a real-world product. It includes making sure
                  the product is simple to use and understand. Accessibility
                  ensures everyone, including those with disabilities, can use
                  it. Design focuses on creating a visually appealing and
                  consistent look. Functionality ensures the product does what
                  it's supposed to do. Speed makes sure it works quickly and
                  reliably. Emotional impact aims to make users feel good and
                  satisfied. User research involves learning what users need and
                  want. Interaction design focuses on intuitive buttons and
                  menus. Using the OXD design system for human resource software
                  products helps create a friendly user experience. Overall, UX
                  aims to create enjoyable and efficient experiences for all
                  users. Ensure above requirements we follow below process,
                  guidelines, and rules. read more below.
                </p>
              </div>

              <div id="ux-reaserch" className="scrollAria">
                <h2 className="subTitles">UX Research Process</h2>
                <div className="simpleline"></div>
                <h3>Step 1: Planning and Preparation</h3>
                <ul>
                  <li>
                    <strong>Define Objectives and Goals:</strong> Clearly
                    outline what you want to achieve with your UX research. This
                    could be understanding user needs, identifying pain points,
                    or testing a specific feature.
                  </li>
                  <li>
                    <strong>Select Research Methods:</strong> Choose the
                    appropriate research methods based on your objectives. for
                    our methods include, competitive analyst, clinet feedbacks,
                    interviews , usability testing, existing information
                    structure and interfaces and field studies.
                  </li>
                </ul>

                <h3>Step 2: Conducting Research</h3>
                <ul>
                  <li>
                    <strong>Execute Research Activities:</strong> Carry out the
                    planned research activities. For example, if you’re
                    conducting interviews with stakeholder or client, ask
                    open-ended questions and encourage participants to share
                    their experiences.ask what they really want by real world
                    language then convert it later (high level Requirement).
                  </li>
                  <li>
                    <strong>Collect Data:</strong> Gather qualitative and
                    quantitative data from your research activities. Ensure data
                    is recorded accurately, whether through notes, wireframes,
                    hand drawn sketches, recordings, or direct data entry.
                  </li>
                  <li>
                    <strong>Observe and Interact:</strong> During usability
                    testing or beta testing, observe how users interact with our
                    product or service. Take note of any difficulties they
                    encounter or feedback they provide.
                  </li>
                </ul>

                <h3>Step 3: Analysis and Reporting</h3>
                <ul>
                  <li>
                    <strong>Analyze Data:</strong> Review and analyze the
                    collected data to identify patterns, insights, and key
                    findings. Use methods like thematic analysis for qualitative
                    data and statistical analysis for quantitative data.
                  </li>
                  <li>
                    <strong>Generate Insights and Recommendations:</strong>
                    Synthesize the analysis to generate actionable insights and
                    recommendations. Focus on highlighting user needs, pain
                    points, and opportunities for improvement.
                  </li>
                  <li>
                    <strong>Share Findings:</strong> Create a comprehensive
                    report or presentation to share your findings with
                    stakeholders. Ensure it includes clear visuals, user quotes,
                    and prioritized recommendations to support decision-making.
                    <strong>
                      "Make sure that you understand and can explain the
                      rationale behind each of your choices when presenting to
                      stakeholders."
                    </strong>
                  </li>
                </ul>
              </div>

              <div id="ux-process" className="scrollAria">
                <h2 className="subTitles">OXD UX Process for UI (GUI)</h2>
                <div className="simpleline"></div>
                <ImageBox width="full">
                  <img src="img/guideimg/uxprosess.png" alt="OXD UX Process" />
                </ImageBox>
                <div className="paraStyleOne mt25">
                  <p>
                    <strong>1. Know Your Users</strong>
                    <br /> Understand your target audience thoroughly. Conduct
                    user research, create user personas, and identify their
                    needs, goals, and pain points. This knowledge will guide UI
                    design decisions.
                  </p>
                  <p>
                    <strong>2. Simplify Navigation</strong>
                    <br /> Keep navigation intuitive and straightforward. Use
                    clear labels and organize content logically. Implement
                    breadcrumbs, menus, and search functionalities to help users
                    find what they need efficiently.
                  </p>
                  <p>
                    <strong>3. Consistent Design</strong>
                    <br /> Maintain consistency across the UI elements. Use
                    consistent fonts, colors, button styles, and iconography
                    throughout the interface. Consistency builds familiarity and
                    reduces cognitive load for users.
                  </p>
                  <p>
                    <strong>4. Clear Hierarchy</strong>
                    <br /> Establish a clear visual hierarchy to guide users
                    through the interface. Use size, color, contrast, and
                    spacing to emphasize important elements and actions. Ensure
                    that users can easily identify primary, secondary, and
                    tertiary information.
                  </p>
                  <p>
                    <strong>5. Responsive Design</strong>
                    <br /> Design UIs that adapt seamlessly to different screen
                    sizes and devices. Prioritize responsive layouts, flexible
                    images, and fluid grids to provide a consistent experience
                    across desktop, tablet, and mobile devices.
                  </p>
                  <p>
                    <strong>6. Minimize Cognitive Load</strong>
                    <br /> Simplify the UI to reduce cognitive load on users.
                    Avoid cluttered layouts, excessive text, and unnecessary
                    elements. Prioritize essential information and actions, and
                    progressively disclose additional details when needed.
                  </p>
                  <p>
                    <strong>7. Feedback and Validation</strong>
                    <br /> Provide immediate feedback for user actions to
                    confirm their interactions. Use visual cues like animations,
                    tooltips, and progress indicators to indicate system
                    responses. Ensure that error messages are informative and
                    guide users toward resolving issues.
                  </p>
                  <p>
                    <strong>8. Accessibility</strong>
                    <br /> Design UIs with accessibility in mind to accommodate
                    users with disabilities. Use semantic HTML, provide
                    alternative text for images, ensure sufficient color
                    contrast, and support keyboard navigation. Conduct
                    accessibility testing to identify and address potential
                    barriers.
                  </p>
                  <p>
                    <strong>9. User Testing and Iteration</strong>
                    <br /> Conduct usability testing with real users to gather
                    feedback and identify usability issues. Iterate on the UI
                    design based on user feedback, making incremental
                    improvements to enhance the overall user experience.
                  </p>
                  <p>
                    <strong>10. Performance Optimization</strong>
                    <br /> Prioritize performance optimization to ensure fast
                    loading times and smooth interactions. Minimize HTTP
                    requests, optimize images and multimedia content, and
                    leverage caching techniques. A fast and responsive UI
                    enhances user satisfaction.
                  </p>
                  <p>
                    <strong>*Stay Updated</strong>
                    <br /> Stay informed about emerging UX trends, technologies,
                    and best practices. Regularly evaluate and update the UI
                    design and OXD Guide to stay relevant and meet evolving user
                    expectations.
                  </p>
                </div>
              </div>

              <div id="ux-laws" className="scrollAria">
                <h2 className="subTitles">UX Laws</h2>
                <div className="simpleline"></div>
                <div className="linesStyleOne">
                  <div className="cardWrap">
                    {laws.map((law) => (
                      <div key={law.id} className="card">
                        <img src={law.imgUrl} alt={law.title} />
                        <h3 id={law.id}>{law.title}</h3>
                        <p>{law.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="ux-ruls" className="scrollAria">
                <h2 className="subTitles">OXD UX Guidelines</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <p>
                    UX impacts your web form’s level of accessibility (which
                    refers to how easily your forms can be completed and
                    submitted by many types of people, of various backgrounds)
                    and usability (which refers to how easily someone can
                    accomplish their goal, which in this case means completing a
                    form). Without great UX, you’ll not only have poor
                    accessibility and usability but you’ll also lose out on
                    conversions, to avoid all that fallow below Guidelines.
                  </p>
                </div>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>Use Visual Constraints</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img1.png"></img>
                  </ImageBox>
                </div>
                <p>
                  Use visual constraints to not cause a subliminal spurious wish
                  to type more than you need to. For instance, if there is only
                  two characters must be typed into the ‘State’ field, no need
                  to make it as long as, let’s say, ‘Address’ field. Besides,
                  different width of the fields serves as a good anchor for eyes
                  to navigate faster than in a column with the fields of the
                  same width.
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>Desktop-only: Make Form Keyboard-friendly</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img2.png"></img>
                  </ImageBox>
                </div>
                <p>
                  Users should be able to trigger and edit every field using
                  only the keyboard. Power users, who tend to use keyboards
                  heavily, should be able to navigatethe form using Tab and make
                  necessary edits, all without lifting their fingers off the
                  keyboard. You can find detailed requirements for keyboard
                  interaction pattern in our oxd keyboard guide
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>Pre-fill/Auto-Detect as Much as Can</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img3.png"></img>
                  </ImageBox>
                </div>
                <p>
                  Always help your respondent. If you already know some
                  information about him, pre-fill those fields or even don’t
                  show them at all. For example. • Most of the times you can
                  easily detect a user’s country and the city by IP or
                  geolocation.
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>Inline Edit and Auto Save</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img4.png"></img>
                  </ImageBox>
                </div>
                <p>
                  Inline edit and auto-save features are commonly used in modern
                  web applications to enhance user experience by making data
                  entry more seamless and efficient. think about.. just to
                  change the name, user just have open full document or full
                  form to change few latters. somthing like that we can
                  unavoidably can use inline edit. flow inline edit guide for
                  best practices for implementing these features effectively
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>The first field should be auto-selected.</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img5.png"></img>
                  </ImageBox>
                </div>
                <p>
                  the first field should be auto-selected when a form or modal
                  opening, otherwise the user has to use the mouse to select the
                  first field. it just obvious time wasting and not good for
                  keyboard support
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>Smart Default</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img6.png"></img>
                  </ImageBox>
                </div>
                <p className="mt25">
                  By utilizing analytics and overall usage patterns, we can
                  determine which option is selected most frequently from our
                  dropdown. If 80% of the users are selecting a specific option,
                  then we can allow 80% of users to skip this step entirely by
                  making that option the smart default.
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>
                      Make the Chack-Box Pre-Checked When Form Open
                    </strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img7.png"></img>
                  </ImageBox>
                </div>
                <p>
                  If more than 75% of users are gonna check the Option. then
                  make it auto-selected when form opening. because 75% of users
                  no need to make an effort to check the option. its reduce the
                  work user need to do
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>
                      Name a button to explain what it does rather than to use a
                      generic label
                    </strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img8.png"></img>
                  </ImageBox>
                </div>
                <p>
                  A good dialog box should make each option as clear as
                  possible. Therefore, it's crucial to have a clear label for
                  each option. Explicit labels give users more confidence in
                  selecting the correct action. Using a verb to describe the
                  action is better than using a noun (such as "OK").
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>
                      Show Password Constraints Upfront and Update it in Real
                      Time
                    </strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img9.png"></img>
                  </ImageBox>
                </div>
                <p className="mt25">
                  The user makes fewer mistakes while they can see what are they
                  typing. State visible the password requirements and showing
                  that there is room for improvements, will motivate people to
                  create better passwords by showing and updating password
                  constraints in real time.
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>Add a Password Strength Meter</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img10.png"></img>
                  </ImageBox>
                </div>
                <p className="mt25">
                  The user can see the level of security in real time and with
                  visual helpers (like colours: green, yellow, red).The benefit
                  of visually representing the password strength is getting a
                  secure password, instead of just complying with a system’s
                  arbitrary command.
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrow">
                  <p>
                    <strong>Use Radio Button Rather Than Drop-downs</strong>
                  </p>
                </div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/uxpage-img11.png"></img>
                  </ImageBox>
                </div>
                <p className="mt25">
                  If Possible use radio buttons rather than drop-downs.
                  Drop-down will require extra action (the user needs to tap on
                  the drop-down element to see the options). The radio button on
                  the other hand makes all options visible. so that users can
                  easily compare them. (but do not use for more than 5 items or
                  list of options)
                </p>
                <div className="simpleline mt25"></div>
                <div className="flexrowEnd">
                  <p className="mt25">
                    See more guidelines in the{" "}
                    <Link to={"../formdesignpage"}>UI Guidelines</Link>
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

export default UxGuidePage;
