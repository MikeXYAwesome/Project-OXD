import SvgOXDCorrect from "../../assets/svgs/oxd-correct.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdCheckBox() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>OXD CheckBox</h4>
          <div className="comName">
            <code>
              {"</"} CheckBox{">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Checked</p>
            <img src="/img/comsvg/ch01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Un Checked</p>
            <img src="/img/comsvg/ch02.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">ReadOnly</p>
            <img src="/img/comsvg/ch03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Checkbox With Lable</p>
            <img src="/img/comsvg/ch04.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Checkbox Grupe</p>
            <img src="/img/comsvg/ch05.svg" className="Vimg" />
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
              Yes brand colors and secondary colors will support
              <div className="IconSizeM">
                <img src={SvgOXDCorrect}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Primary Orange</p>
            <img src="/img/comsvg/ch06.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Yellow Orange</p>
            <img src="/img/comsvg/ch07.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Pear Green</p>
            <img src="/img/comsvg/ch08.svg" className="Vimg" />
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
              Checkboxes Should aligned vertically should not be used in
              horizontal(inline) layout
            </li>
            <li>
              Checkbox labels that include “no” force users to affirm a
              negative, learn more at form design gudie.
            </li>
            <li>
              Do not use with Dupluacting lables. Duplicating it with multiple
              checkboxes produces more text to read and clutters the interface.
            </li>
          </ul>
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Gap Btween CheckBox Groupe (16px)</p>
            <img src="/img/compng/chgap1.png" className="Vimg" />
          </div>
          <div className="VBox">
            <p className="Vtitle">Checkbox Size and Gap with Lable (px)</p>
            <img src="/img/compng/chgap2.png" className="Vimg" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdCheckBox;
