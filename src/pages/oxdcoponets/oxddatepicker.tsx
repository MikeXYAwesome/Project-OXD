import SvgOXDCorrect from "../../assets/svgs/oxd-correct.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdDatePicker() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>Date Picker</h4>
          <div className="comName">
            <code>
              {"</"} OxdDatePicker{">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Active | Default </p>
            <img src="/img/comsvg/dp01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Focus</p>
            <img src="/img/comsvg/dp02.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">ReadOnly</p>
            <img src="/img/comsvg/dp03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Long Date </p>
            <img src="/img/comsvg/dp04.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Error</p>
            <img src="/img/comsvg/dp06.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Auto Save | Correct </p>
            <img src="/img/comsvg/dp07.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle"> Auto Select </p>
            <img src="/img/comsvg/dp08.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle"> Draft </p>
            <img src="/img/comsvg/dp09.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle"> Opened picker </p>
            <img src="/img/comsvg/dp10.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle"> Date Range </p>
            <img src="/img/comsvg/dp11.svg" className="Vimg" />
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
            <p className="Vtitle">exsample 01</p>
            <img src="/img/comsvg/dp12.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">exsample 02</p>
            <img src="/img/comsvg/dp13.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">exsample 03</p>
            <img src="/img/comsvg/dp14.svg" className="Vimg" />
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
              Date can be type in field and it will auto formatted to configured
              format
            </li>
            <li>Can copy pest the date as a normal feild.</li>
            <li>Clear button will clear the feild</li>
          </ul>
        </div>
        <div className="ComTitleRow">
          <h4>Date Status</h4>
        </div>
        <div>
          <img src="/img/compng/datestatus.png" className="Vimg" />
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <img src="/img/compng/dategap1.png" className="Vimg scale1X" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdDatePicker;
