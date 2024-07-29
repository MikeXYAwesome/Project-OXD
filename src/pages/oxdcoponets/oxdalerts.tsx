import SvgOXDCorrect from "../../assets/svgs/oxd-correct.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdAlerts() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>Alerts</h4>
          <div className="comName">
            <code>
              {"</"} OxdAlerts {">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/Xplaceholder.png" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/Xplaceholder.png" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/Xplaceholder.png" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
        </div>

        <div className="ComTitleRow">
          <h4>Styles</h4>
          <div>
            <button className="getCodeButton" id="openModal">
              Get The Css
            </button>
          </div>
        </div>

        <div className="ComTitleRow bodernone">
          <h4>Theme Support</h4>
          <div>
            <div className="CorrctTab">
              Yes
              <div className="IconSizeM">
                <img src={SvgOXDCorrect}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/Xplaceholder.png" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/Xplaceholder.png" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/Xplaceholder.png" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
        </div>
        <div className="ComTitleRow ">
          <h4>Behaviours and Rules</h4>
        </div>
        <div className="listViewWrap">
          <ul>
            <li>
              Behaviors For auto-comlete dropdown can show 5 suggestions, that
              will be the max
            </li>
            <li>
              Behaviors For auto-comlete dropdown can show 5 suggestions, that
              will be the max
            </li>
            <li>
              Behaviors For auto-comlete dropdown can show 5 suggestions, that
              will be the max
            </li>
            <li>
              Behaviors For auto-comlete dropdown can show 5 suggestions, that
              will be the max
            </li>
            <li>
              Behaviors For auto-comlete dropdown can show 5 suggestions, that
              will be the max
            </li>
            <li>
              Behaviors For auto-comlete dropdown can show 5 suggestions, that
              will be the max
            </li>
          </ul>
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox"></div>
          <div className="VBox"></div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdAlerts;
