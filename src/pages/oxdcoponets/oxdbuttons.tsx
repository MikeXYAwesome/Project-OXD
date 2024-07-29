import SvgOXDCorrect from "../../assets/svgs/oxd-correct.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdButtons() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>Buttons</h4>
          <div className="comName">
            <code>
              {"</"} OxdButtons {">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Button Types</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Solid Button (Primary button)</p>
            <img src="/img/comsvg/bt01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Solid Button (Sucsses button)</p>
            <img src="/img/comsvg/bt02.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Ghost Button (Secondary button)</p>
            <img src="/img/comsvg/bt03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Defult Text Button (Secondary button)</p>
            <img src="/img/comsvg/bt04.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Sucsses Text Button (Secondary button)</p>
            <img src="/img/comsvg/bt05.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Icon | List Button</p>
            <img src="/img/comsvg/bt06.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Plain Icon Buttons</p>
            <img src="/img/comsvg/bt07.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Button With Icon</p>
            <img src="/img/comsvg/bt08.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Dropdown Button</p>
            <img src="/img/comsvg/bt09.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Pill Button</p>
            <img src="/img/comsvg/bt10.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Pill Dropdown Button</p>
            <img src="/img/comsvg/bt11.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Arrow Icon Buttons</p>
            <img src="/img/comsvg/bt12.svg" className="Vimg" />
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
          <h4>Button Sizes</h4>
          <div>
            <div className="CorrctTab">
              All the button types sizes will same as bellow
            </div>
          </div>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Large</p>
            <img src="/img/comsvg/btlarge.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Medium (default) </p>
            <img src="/img/comsvg/btmedium.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Small</p>
            <img src="/img/comsvg/btsmall.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
        </div>

        <div className="ComTitleRow bodernone">
          <h4>Theme Support</h4>
          <div>
            <div className="CorrctTab">
              Yes (Secondary and Brand Color Buttons Will Support)
              <div className="IconSizeM">
                <img src={SvgOXDCorrect}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Solid Buttons</p>
            <img src="/img/comsvg/bt14.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Fade Buttons</p>
            <img src="/img/comsvg/bt15.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Ghost Button</p>
            <img src="/img/comsvg/bt16.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
        </div>

        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
          <div>
            <div className="CorrctTab">
              <div className="IconSizeM"></div>
            </div>
          </div>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Active</p>
            <img src="/img/comsvg/bt17.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Focus | Hover</p>
            <img src="/img/comsvg/bt18.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Disable</p>
            <img src="/img/comsvg/btdesable.svg" className="Vimg" />
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
              Primery Color Button should only use as main buttons or main
              links, exsample like in dashboard or specific task or navigation.
            </li>
            <li>Button does not contain any readonly status only disable.</li>
            <li>Always use the Sucsses Button in end of the form.</li>
            <li>Maintain 10px gap in icon and text in the Icon Buttons.</li>
            <li>
              Recommended maximum buttons in button group can contain only 5.
            </li>
          </ul>
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Button Grupe Gap (px)</p>
            <img src="/img/compng/btspace.png" className="Vimg scale3X" />
          </div>
          <div className="VBox">
            <p className="Vtitle">Button Icon Gap(px)</p>
            <img src="/img/compng/bticongap.png" className="Vimg scale3X" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdButtons;
