import Footer from "../../components/footer";
import "../../css/typopage.css";

function TypoPage() {
  const fontWeights = [
    { label: "200", weight: 200 },
    { label: "300", weight: 300 },
    { label: "400", weight: 400 },
    { label: "600", weight: 600 },
    { label: "700", weight: 700 },
    { label: "800", weight: 800 },
    { label: "900", weight: 900 },
  ];
  return (
    <>
      {" "}
      <div className="typoPageWarp">
        <div className="pageTitle typotitle">Typography</div>
        <div className="blockWrap">
          <div className="leftBlock">
            <img src="img/guideimg/typobg.png" className="typobg" />
          </div>
          <div className="rightBlock">
            <h1 className="title2">Font Nunito </h1>
            <div className="typo-detail">
              <p className="mt25 ">
                Nunito is a well-balanced sans-serif typeface superfamily with
                two versions. The project began with Nunito, created by Vernon
                Adams as a rounded terminal sans-serif for display typography.
                Jacques Le Bailly extended it to a full set of weights,
                including an accompanying regular non-rounded terminal version.
                In our design, we use this rounded version to lend a much warmer
                and friendlier feel compared to the strong and authoritative
                Nunito Sans. This choice aligns well with the OrangeHRM logo and
                UI rounded shapes.
              </p>
              <p className="mt25 ">
                We use Nunito as our native font. As a designated alternative,
                we use "Inter," another Google font known for its quick load
                times and readability. In case of rendering issues, Inter serves
                as the default font. Our default font size is 12px, with the
                base size set to 16px (1rem). Additionally, for our OXD widgets
                and times, we use the Helvetica font, renowned for its beauty
                and functionality in both real-life and digital environments.
                All OXD styles are listed below.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="TypoStyleWrap">
            <div className="typoRowWarp mt100">
              <div className="typoSubtitle">Styles</div>
              {fontWeights.map((font, index) => (
                <div className="typoRow" key={index}>
                  <p className="typolable">Nunito font Style {font.label}</p>
                  <p
                    className="typotxt"
                    style={{ fontFamily: "Nunito", fontWeight: font.weight }}
                  >
                    The World Most Friendliest HRM System
                  </p>
                </div>
              ))}
            </div>
            <div className="mt100"></div>
            <h2 className="typoSubtitle mt100">Types</h2>
            <div className="mt50"></div>
            <div className="typoRow">
              <p className="typotxt headerDefault">Default Header</p>
              <div className="showStyles">Font: 16px, Regular, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typotxt headerMain">Main Header</p>
              <div className="showStyles">Font:46px, Extra-bold, #38455d</div>
            </div>
            <div className="typoRow">
              <p className="typotxt titleMain">Main Title</p>
              <div className="showStyles">Font: 18px, Bold, #38455d</div>
            </div>
            <div className="typoRow">
              <p className="typotxt titleSub">Sub Title</p>
              <div className="showStyles">Font: 12px, Semi-bold, #929baa</div>
            </div>
            <div className="typoRow">
              <p className="typotxt headerCard">Card Header</p>
              <div className="showStyles">
                Font: 16px, Semi-bold, #64728c or theme-color
              </div>
            </div>
            <div className="typoRow">
              <p className="typotxt subHeaderCard">Card Sub Header</p>
              <div className="showStyles">Font: 14px, Semi-bold, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typotxt helpText">Help Text</p>
              <div className="showStyles">Font: 12px, Regular, #929baa</div>
            </div>
            <div className="typoRow">
              <p className="typotxt textDefault">Default Text</p>
              <div className="showStyles">Font: 14px, Regular, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typotxt textList">List Text</p>
              <div className="showStyles">Font: 12px, Semi-bold, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typotxt oxdLinks">OXD Links</p>
              <div className="showStyles">
                Font: 12px, Semi-bold, primary color or feedback blue color
              </div>
            </div>
            <div className="typoRow">
              <p className="typotxt paragraphText">
                Paragraph Text - Nunito is a well balanced sans serif typeface
                superfamily, with 2 versions: The project began with Nunito,
                created by Vernon Adams as a rounded terminal sans serif for
                display typography. Jacques Le Bailly extended it to a full set
                of weights, and an accompanying regular non-rounded terminal
                version.
              </p>
              <div className="showStyles">
                Font: 12px/14px, Regular, #64728c
              </div>
            </div>
            <div className="typoRow">
              <p className="typotxt oxdtime">12.54 PM (Time Lable)</p>
              <div className="showStyles">
                font-family: 'helvetica, Font size : 14px, Semi-bold, #64728c
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TypoPage;
