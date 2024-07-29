import ScrollToTop from "../components/ScrollToTop";
import ImageBox from "../components/imagebox";
import Loading from "../components/loading";
import OrangeLogo from "../assets/img/oxd-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../css/common.css";
import "../css/oimpage.css";
import CodeDisplay from "../components/codeDisplay";

function OimPage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const cssCode = `
  Animation - animate left to right

  Background color : background-light-gray-color #f1f2f5
  
  Shine Color: interface-gray-lighten-1-color #cfd3de
`;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const handleScroll = () => {
      const sections = [
        "oim-focuse",
        "oim-introduction",
        "oim-metrics",
        "oim-5ds",
        "oim-layers",
        "ux-ruls",
        "oim-cache",
        "oim-bgloading",
        "oim-3sec",
        "oim-ratio",
        "oim-fetchdata",
        "oim-overlay",
        "oim-loader",
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
          <div className="pageTitle">OIM Model</div>
          <h3 className="titleSidewarp">content</h3>
          <ul>
            <li
              className={activeSection === "oim-focuse" ? "active" : ""}
              onClick={() => scrollToSection("oim-focuse")}
            >
              Focuse
            </li>
            <li
              className={activeSection === "oim-introduction" ? "active" : ""}
              onClick={() => scrollToSection("oim-introduction")}
            >
              introduction
            </li>
            <li
              className={activeSection === "oim-metrics" ? "active" : ""}
              onClick={() => scrollToSection("oim-metrics")}
            >
              Product Model Metrics
            </li>
            <li
              className={activeSection === "oim-5ds" ? "active" : ""}
              onClick={() => scrollToSection("oim-5ds")}
            >
              The Five Dimensions
            </li>
            <li
              className={activeSection === "oim-layers" ? "active" : ""}
              onClick={() => scrollToSection("oim-layers")}
            >
              Layers Of Interaction model
            </li>
          </ul>
          <div className="simpleline"></div>
          <h3 className="titleSidewarp">OXD Interactive Guidelines</h3>
          <ul>
            <li
              className={activeSection === "oim-cache" ? "active" : ""}
              onClick={() => scrollToSection("oim-cache")}
            >
              Cache Page Layout
            </li>
            <li
              className={activeSection === "oim-bgloading" ? "active" : ""}
              onClick={() => scrollToSection("oim-bgloading")}
            >
              Background Loading
            </li>
            <li
              className={activeSection === "oim-3sec" ? "active" : ""}
              onClick={() => scrollToSection("oim-3sec")}
            >
              3 Seconds Rule
            </li>
            <li
              className={activeSection === "oim-ratio" ? "active" : ""}
              onClick={() => scrollToSection("oim-ratio")}
            >
              Maintain Visual Ratio
            </li>
            <li
              className={activeSection === "oim-fetchdata" ? "active" : ""}
              onClick={() => scrollToSection("oim-fetchdata")}
            >
              Fetching Data in Cluster Format
            </li>
            <li
              className={activeSection === "oim-overlay" ? "active" : ""}
              onClick={() => scrollToSection("oim-overlay")}
            >
              Page Overlays
            </li>
            <li
              className={activeSection === "oim-loader" ? "active" : ""}
              onClick={() => scrollToSection("oim-loader")}
            >
              Page Loadings
            </li>
          </ul>
        </div>
        <div className="ContentWarap">
          <div className="contentBox">
            <h1 className="mainTitle" style={{ height: "400px" }}>
              OXD Interaction Model
            </h1>
            <div className="StyleListOne">
              <div className="scrollAria grayAria" id="oim-focuse">
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
                    <span className="overlay">
                      <strong className="highlight">
                        <strong>HCI:</strong> Study of how people interact with
                        computers and to design technologies that let humans
                        interact with computers in novel ways.
                      </strong>
                    </span>
                  </li>
                  <li>
                    <strong>User Interface (UI):</strong> The space where
                    interactions between humans and machines occur.
                  </li>
                  <li>
                    User Experience (UX): The overall experience of a person
                    using a product, especially in terms of how easy or pleasing
                    it is to use.
                  </li>
                </ul>
              </div>
              <div id="oim-introduction" className="scrollAria">
                <h2 className="subTitles">Introduction</h2>
                <div className="simpleline"></div>
                <ImageBox width="full">
                  <img src="img/guideimg/oimbg.png" alt="hci" />
                </ImageBox>
                <p className="mt25">
                  The interaction module focuses on creating smooth, efficient,
                  and enjoyable interactions between users and product by
                  incorporating intuitive user interface elements like buttons
                  and menus, designing effective user flows for task completion,
                  providing feedback mechanisms such as error messages and
                  loading indicators, using established interaction patterns
                  like scrolling and swiping, enabling gestural interactions for
                  touch-based interfaces, ensuring accessibility for all users
                  by following guidelines like the Web Content Accessibility
                  Guidelines (WCAG), implementing responsive design for
                  consistent experiences across devices, and enhancing user
                  engagement through animations and microinteractions, ensuring
                  a comprehensive and seamless user experience.
                </p>
              </div>

              <div id="oim-metrics" className="scrollAria">
                <h2 className="subTitles">Our Product Model Metrics</h2>
                <div className="simpleline"></div>
                <p>
                  Product Model Metrics are essential tools used to evaluate and
                  measure various aspects of a product's performance,
                  effectiveness, and impact. These metrics help product
                  managers, developers, designers, and stakeholders understand
                  how well a product is meeting its objectives and where
                  improvements can be made. Here are our 5Ds of concern
                </p>
                <div className="mt25"></div>
                <h3>Discoverability</h3>
                <ul>
                  <li>
                    Can users quickly find the model’s? Understand the primary
                    object and perform the actions they care about? Can they use
                    the system successfully at the first time?
                  </li>
                </ul>
                <h3>Learnability</h3>
                <ul>
                  <li>
                    How long does it take for users to internalize? How to use
                    the system competently? Even consumer products often have a
                    slight learning curve today.
                  </li>
                </ul>
                <h3>User Efficiency and Productivity</h3>
                <ul>
                  <li>
                    Once users are competent in using the system, how easy is it
                    for them to perform common or repetitive tasks? Can they
                    perform bulk actions all at once, or do they have to perform
                    dozens or even hundreds of separate actions?
                  </li>
                </ul>
                <h3>System response time</h3>
                <ul>
                  <li>
                    Once users take an action, how long does the system take to
                    respond? In a production environment, user efficiency and
                    system response time combine to define the total task time
                  </li>
                </ul>
                <h3>Delight</h3>
                <ul>
                  <li>
                    How cool does the product feel to users? Do users like to
                    use it? How much do they like it—especially in comparison to
                    other products?
                  </li>
                </ul>
              </div>

              <div id="oim-5ds" className="scrollAria">
                <h2 className="subTitles">The Five Dimensions (5Ds)</h2>
                <div className="simpleline"></div>
                <ImageBox width="full">
                  <img src="img/guideimg/5dbg.png" alt="5d" />
                </ImageBox>
                <div className="paraStyleOne mt25">
                  <p>
                    <strong>1D: Words </strong>
                    should be simple to understand, and written in such a way
                    that they communicate information easily to the end user
                  </p>
                  <p>
                    <strong>2D: Visual </strong>
                    Representations are all graphics or images, essentially
                    everything that is not text. They should be used in
                    moderation, so as to not overwhelm.
                  </p>
                  <p>
                    <strong>3D: Physical Objects </strong>
                    or space refers to the physical hardware, whether it’s a
                    mouse and keyboard, or a mobile device a user interacts
                    with.
                  </p>
                  <p>
                    <strong>4D: Time </strong>
                    is the length that the user spends interacting with the
                    first three dimensions. It includes the ways in which the
                    user might measure progress, as well as sound and animation.
                  </p>
                  <p>
                    <strong>5D: Behavior </strong>
                    What Puts the Design in Interaction Design. It is the
                    emotions and reactions that the user has when interacting
                    with the system.
                  </p>
                </div>
              </div>

              <div id="oim-layers" className="scrollAria">
                <h2 className="subTitles">Layers Of Interaction Model</h2>
                <div className="simpleline"></div>
                <div className="flexrow">
                  <ImageBox width="full">
                    <img src="img/guideimg/layersbg.png"></img>
                  </ImageBox>
                </div>
                <div className="flexrow">
                  <p>
                    The Layers of Interaction Model is a framework that helps in
                    understanding the different aspects and levels involved in
                    human-computer interaction. Here are the key layers
                    typically included in this model:
                  </p>
                </div>
                <div className="paraStyleOne mt25">
                  <p>
                    <strong>Physical Layer:</strong>
                    This layer includes the physical devices and hardware that
                    users interact with, such as keyboards, mice, touchscreens,
                    and other input/output devices.
                  </p>
                  <p>
                    <strong>Syntax Layer: </strong>
                    This layer focuses on the rules and patterns of interaction,
                    such as gestures, commands, and navigation patterns. It
                    includes the structure and organization of how users provide
                    input and receive output.
                  </p>
                  <p>
                    <strong>Semantic Layer: </strong>
                    This layer deals with the meaning of interactions. It
                    encompasses the tasks and actions that users want to
                    perform, the commands they use, and the feedback they
                    receive from the system.
                  </p>
                  <p>
                    <strong>Pragmatic Layer: </strong>
                    This layer involves the context and purpose of interactions.
                    It considers how interactions fit into the broader workflow
                    and the practical aspects of achieving user goals
                    efficiently and effectively.
                  </p>
                  <p>
                    <strong>Conceptual Layer: </strong>
                    This layer focuses on the mental models and conceptual
                    frameworks that users form when interacting with a system.
                    It includes the overall design, metaphors, and abstractions
                    that help users understand and navigate the system.
                  </p>
                  <p>
                    <strong>Social Layer: </strong>
                    This layer addresses the social context of interactions,
                    including collaborative aspects, communication, and the
                    influence of social norms and practices on user behavior.
                  </p>
                  <p className="mt25">
                    The UI (User Interface) layer in the Layers of Interaction
                    Model primarily encompasses the
                    <strong> Physical, Syntax, and Semantic layers </strong>, as
                    these are directly related to the tangible and perceivable
                    elements of user interaction with a system.
                  </p>
                </div>

                <div className="simpleline mt100"></div>
                <h1 className="mainTitle size20  mt25">
                  Interactive Guidelines
                </h1>
                <div className="simpleline mt25"></div>
                <div id="oim-cache" className="scrollAria">
                  <div className="flexrow">
                    <p>
                      <strong>Cache Page Layout</strong>
                    </p>
                  </div>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/oimpage-img1.png"></img>
                    </ImageBox>
                  </div>
                  <div className="paraStyleOne mt25">
                    <p>
                      Caching page layouts is a strategy used to enhance the
                      performance of web applications by reducing the time it
                      takes to load a page. Here are some methods to implement
                      caching for page layouts to make the page load faster:
                    </p>
                    <div className="mt25">
                      <p>
                        Caching page layouts can significantly enhance page load
                        speeds through various strategies:
                      </p>
                      <h3>Server-Side Caching</h3>
                      <p>
                        By implementing full-page caching, the entire HTML
                        content is stored on the server, enabling quick
                        retrieval without the need for regeneration. Partial
                        caching can also be employed to store frequently used
                        components like headers, footers, and sidebars.
                      </p>
                      <h3>Client-Side Caching</h3>
                      <p>
                        Setting appropriate HTTP headers such as{" "}
                        <code>Cache-Control</code>, <code>Expires</code>,{" "}
                        <code>ETag</code>, and <code>Last-Modified</code> allows
                        browsers to cache static resources like CSS, JavaScript,
                        and images. Additionally, service workers can cache
                        assets and full pages, facilitating offline access and
                        faster load times.
                      </p>
                      <h3>Content Delivery Network (CDN)</h3>
                      <p>
                        Utilizing a CDN caches static assets and dynamic content
                        near the user’s location, thereby reducing load times by
                        serving content from geographically closer servers.
                      </p>
                      <h3>Template Caching</h3>
                      <p>
                        Rendering templates on the server side can be cached to
                        avoid repeated processing, which is particularly useful
                        in templating engines and server-side rendering
                        frameworks.
                      </p>
                      <h3>Database Query Caching</h3>
                      <p>
                        Caching database queries used to generate page content
                        reduces database load and speeds up page generation,
                        often achieved using solutions like Redis or Memcached.
                      </p>
                      <h3>Application-Level Caching</h3>
                      <p>
                        Implementing in-memory caching strategies, such as{" "}
                        <code>lru-cache</code> in Node.js, can cache computed
                        data or frequently accessed data, reducing the need for
                        repeated computations.
                      </p>
                      <h3>Static Site Generation (SSG)</h3>
                      <p>
                        Pre-rendering pages at build time through static site
                        generation provides static files that can be served
                        quickly, which is highly effective for content that
                        doesn’t change often.
                      </p>
                      <p>
                        By leveraging these caching methods, you can
                        substantially improve the performance and load times.
                      </p>
                    </div>
                  </div>

                  <div className="simpleline mt25"></div>
                  <p>OXD Common Layout That Can Cache</p>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/oimpage-img2.png"></img>
                    </ImageBox>
                  </div>
                </div>
                <div id="oim-bgloading" className="scrollAria">
                  <div className="simpleline mt25"></div>
                  <div className="flexrow">
                    <p>
                      <strong>
                        Background Loading (Pre loading or Smart loading)
                      </strong>
                    </p>
                  </div>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/oimpage-img3.png"></img>
                    </ImageBox>
                  </div>
                  <p>
                    We can analyze and pre-load the data that users are likely
                    to need next. For example, in a candidate profile, we can
                    pre-load the resume tab. If 83% of people tend to open the
                    "Resume" tab after the "Detail" tab, it means 83% of users
                    will experience faster loading times for these tabs.
                  </p>
                  <div className="mt25">
                    <strong className="paraStyleOne">
                      OXD Components to Pre-load When the Base Screen is Loaded
                    </strong>
                  </div>
                  <ul>
                    <li>OXD List view filters modal/popup</li>
                    <li>OXD List view setting modal</li>
                    <li>Mostly used tab in OXD tab cards</li>
                    <li>PDF view (background loaded)</li>
                    <li>Primary Add Forms (e.g., Add Employee)</li>
                  </ul>
                </div>
                <div id="oim-3sec" className="scrollAria">
                  <div className="simpleline mt25"></div>
                  <div className="flexrow">
                    <p>
                      <strong>3 Seconds Rule</strong>
                    </p>
                  </div>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/oimpage-img4.png"></img>
                    </ImageBox>
                  </div>
                  <p>
                    Users won't stay on a page to perform an action if it takes
                    more than 3 seconds to load. You have just 3 seconds to make
                    a good impression—the faster, the better. Improving
                    usability isn't just about changing the design; it also
                    means focusing on the speed of user actions. According to
                    the 3-second rule, users should be able to access their
                    desired content or action within three seconds. If it takes
                    longer, they will likely become frustrated and have a
                    negative experience.
                  </p>
                  <div className="flexrow">
                    <img
                      src="img/guideimg/oimpage-img5.png"
                      className="longimg"
                    ></img>
                  </div>
                  <div className="mt25">
                    <strong>Action Timing Guideline</strong>
                  </div>
                  <ul>
                    <li>
                      <strong>1 Second</strong>: It's best to trigger the action
                      or open under 1 second so the user doesn't feel any delay,
                      making the system feel smooth.
                    </li>
                    <li>
                      <strong>3 Seconds</strong>: This is the maximum waiting
                      time before users get frustrated and the system feels
                      slow. Ensure all actions and form openings happen within 3
                      seconds. If it takes more than 1 second, show a loading
                      button or press animation to prevent the user from
                      clicking the same action button multiple times and to
                      indicate it was pressed.
                    </li>
                    <li>
                      <strong>More than 3 Seconds</strong>: Show a proper
                      progress loading message to the user, indicating that the
                      action is happening and how long it will take. Otherwise,
                      users will get frustrated and lose interest, thinking the
                      action is broken or not working. Avoid showing just a
                      spinner, as it can make users feel tired and gives no
                      indication of when the process will be complete.
                    </li>
                  </ul>
                </div>
                <div id="oim-ratio" className="scrollAria">
                  <div className="simpleline mt25"></div>
                  <div className="flexrow">
                    <p>
                      <strong>Maintain Visual Ratio</strong>
                    </p>
                  </div>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/oimpage-img6.png"></img>
                    </ImageBox>
                  </div>
                  <p>
                    Maintaining visual consistency while transitioning to
                    another page or card is crucial for several reasons,
                    including comfort, as smooth, predictable transitions make
                    the experience more engaging and less jarring, and visual
                    flow, as maintaining visual ratios guides users naturally
                    through the interface without abrupt changes.
                  </p>
                  <p className="mt25">
                    Here are the recommended minimum heights for various
                    resolutions.
                  </p>
                  <div className="flexrow">
                    <img
                      src="img/guideimg/oimpage-img8.png"
                      className="longimg"
                    ></img>
                  </div>
                </div>
                <div id="oim-fetchdata" className="scrollAria">
                  <div className="simpleline mt25"></div>
                  <div className="flexrow">
                    <p>
                      <strong>
                        Fetch Data in Cluster Format (Set Of Data Collection)
                      </strong>
                    </p>
                  </div>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/oimpage-img9.png"></img>
                    </ImageBox>
                  </div>
                  <p>
                    Fetch data in a cluster format (set of data collections).
                    This means if a page has a large list view with many
                    options, we can initially load the first 10 items and
                    important options, allowing users to interact with primary
                    objects while the remaining items load in the background.
                    This approach simulates a smoother experience as additional
                    data is loaded progressively.
                  </p>
                </div>
                <div id="oim-overlay" className="scrollAria">
                  <div className="simpleline mt25"></div>
                  <div className="flexrow">
                    <p>
                      <strong>Page Blockers Overlay</strong>
                    </p>
                  </div>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/oimpage-img10.png"></img>
                    </ImageBox>
                  </div>
                  <p className="mt25">
                    Page blocker overlays, which cover the entire page during
                    loading, generally do not provide a good user experience.
                    They should be reserved for specific situations, such as
                    focus modes, critical operations, or modals. In these
                    scenarios, blocking the page is necessary to ensure that
                    users complete the task at hand without distractions.
                  </p>
                  <div className="mt25">
                    <strong>Examples:</strong>
                  </div>
                  <ul>
                    <li>
                      <strong>Focus Mode:</strong> When a user is performing a
                      critical task that requires undivided attention, such as
                      entering sensitive information or completing a
                      transaction, a page blocker overlay can help maintain
                      focus and prevent interruptions.
                    </li>
                    <li>
                      <strong>Critical Operations:</strong> During operations
                      that must be completed before the user can proceed, such
                      as submitting a form or processing a payment, using a page
                      blocker overlay ensures that users do not attempt to
                      interact with other parts of the page prematurely.
                    </li>
                    <li>
                      <strong>Modals:</strong> When displaying modal dialogs
                      that require user interaction before continuing, a page
                      blocker overlay helps highlight the modal and emphasizes
                      the importance of the action needed.
                    </li>
                  </ul>
                  <p>
                    In general usage, however, page blocker overlays should be
                    avoided. Instead, consider alternatives like loading
                    indicators for specific sections, progressive loading
                    techniques, or skeleton screens. These approaches allow
                    users to continue interacting with other parts of the page,
                    providing a smoother and more engaging experience. For
                    instance, if a page contains a large list of items, load the
                    first few items initially and progressively load more as the
                    user scrolls, avoiding the need to block the entire page.
                  </p>
                  <p>
                    By limiting the use of page blocker overlays to necessary
                    scenarios, you enhance usability and ensure a more pleasant
                    user experience.
                  </p>
                </div>
                <div id="oim-loader" className="scrollAria">
                  <div className="simpleline mt25"></div>
                  <div className="flexrow">
                    <p>
                      <strong>Page Loader</strong>
                    </p>
                  </div>
                  <div className="flexrow">
                    <ImageBox width="full">
                      <img src="img/guideimg/sk.gif"></img>
                    </ImageBox>
                  </div>
                  <strong>Skeleton Loaders</strong>
                  <div className="paraStyleOne">
                    <p>
                      In simplest terms, a Skeleton Loader is a static or
                      animated placeholder for information that is still
                      loading. It provides a preview of the type of content that
                      will be loaded in each block, such as images, text, or
                      long texts. Skeleton loaders indicate that loading is in
                      progress, creating the perception of a shorter waiting
                      time.
                    </p>
                    <p>
                      These loaders typically use light gray or neutral-colored
                      boxes to represent the areas where content will appear.
                      Once the data is ready, the actual content replaces these
                      placeholders. Skeleton loaders are generally perceived as
                      having a shorter duration compared to a blank screen or a
                      spinner, as they visually reassure users that loading is
                      happening.
                    </p>
                    <p>
                      Using spinners or loaders can create uncertainty for users
                      because the load time is unknown. Therefore, skeleton
                      loaders should not be used for long-running processes
                      (e.g., importing data) or for very fast processes that
                      take less than 300 milliseconds.
                    </p>
                    <div className="mt25"></div>
                    <strong>Use Case</strong>
                    <p>
                      OXD List view, OXD Forms, and OXD Dashboard should be able
                      to use Skeleton loaders.
                    </p>

                    <h3>Behaviors</h3>
                    <p>
                      Skeleton loaders will affect all the content and items
                      except the following:
                    </p>
                    <ul>
                      <li>Main titles or card titles.</li>
                      <li>Pagination (should be hidden until loaded).</li>
                      <li>Decoration items or main icons.</li>
                      <li>Empty message and image.</li>
                      <li>Sorting icons or sorting buttons.</li>
                      <li>Card menu tabs.</li>
                    </ul>
                    <p>
                      Skeleton loaders should not be used in cases where there
                      are single or few items on the screen (e.g., screen only
                      has one button and textarea).
                    </p>
                    <p>
                      After the Skeleton loader disappears and the content
                      appears, it should appear from top to bottom and not
                      randomly or all at once without any delay.
                    </p>
                    <p>
                      Skeleton loaders should not be used in parallel with any
                      other loaders.
                    </p>
                    <p>
                      Skeleton loaders should not exceed 10 seconds to finish
                      loading; ideally, they should load within 3 seconds.
                    </p>

                    <h3>Styles</h3>
                    <CodeDisplay code={cssCode} />
                  </div>
                  <div className="simpleline mt25"></div>
                  <div className="flexrowEnd">
                    <p className="mt25">
                      Learn more guidelines in the{" "}
                      <Link to={"../uxpage"}> UX Standards Guide</Link>
                    </p>
                  </div>
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

export default OimPage;
