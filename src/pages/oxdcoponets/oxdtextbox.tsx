import SvgOXDError from "../../assets/svgs/oxd-error.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdTextBox() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>OXD Textbox</h4>
          <div className="comName">
            <code>
              {"</"} textbox {">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Default </p>
            <img src="/img/comsvg/tx01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">
              <code>
                style {"{"}
                <br></br>
                font-color : #64728c;<br></br> border : 1px solid #e8eaef
                <br></br>
                {"}"}
              </code>
            </div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Focus</p>
            <img src="/img/comsvg/tx03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">
              <code>
                style {"{"}
                <br></br>
                font-color : #64728c <br></br> border : 1px solid #929baa;
                <br></br>
                box-sadow: 1px 1px 6px rgba(35, 35, 36, 0.12);
                <br></br>
                {"}"}
              </code>
            </div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Read Only</p>
            <img src="/img/comsvg/tx05.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">
              style {"{"}
              <br></br>
              font-color : #64728c <br />
              border : 1px solid #929baa;
              <br />
              backgrond-color: #64728c Alpha 10%;
              <br></br>
              {"}"}
            </div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Auto-Filled</p>
            <img src="/img/comsvg/tx04.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">
              style {"{"}
              <br></br>
              font-color : #64728c
              <br />
              border : 1px solid #e8eaef
              <br />
              background-color : #fff5eb
              <br />
              {"}"}
            </div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Auto-Correct | Saved</p>
            <img src="/img/comsvg/tx07.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">
              style {"{"}
              <br></br>
              font-color : #64728c <br />
              border : 1px solid #34bc40
              <br />
              box-sadow: 0 0 5px 0.2rem #34bc40 10% Alpaha
              <br />
              {"}"}
            </div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Error</p>
            <img src="/img/comsvg/tx06.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">
              style {"{"}
              <br></br>
              font-color : #64728c <br></br>border : 1px solid #eb0910<br></br>{" "}
              box-sadow: 0 0 5px 0.2rem rgba(223, 9, 16, 0.1)
              <br></br>
              {"}"}
            </div>
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

        <div className="ComTitleRow">
          <h4>Theme Support</h4>
          <div>
            <div className="CorrctTab">
              Not Support
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
              Normal textbox input width should be minimum around 300px and max
              will be 1000px
            </li>
            <li>
              Any theme color will not apply for Text boxes, except Focus Color{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OxdTextBox;
