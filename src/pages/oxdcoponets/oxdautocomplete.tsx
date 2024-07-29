import SvgOXDError from "../../assets/svgs/oxd-error.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdAutoComplete() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>AutoComplete</h4>
          <div className="comName">
            <code>
              {"</"} oxdAutoComplete {">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Active | Default</p>
            <img src="/img/comsvg/ac01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Forcus</p>
            <img src="/img/comsvg/ac02.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">ReadOnly</p>
            <img src="/img/comsvg/ac03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Error</p>
            <img src="/img/comsvg/ac04.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Auto Save | Correct</p>
            <img src="/img/comsvg/ac05.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Auto Selected</p>
            <img src="/img/comsvg/ac06.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Draft</p>
            <img src="/img/comsvg/ac07.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">With Profile Pic and ID</p>
            <img src="/img/comsvg/ac08.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Open Drawer</p>
            <img src="/img/comsvg/ac09.svg" className="Vimg" />
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
              No
              <div className="IconSizeM">
                <img src={SvgOXDError}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="ComTitleRow ">
          <h4>Behaviours and Rules</h4>
        </div>
        <div className="listViewWrap">
          <ul>
            <li>
              For auto-comlete dropdown can show 6 suggestions, that will be the
              max
            </li>
            <li>
              Scroll bar will not appper, sugguestion come-up by letter typing
            </li>
            <li>Longer text will be wraped, 3 rows is the max,</li>
            <li>
              Profile pic only appear after selecting the employee "Emplyee
              autocomplite option"
            </li>
            <li>Remove icon only appear after selecting an item</li>
            <li>Remove icon will not appear on ReadOnly</li>
          </ul>
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <img src="/img/compng/acgap1.png" className="Vimg scale1X" />
          </div>
          <div className="VBox">
            <img src="/img/compng/acgap2.png" className="Vimg scale1X" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdAutoComplete;
