import SvgOXDError from "../../assets/svgs/oxd-error.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdSerchBox() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4> SearchBox</h4>
          <div className="comName">
            <code>
              {"</"}SearchBox{">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Active </p>
            <img src="/img/comsvg/sh01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Focus </p>
            <img src="/img/comsvg/sh05.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Disable</p>
            <img src="/img/comsvg/sh03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">On Search</p>
            <img src="/img/comsvg/sh02.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">When Search Drawer Open</p>
            <img src="/img/comsvg/sh04.svg" className="Vimg" />
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
            <li>Showcase 6 search suggestions.</li>
            <li>
              Do not use inside forms unless attached to an advanced component.
            </li>
            <li>
              Search suggestions can be shown in a drawer or directly within the
              corresponding container.
            </li>
          </ul>
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <img src="/img/compng/shgap1.png" className="Vimg scale3X" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdSerchBox;
