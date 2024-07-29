import "../css/qapage.css";
import "../css/common.css";
import ScrollToTop from "../components/ScrollToTop";
import ImageBox from "../components/imagebox";
import Loading from "../components/loading";
import OrangeLogo from "../assets/img/oxd-icon.png";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QaGuidePage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const handleScroll = () => {
      const sections = [
        "qa-introduction",
        "qa-consistency",
        "qa-clarity",
        "qa-scalability",
        "qa-legibility",
        "qa-alignment",
        "qa-interaction",
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
          <div className="pageTitle">QA Guidelines</div>
          <h3 className="titleSidewarp">Content</h3>
          <ul>
            <li
              className={activeSection === "qa-introduction" ? "active" : ""}
              onClick={() => scrollToSection("qa-introduction")}
            >
              Introduction
            </li>
            <li
              className={activeSection === "qa-consistency" ? "active" : ""}
              onClick={() => scrollToSection("qa-consistency")}
            >
              Understanding UX/UI
            </li>
            <li
              className={activeSection === "qa-clarity" ? "active" : ""}
              onClick={() => scrollToSection("qa-clarity")}
            >
              Clarity
            </li>
            <li
              className={activeSection === "qa-scalability" ? "active" : ""}
              onClick={() => scrollToSection("qa-scalability")}
            >
              Designer Vs QA
            </li>
            <li
              className={activeSection === "qa-legibility" ? "active" : ""}
              onClick={() => scrollToSection("qa-legibility")}
            >
              Legibility
            </li>
            <li
              className={activeSection === "qa-alignment" ? "active" : ""}
              onClick={() => scrollToSection("qa-alignment")}
            >
              Right or Wrong
            </li>
            <li
              className={activeSection === "qa-interaction" ? "active" : ""}
              onClick={() => scrollToSection("qa-interaction")}
            >
              Integrity
            </li>
          </ul>
        </div>
        <div className="ContentWarap qawrap">
          <div className="contentBox">
            <h1 className="mainTitle">OXD QA UI Guidelines</h1>
            <div className="StyleListOne">
              <div id="qa-introduction" className="scrollAria">
                <h2 className="subTitles">Introduction</h2>
                <div className="simpleline"></div>
                <ImageBox width="full">
                  <img src="img/guideimg/qabg1.jpg" alt="qa-introduction" />
                </ImageBox>
                <p className="mt25">
                  These guidelines are designed to help you create user
                  interfaces (UIs) that are consistent, clear, and scalable.
                  Following these principles will ensure that your UIs are
                  visually appealing and easy to use.
                </p>
              </div>

              <div id="qa-consistency" className="scrollAria">
                <h2 className="subTitles">Understanding UX/UI</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  By understanding the user experience details and user
                  interface dos and don'ts, the QA guy could be very confident
                  while checking the digital product and getting a very
                  qualified product to provide to the target users.
                </p>
                <p className="mt25">
                  UX focuses on the overall experience and satisfaction that
                  users have when interacting with a software product. It
                  includes the user’s emotions, perceptions, and responses while
                  using the software. In the context of QA professionals, UX
                  testing involves evaluating the software’s usability, ease of
                  navigation, and overall satisfaction of the end user. It
                  ensures that the software meets the user’s expectations,
                  delivers a smooth and intuitive experience, and achieves its
                  intended goals effectively.
                </p>
                <p className="mt25">
                  UI pertains to the visual elements, layout, and interactive
                  components of a software application or website that users
                  interact with directly. It includes buttons, menus, forms,
                  icons, typography, and other visual elements that facilitate
                  user interactions. For QA professionals, UI testing involves
                  examining the visual design, consistency, responsiveness, and
                  accessibility of the software’s user interface. It ensures
                  that the UI elements are visually appealing, and functional,
                  and provide a seamless interaction experience for the end
                  user.
                </p>
                <p className="mt25">
                  The QA guys should and maybe shall know a lot about the UX/UI
                  design to be more accurate and deep in their testing, so they
                  need to be aware that a good UX/UI design is essential for
                  creating intuitive and user-friendly software. Here are some
                  key ways in which it contributes to an enhanced user
                  experience:
                </p>
                <ul>
                  <li>
                    <strong>Clear and Consistent Navigation:</strong> A
                    well-designed UX/UI provides users with clear and intuitive
                    navigation, making it easier for them to move through
                    different sections of the software. Consistent placement of
                    menus, buttons, and navigation elements ensures that users
                    can quickly find what they need, reducing confusion and
                    frustration.
                  </li>
                  <li>
                    <strong>Streamlined Workflows:</strong> Effective UX/UI
                    design optimizes workflows and task flows within the
                    software. By understanding user needs and goals, designers
                    can create interfaces that minimize the steps required to
                    complete a task. This simplifies the user’s journey and
                    increases efficiency, saving time and effort.
                  </li>
                  <li>
                    <strong>
                      Visual Hierarchy and Information Architecture:
                    </strong>{" "}
                    UX/UI design establishes a clear visual hierarchy that
                    guides users’ attention to the most important elements on
                    the screen. By organizing information in a structured and
                    logical manner, users can easily understand the
                    relationships between different elements and make informed
                    decisions.
                  </li>
                  <li>
                    <strong>Responsive and Adaptive Design:</strong> With the
                    prevalence of various devices and screen sizes, responsive
                    and adaptive design is crucial. UX/UI design ensures that
                    the software adapts seamlessly to different screen
                    resolutions, maintaining usability and readability across
                    platforms such as desktops, tablets, and mobile devices.
                  </li>
                  <li>
                    <strong>Feedback and Error Prevention:</strong> Good UX/UI
                    design incorporates effective feedback mechanisms, providing
                    users with clear indications of their actions and system
                    responses. This helps users understand the consequences of
                    their interactions and reduces the likelihood of errors.
                    Error prevention techniques, such as clear validation
                    messages and input constraints, contribute to a smoother and
                    error-free user experience.
                  </li>
                  <li>
                    <strong>Aesthetics and Branding:</strong> Visual appeal
                    plays a significant role in user perception. Well-designed
                    UX/UI considers the aesthetics of the software, creating
                    visually pleasing interfaces that align with the brand’s
                    identity and appeal to the target audience. An aesthetically
                    pleasing design can enhance user engagement and create a
                    positive emotional connection with the software.
                  </li>
                </ul>
              </div>

              <div id="qa-clarity" className="scrollAria">
                <h2 className="subTitles">Clarity</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  Clarity is key to good UI design. Make sure that every element
                  in your interface is understandable at a glance. Use clear
                  labels, straightforward icons, and simple layouts to enhance
                  the user's comprehension.
                </p>
                <p className="mt25">
                  <strong>From a QA Perspective:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Usability Testing:</strong> QA teams conduct
                    usability testing to ensure that users can easily understand
                    and interact with the interface. This involves observing
                    users as they complete tasks and identifying any areas of
                    confusion or difficulty. Collect detailed feedback from
                    users about their experience, focusing on aspects like ease
                    of navigation, clarity of instructions, and overall
                    intuitiveness of the interface.
                  </li>
                  <li>
                    <strong>Clear Labels and Instructions:</strong> Ensure that
                    all labels and instructions are clear and concise. Avoid
                    technical jargon and use language that is easily understood
                    by the target audience. Design error messages that are
                    informative and guide the user on how to correct the issue.
                    Clear error messages improve user experience and reduce
                    frustration.
                  </li>
                  <li>
                    <strong>Consistent Design Patterns:</strong> QA teams check
                    for consistency in design patterns across the application.
                    Consistent use of buttons, icons, and navigation elements
                    helps users predict how the interface will behave, enhancing
                    clarity. Adhere to design guidelines and best practices to
                    maintain uniformity. Consistent design reduces the learning
                    curve and helps users feel more comfortable with the
                    interface.
                  </li>
                  <li>
                    <strong>Visual Hierarchy:</strong> Establish a clear visual
                    hierarchy to guide users' attention to the most important
                    elements first. This involves using size, color, and
                    positioning to indicate the relative importance of elements.
                    QA teams test the visual flow of the interface to ensure
                    that users can easily follow the intended path and complete
                    tasks without unnecessary distractions.
                  </li>
                </ul>
                <p className="mt25">
                  <strong>From an HCI Perspective:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Cognitive Load Reduction:</strong> Clarity in UI
                    design reduces cognitive load by simplifying tasks. When
                    users do not have to spend time figuring out how to use the
                    interface, they can focus more on completing their tasks.
                    Present information in a way that is easy to scan and
                    understand. Use bullet points, headings, and visual aids to
                    break down complex information.
                  </li>
                  <li>
                    <strong>Intuitive Interaction:</strong> Ensure that the
                    design follows natural mapping principles, where controls
                    are placed in a way that corresponds to their effects. This
                    makes the interface more intuitive and reduces user errors.
                    Design elements should clearly indicate their functionality.
                    For example, buttons should look clickable, and input fields
                    should be easily recognizable.
                  </li>
                  <li>
                    <strong>User-Centered Design:</strong> Conduct user research
                    to understand the needs, preferences, and limitations of the
                    target audience. This helps in designing an interface that
                    aligns with users' mental models and expectations. Use an
                    iterative design process where the interface is continuously
                    tested and refined based on user feedback. This ensures that
                    the final design is clear and user-friendly.
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Ensure that the interface is
                    accessible to all users, including those with disabilities.
                    This involves using accessible color schemes, providing text
                    alternatives for images, and designing for keyboard
                    navigation. Adhere to accessibility standards such as WCAG
                    (Web Content Accessibility Guidelines) to ensure that the
                    interface is usable by a wide range of users.
                  </li>
                  <li>
                    <strong>Aesthetic-Usability Effect:</strong> While a
                    visually pleasing interface is important, it should not come
                    at the expense of usability. Strive for a balance where the
                    design is both attractive and functional. A clear and
                    aesthetically pleasing interface can evoke positive
                    emotional responses from users, increasing their
                    satisfaction and likelihood of continued use.
                  </li>
                </ul>
                <p className="mt25">
                  <strong>Example Implementation in QA and HCI:</strong>
                </p>
                <p className="mt25">
                  <strong>Scenario:</strong> Designing a Form for User
                  Registration
                </p>
                <ul>
                  <li>
                    <strong>QA Perspective:</strong>
                    <ul>
                      <li>
                        Conduct usability testing with real users to observe how
                        easily they can complete the registration process.
                      </li>
                      <li>
                        Ensure that all form fields have clear and concise
                        labels (e.g., "First Name," "Email Address").
                      </li>
                      <li>
                        Provide helpful error messages that guide users on how
                        to correct input errors (e.g., "Please enter a valid
                        email address").
                      </li>
                      <li>
                        Verify that the design follows consistent patterns
                        (e.g., all buttons look the same and are placed in
                        predictable locations).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>HCI Perspective:</strong>
                    <ul>
                      <li>
                        Use user research to understand the typical information
                        users need to provide during registration.
                      </li>
                      <li>
                        Design the form with a clear visual hierarchy, placing
                        the most important fields at the top.
                      </li>
                      <li>
                        Use natural mapping by placing the "Submit" button at
                        the end of the form, where users naturally expect it.
                      </li>
                      <li>
                        Ensure that the form is accessible by providing labels
                        that are readable by screen readers and designing for
                        keyboard navigation.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="qa-scalability" className="scrollAria">
                <h2 className="subTitles">
                  Designer vs QA:<br></br> Overcoming Problems and Key Processes
                  to Solve Issues
                </h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  In the development lifecycle, designers and QA engineers often
                  face different challenges, but effective collaboration and
                  understanding of each other's roles can significantly enhance
                  the final product. Here are some common problems faced by
                  designers and QA engineers, along with key processes to
                  overcome these issues:
                </p>

                <p className="mt25">
                  <strong>Common Problems and Solutions:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Time Constraints:</strong> Tight deadlines can force
                    both designers and QA engineers to rush through their
                    processes, leading to incomplete designs and insufficient
                    testing.
                    <strong>Solution:</strong> Implementing continuous
                    integration and continuous testing can help manage time
                    better. Start testing early in the development cycle and use
                    automated testing to handle repetitive tasks. Allocating
                    resources wisely and emphasizing the importance of testing
                    in project planning are also crucial.
                  </li>
                  <li>
                    <strong>Lack of Communication:</strong> Poor communication
                    between designers and QA engineers can lead to
                    misunderstandings about design specifications and testing
                    requirements.
                    <strong>Solution:</strong> Establish regular meetings and a
                    robust communication framework to ensure that both teams are
                    aligned. Documenting all design changes and testing
                    requirements helps keep everyone on the same page.
                    Collaboration tools and shared documentation platforms can
                    facilitate better communication.
                  </li>
                  <li>
                    <strong>Changing Requirements:</strong> Agile development
                    often brings frequent changes in requirements, which can be
                    challenging for both designers and QA engineers to keep up
                    with.
                    <strong>Solution:</strong> Keep the entire project team
                    updated with the latest requirements through regular updates
                    and clear documentation. Using examples and detailed user
                    stories can help in understanding changes better. Agile
                    methodologies should be flexible to accommodate changes
                    without disrupting the workflow excessively.
                  </li>
                  <li>
                    <strong>Manual vs Automated Testing:</strong> Relying solely
                    on manual testing can be time-consuming and prone to human
                    error, while designers might not always consider the
                    testability of their designs.
                    <strong>Solution:</strong> Integrate automated testing to
                    improve efficiency and accuracy. Designers should work
                    closely with QA to ensure designs are testable. Tools like
                    Selenium for browser automation and JMeter for performance
                    testing can be invaluable in this process.
                  </li>
                  <li>
                    <strong>Professional Tension:</strong> Tension between
                    development and testing teams can lead to a lack of
                    cooperation and lower product quality.
                    <strong>Solution:</strong> Foster a culture of mutual
                    respect and collaboration. Regular joint meetings and shared
                    objectives can help bridge the gap. Encourage both teams to
                    understand each other's challenges and work towards common
                    goals.
                  </li>
                </ul>

                <p className="mt25">
                  <strong>Key Processes to Solve Issues:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Early Involvement of QA:</strong> Involve QA
                    engineers early in the design process to identify potential
                    issues before they become significant problems. This
                    proactive approach helps in catching design flaws early and
                    ensures that the final product is of higher quality.
                  </li>
                  <li>
                    <strong>Continuous Feedback Loop:</strong> Establish a
                    continuous feedback loop between designers, developers, and
                    QA engineers. Regular feedback helps in making incremental
                    improvements and ensures that any issues are addressed
                    promptly.
                  </li>
                  <li>
                    <strong>Clear Documentation:</strong> Maintain comprehensive
                    documentation for designs and test cases. Clear and detailed
                    documentation helps in understanding the project
                    requirements better and ensures that both designers and QA
                    engineers are aligned.
                  </li>
                  <li>
                    <strong>Automated Testing:</strong> Implement automated
                    testing for repetitive tasks to save time and reduce errors.
                    Automated tests can run continuously and provide quick
                    feedback, allowing teams to focus on more complex issues.
                  </li>
                  <li>
                    <strong>Cross-Functional Teams:</strong> Create
                    cross-functional teams that include designers, developers,
                    and QA engineers. This approach ensures better
                    collaboration, knowledge sharing, and a more integrated
                    workflow.
                  </li>
                </ul>
              </div>

              <div id="qa-legibility" className="scrollAria">
                <h2 className="subTitles">Legibility</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  Legibility is about making sure that text and other visual
                  elements are easy to read. Use sufficient contrast between
                  text and background, and choose legible fonts at appropriate
                  sizes.
                </p>
                <p>
                  For example, if a designer specifies a color for a label but
                  the label is not easily readable, the QA team can raise a
                  question and request a change.
                </p>
                <p>
                  In summary, all basic elements should be functional. If they
                  are not, even if the guidelines from the designer indicate
                  they are, the QA team can suggest and enforce necessary
                  changes.
                </p>
              </div>

              <div id="qa-alignment" className="scrollAria">
                <h2 className="subTitles">Right or Wrong Situations</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  <strong>OXDQA01:</strong> When QA has doubts about the
                  correctness of a design or element, they can refer to the
                  design guide or documentation (such as the Figma file) to
                  verify its accuracy.
                </p>
                <p>
                  <strong>OXDQA02:</strong> If the designer has doubts about the
                  design and its implementation, QA can ask the corresponding
                  designer for clarification. The designer should provide solid
                  reasons and facts to justify their design choices. If
                  necessary, this information can be reported to higher
                  stakeholders.
                </p>
                <p>
                  <strong>OXDQA03:</strong> If QA identifies a problem that the
                  designer might not be aware of, or based on previous
                  experience, QA can provide reasonable explanations to avoid
                  unnecessary time wastage and suggest alternative to designs.
                </p>
                <p>
                  <strong>OXDQA04:</strong> In cases where the issue is not
                  easily recognized or there is uncertainty about the design's
                  effectiveness, and the designer refuses to make changes, QA
                  can escalate the issue to the QA lead. The QA lead can then
                  consult with the head of the UX team to finalize the solution.
                  The final decision should be made by the head of design or the
                  main UX specialist.
                </p>
                <p>Additional Situations:</p>
                <ul>
                  <li>
                    <strong>OXDQA05:</strong> If the color of a label specified
                    by the designer is not readable, QA can request a change to
                    ensure accessibility standards are met.
                  </li>
                  <li>
                    <strong>OXDQA06:</strong> If a design element does not
                    adhere to the established UI guidelines, QA can suggest
                    revisions to align it with the guidelines.
                  </li>
                  <li>
                    <strong>OXDQA07:</strong> If a new design pattern is
                    introduced that conflicts with existing patterns, QA can
                    highlight the inconsistency and propose alternatives.
                  </li>
                  <li>
                    <strong>OXDQA08:</strong> If a design choice negatively
                    impacts user experience, such as poor navigation or unclear
                    instructions, QA can recommend improvements to enhance
                    usability.
                  </li>
                  <li>
                    <strong>OXDQA09:</strong> If there is a conflict between
                    different design elements, QA can work with the designer to
                    resolve the issue and maintain a cohesive look and feel.
                  </li>
                  <li>
                    <strong>OXDQA10:</strong> If the implementation of a design
                    element causes performance issues, QA can suggest
                    optimizations to ensure smooth functionality.
                  </li>
                  <li>
                    <strong>OXDQA11:</strong> If user feedback indicates
                    problems with the design, QA can present this feedback to
                    the designer for potential revisions.
                  </li>
                </ul>
              </div>

              <div id="qa-interaction" className="scrollAria">
                <h2 className="subTitles">Integrity</h2>
                <div className="simpleline"></div>
                <p className="mt25">
                  In the end, QA should be able to maintain the quality and
                  consistency according to OXD design standards, ensuring
                  everything aligns with the provided designs. QA plays a
                  crucial role in keeping OXD design consistent and, most
                  importantly, ensuring it is workable and error-free.
                </p>
              </div>

              <div className="simpleline mt25"></div>
              <div className="flexrowEnd">
                <p className="mt25">
                  Learn more guidelines in
                  <Link to={"../uxpage"}> Better UI Guidelines</Link>
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

export default QaGuidePage;
