import SvgOXDCorrect from "../../assets/svgs/oxd-correct.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdPluseMinus() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>OXD Pluse Minus Input</h4>
          <div className="comName">
            <code>
              {"</"} Pluse Minus Input {">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Active | Default</p>
            <img src="/img/comsvg/pm01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Focus</p>
            <img src="/img/comsvg/pm02.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">On Hover</p>
            <img src="/img/comsvg/pm03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">ReadOnly</p>
            <img src="/img/comsvg/pm04.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Limited</p>
            <img src="/img/comsvg/pm05.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Bold Version</p>
            <img src="/img/comsvg/pm06.svg" className="Vimg" />
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
              Yes (Only Bold Version will support theme)
              <div className="IconSizeM">
                <img src={SvgOXDCorrect}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/comsvg/pm09.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/comsvg/pm08.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Textbox</p>
            <img src="/img/comsvg/pm07.svg" className="Vimg" />
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
            <li>Max 4 digits</li>
            <li>Only "Bold Version" will support theme</li>
            <li>Do Not use "Bold Version" more than once in a same form</li>
            <li>can type on the number on the field</li>
            <li>floating points will not support</li>
            <li>numeric value only</li>
          </ul>
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <img src="/img/compng/pmgap1.png" className="Vimg scale3X" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdPluseMinus;
