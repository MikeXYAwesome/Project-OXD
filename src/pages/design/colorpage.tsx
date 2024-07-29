import "../../css/colorpage.css";
import ColorRainbow from "../../assets/img/oxdcolor.png";
import Palette from "../../assets/img/pallet.png";
import Footer from "../../components/footer";

function ColorPage() {
  const handleColorClick = (colorCode: any) => {
    navigator.clipboard.writeText(colorCode).then(
      () => {
        alert(`Color code ${colorCode} copied to clipboard`);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <>
      <div className="colorPageWarp">
        <div className="pageTitle">OXD Colours</div>
        <div className="colorBanner">
          <div className="bannerLeft">
            <h1>OXD Colour Palette</h1>
          </div>
          <img
            src={ColorRainbow}
            className="colorbannerimg"
            alt="Color Rainbow"
          />

          <p className="bannerRight">
            Colours is a great way to provide status information, give feedback
            in response to user actions, and help people visualize data. Use
            color judiciously for communication. In general, color should be
            used sparingly, like when you need to call attention to important
            information. For example, a red triangle that warns people of a
            critical problem becomes less effective when you use red elsewhere
            in an app for noncritical reasons.<br></br>
            <br></br>
            *Clicking on the color switch will copy the color code
          </p>

          <img src={Palette} className="palettebannerimg" alt="Palette" />
        </div>
        <div className="colorSwitchWarp">
          <div className="lableRow">
            <h4>
              Brand Colours<span className="titlesub"> Primary Colours </span>
            </h4>
          </div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch primaryOrange"
              onClick={() => handleColorClick("#ff7b1d")}
            >
              <p className="colorName">Primary Orange</p>
              <p className="colorCode">#ff7b1d</p>
            </div>
            <div
              className="colorSwitch primaryGreen"
              onClick={() => handleColorClick("#17a954")}
            >
              <p className="colorName">Primary Green</p>
              <p className="colorCode">#17a954</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>
              OXD Citrus Colour Palette{" "}
              <span className="titlesub">Secondary Colours</span>
            </h4>
          </div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch redOrange light"
              onClick={() => handleColorClick("#ffd9cc")}
            >
              <p className="colorName">Red Orange Light</p>
              <p className="colorCode">#ffd9cc</p>
            </div>
            <div
              className="colorSwitch yellowOrange light"
              onClick={() => handleColorClick("#ffedcc")}
            >
              <p className="colorName">Yellow Orange Light</p>
              <p className="colorCode">#ffedcc</p>
            </div>
            <div
              className="colorSwitch BeachBrown light txtColorBlack"
              onClick={() => handleColorClick("#fffdf6")}
            >
              <p className="colorName">Beach Brown Light</p>
              <p className="colorCode">#fffdf6</p>
            </div>
            <div
              className="colorSwitch LemonGreen light txtColorBlack"
              onClick={() => handleColorClick("#f7f9d9")}
            >
              <p className="colorName">Lemon Green Light</p>
              <p className="colorCode">#f7f9d9</p>
            </div>
            <div
              className="colorSwitch PearGreen light txtColorBlack"
              onClick={() => handleColorClick("#e0f7cc")}
            >
              <p className="colorName">Pear Green Light</p>
              <p className="colorCode">#e0f7cc</p>
            </div>
            <div
              className="colorSwitch leaveGreen light"
              onClick={() => handleColorClick("#80d5b3")}
            >
              <p className="colorName">Emerald Green Light</p>
              <p className="colorCode">#80d5b3</p>
            </div>
          </div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch redOrange"
              onClick={() => handleColorClick("#fe5000")}
            >
              <p className="colorName">Red Orange</p>
              <p className="colorCode">#fe5000</p>
            </div>
            <div
              className="colorSwitch yellowOrange"
              onClick={() => handleColorClick("#ffaa00")}
            >
              <p className="colorName">Yellow Orange</p>
              <p className="colorCode">#ffaa00</p>
            </div>
            <div
              className="colorSwitch BeachBrown txtColorBlack"
              onClick={() => handleColorClick("#f4eec7")}
            >
              <p className="colorName">Beach Brown</p>
              <p className="colorCode">#f4eec7</p>
            </div>
            <div
              className="colorSwitch LemonGreen txtColorBlack"
              onClick={() => handleColorClick("#ccda46")}
            >
              <p className="colorName">Lemon Green</p>
              <p className="colorCode">#ccda46</p>
            </div>
            <div
              className="colorSwitch PearGreen txtColorBlack"
              onClick={() => handleColorClick("#76bc21")}
            >
              <p className="colorName">Pear Green</p>
              <p className="colorCode">#76bc21</p>
            </div>
            <div
              className="colorSwitch leaveGreen"
              onClick={() => handleColorClick("#006837")}
            >
              <p className="colorName">Emerald Green</p>
              <p className="colorCode">#006837</p>
            </div>
          </div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch redOrange dark"
              onClick={() => handleColorClick("#b33600")}
            >
              <p className="colorName">Red Orange Dark</p>
              <p className="colorCode">#b33600</p>
            </div>
            <div
              className="colorSwitch yellowOrange dark"
              onClick={() => handleColorClick("#995f00")}
            >
              <p className="colorName">Yellow Orange Dark</p>
              <p className="colorCode">#995f00</p>
            </div>
            <div
              className="colorSwitch BeachBrown dark txtColorBlack"
              onClick={() => handleColorClick("#b0a184")}
            >
              <p className="colorName">Beach Brown Dark</p>
              <p className="colorCode">#b0a184</p>
            </div>
            <div
              className="colorSwitch LemonGreen dark txtColorBlack"
              onClick={() => handleColorClick("#80892e")}
            >
              <p className="colorName">Lemon Green Dark</p>
              <p className="colorCode">#80892e</p>
            </div>
            <div
              className="colorSwitch PearGreen dark txtColorBlack"
              onClick={() => handleColorClick("#4a7516")}
            >
              <p className="colorName">Pear Green Dark</p>
              <p className="colorCode">#4a7516</p>
            </div>
            <div
              className="colorSwitch leaveGreen dark"
              onClick={() => handleColorClick("#004029")}
            >
              <p className="colorName">Emerald Green Dark</p>
              <p className="colorCode">#004029</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>
              Interface Colours<span className="titlesub">System Colours</span>
            </h4>
          </div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch blackGray"
              onClick={() => handleColorClick("#011627")}
            >
              <p className="colorName">Black Gray</p>
              <p className="colorCode">#011627</p>
            </div>
            <div
              className="colorSwitch midnightGray"
              onClick={() => handleColorClick("#38455d")}
            >
              <p className="colorName">Midnight Gray</p>
              <p className="colorCode">#38455d</p>
            </div>
            <div
              className="colorSwitch steelGray"
              onClick={() => handleColorClick("#64728c")}
            >
              <p className="colorName">Steel Gray</p>
              <p className="colorCode">#64728c</p>
            </div>
            <div
              className="colorSwitch spaceGray"
              onClick={() => handleColorClick("#929baa")}
            >
              <p className="colorName">Space Gray</p>
              <p className="colorCode">#929baa</p>
            </div>
            <div
              className="colorSwitch pastelGray txtColorGray"
              onClick={() => handleColorClick("#cfd3de")}
            >
              <p className="colorName">Pastel Gray</p>
              <p className="colorCode">#cfd3de</p>
            </div>
            <div
              className="colorSwitch moonLight txtColorGray"
              onClick={() => handleColorClick("#e8eaef")}
            >
              <p className="colorName">Moon Light</p>
              <p className="colorCode">#e8eaef</p>
            </div>
          </div>
          <div className="rowGap-5"></div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch lightGray txtColorGray"
              onClick={() => handleColorClick("#f1f2f5")}
            >
              <p className="colorName">Light Gray</p>
              <p className="colorCode">#f1f2f5</p>
            </div>
            <div
              className="colorSwitch pastelWhite txtColorGray"
              onClick={() => handleColorClick("#f6f5fb")}
            >
              <p className="colorName">Pastel White</p>
              <p className="colorCode">#f6f5fb</p>
            </div>
            <div
              className="colorSwitch whiteShadow txtColorGray"
              onClick={() => handleColorClick("#fafafc")}
            >
              <p className="colorName">White Shadow</p>
              <p className="colorCode">#fafafc</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>Feedback Colours</h4>
          </div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch f-Blue"
              onClick={() => handleColorClick("#1e6ceb")}
            >
              <p className="colorName">Feedback Blue</p>
              <p className="colorCode">#1e6ceb</p>
            </div>
            <div
              className="colorSwitch f-Red"
              onClick={() => handleColorClick("#eb0910")}
            >
              <p className="colorName">Feedback Red</p>
              <p className="colorCode">#eb0910</p>
            </div>
            <div
              className="colorSwitch f-Yellow"
              onClick={() => handleColorClick("#ffa62f")}
            >
              <p className="colorName">Feedback Yellow</p>
              <p className="colorCode">#ffa62f</p>
            </div>
            <div
              className="colorSwitch f-Green"
              onClick={() => handleColorClick("#34bc40")}
            >
              <p className="colorName">Feedback Green</p>
              <p className="colorCode">#34bc40</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>Gradient Colours</h4>
          </div>
          <div className="colorSwitchrow">
            <div
              className="gradientSwitch gradient-orange"
              onClick={() =>
                handleColorClick("linear-gradient(45deg, #fe5000, #ffb399)")
              }
            >
              <p className="colorName">Sunset Gradient</p>
            </div>
            <div
              className="gradientSwitch gradient-OrnageYellow"
              onClick={() =>
                handleColorClick("linear-gradient(45deg, #ff7b1d, #ffd380)")
              }
            >
              <p className="colorName">Sunrise Gradient</p>
            </div>
            <div
              className="gradientSwitch gradient-yellow"
              onClick={() =>
                handleColorClick("linear-gradient(45deg, #ccda46, #f0f2a3)")
              }
            >
              <p className="colorName">Lemon Zest Gradient</p>
            </div>
            <div
              className="gradientSwitch gradient-green"
              onClick={() =>
                handleColorClick("linear-gradient(45deg, #76bc21, #bbf299)")
              }
            >
              <p className="colorName">Grassland Gradient</p>
            </div>
            <div
              className="gradientSwitch gradient-darkgreen"
              onClick={() =>
                handleColorClick("linear-gradient(45deg, #006837, #80d5b3)")
              }
            >
              <p className="colorName">Forest Canopy Gradient</p>
            </div>
          </div>

          <div className="lableRow">
            <h4>
              Accessible Colours<span className="titlesub">(AA)</span>
            </h4>
          </div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch a-primaryOrange"
              onClick={() => handleColorClick("#d65b04")}
            >
              <p className="colorName">Rusty Orange</p>
              <p className="colorCode">#d65b04</p>
            </div>
            <div
              className="colorSwitch a-primaryGreen"
              onClick={() => handleColorClick("#114022")}
            >
              <p className="colorName">Forest Green</p>
              <p className="colorCode">#114022</p>
            </div>
          </div>
          <div className="rowGap-5"></div>
          <div className="colorSwitchrow">
            <div
              className="colorSwitch a-BurntOrange"
              onClick={() => handleColorClick("#ca4d00")}
            >
              <p className="colorName">Burnt Orange</p>
              <p className="colorCode">#ca4d00</p>
            </div>
            <div
              className="colorSwitch a-yellowOrange"
              onClick={() => handleColorClick("#cb8e16")}
            >
              <p className="colorName">Golden Yellow</p>
              <p className="colorCode">#cb8e16</p>
            </div>
            <div
              className="colorSwitch a-BeachBrown"
              onClick={() => handleColorClick("#706d5c")}
            >
              <p className="colorName">Sand Storm</p>
              <p className="colorCode">#706d5c</p>
            </div>
            <div
              className="colorSwitch a-PearGreen"
              onClick={() => handleColorClick("#46643b")}
            >
              <p className="colorName">Dull Green</p>
              <p className="colorCode">#46643b</p>
            </div>
            <div
              className="colorSwitch a-black"
              onClick={() => handleColorClick("#000000")}
            >
              <p className="colorName">Just Black</p>
              <p className="colorCode">#000000</p>
            </div>
          </div>
          <div className="lableRow">
            <p>
              We evaluate your color combination using the WCAG 2.0 guidelines
              for contrast accessibility. for make AA color profile use this
              link https://accessible-colors.com/
            </p>
          </div>
          <div className="lableRow">
            <h4>
              Chart Colours
              <span className="titlesub">
                Color Use for Charts and Widgets{" "}
              </span>
            </h4>
          </div>
          <div className="chatSwitchwrap">
            <div className="colorSwitchrow">
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#FFEAF4")}
              >
                <p className="colorName">Red 1</p>
                <p className="colorCode">#FFEAF4</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#FFD5EA")}
              >
                <p className="colorName">Red 2</p>
                <p className="colorCode">#FFD5EA</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#FFB2D2")}
              >
                <p className="colorName">Red 3</p>
                <p className="colorCode">#FFB2D2</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#FF8CB2")}
              >
                <p className="colorName">Red 4</p>
                <p className="colorCode">#FF8CB2</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#FF5C77")}
              >
                <p className="colorName">Red 5</p>
                <p className="colorCode">#FF5C77</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#EE3939")}
              >
                <p className="colorName">Red 6</p>
                <p className="colorCode">#EE3939</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#D20A0A")}
              >
                <p className="colorName">Red 7</p>
                <p className="colorCode">#D20A0A</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#AA0808")}
              >
                <p className="colorName">Red 8</p>
                <p className="colorCode">#AA0808</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#840606")}
              >
                <p className="colorName">Red 9</p>
                <p className="colorCode">#840606</p>
              </div>
              <div
                className="colorSwitch red"
                onClick={() => handleColorClick("#5A0404")}
              >
                <p className="colorName">Red 10</p>
                <p className="colorCode">#5A0404</p>
              </div>
            </div>
            <div className="colorSwitchrow">
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#FFDED9")}
              >
                <p className="colorName">Orange 1</p>
                <p className="colorCode">#FFDED9</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#FFC8B8")}
              >
                <p className="colorName">Orange 2</p>
                <p className="colorCode">#FFC8B8</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#FFAD99")}
              >
                <p className="colorName">Orange 3</p>
                <p className="colorCode">#FFAD99</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#FF9277")}
              >
                <p className="colorName">Orange 4</p>
                <p className="colorCode">#FF9277</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#FF784E")}
              >
                <p className="colorName">Orange 5</p>
                <p className="colorCode">#FF784E</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#FF4800")}
              >
                <p className="colorName">Orange 6</p>
                <p className="colorCode">#FF4800</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#CC3B00")}
              >
                <p className="colorName">Orange 7</p>
                <p className="colorCode">#CC3B00</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#993000")}
              >
                <p className="colorName">Orange 8</p>
                <p className="colorCode">#993000</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#662200")}
              >
                <p className="colorName">Orange 9</p>
                <p className="colorCode">#662200</p>
              </div>
              <div
                className="colorSwitch orange"
                onClick={() => handleColorClick("#331100")}
              >
                <p className="colorName">Orange 10</p>
                <p className="colorCode">#331100</p>
              </div>
            </div>

            <div className="colorSwitchrow">
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#fff8d6")}
              >
                <p className="colorName">Mango 1</p>
                <p className="colorCode">#fff8d6</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#fff3b8")}
              >
                <p className="colorName">Mango 2</p>
                <p className="colorCode">#fff3b8</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#ffdf72")}
              >
                <p className="colorName">Mango 3</p>
                <p className="colorCode">#ffdf72</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#ffc933")}
              >
                <p className="colorName">Mango 4</p>
                <p className="colorCode">#ffc933</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#ffb300")}
              >
                <p className="colorName">Mango 5</p>
                <p className="colorCode">#ffb300</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#e76500")}
              >
                <p className="colorName">Mango 6</p>
                <p className="colorCode">#e76500</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#c35500")}
              >
                <p className="colorName">Mango 7</p>
                <p className="colorCode">#c35500</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#a93e00")}
              >
                <p className="colorName">Mango 8</p>
                <p className="colorCode">#a93e00</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#8d2a00")}
              >
                <p className="colorName">Mango 9</p>
                <p className="colorCode">#8d2a00</p>
              </div>
              <div
                className="colorSwitch mango"
                onClick={() => handleColorClick("#6d1900")}
              >
                <p className="colorName">Mango 10</p>
                <p className="colorCode">#6d1900</p>
              </div>
            </div>
            <div className="colorSwitchrow">
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#F5FAE5")}
              >
                <p className="colorName">Green 1</p>
                <p className="colorCode">#F5FAE5</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#EBF5CB")}
              >
                <p className="colorName">Green 2</p>
                <p className="colorCode">#EBF5CB</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#BDE986")}
              >
                <p className="colorName">Green 3</p>
                <p className="colorCode">#BDE986</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#97DD40")}
              >
                <p className="colorName">Green 4</p>
                <p className="colorCode">#97DD40</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#5DC122")}
              >
                <p className="colorName">Green 5</p>
                <p className="colorCode">#5DC122</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#36A41D")}
              >
                <p className="colorName">Green 6</p>
                <p className="colorCode">#36A41D</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#188918")}
              >
                <p className="colorName">Green 7</p>
                <p className="colorCode">#188918</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#256F3A")}
              >
                <p className="colorName">Green 8</p>
                <p className="colorCode">#256F3A</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#1E592F")}
              >
                <p className="colorName">Green 9</p>
                <p className="colorCode">#1E592F</p>
              </div>
              <div
                className="colorSwitch green"
                onClick={() => handleColorClick("#164323")}
              >
                <p className="colorName">Green 10</p>
                <p className="colorCode">#164323</p>
              </div>
            </div>

            <div className="colorSwitchrow">
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#eaffea")}
              >
                <p className="colorName">lime 1</p>
                <p className="colorCode">#eaffea</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#ccffcc")}
              >
                <p className="colorName">lime 2</p>
                <p className="colorCode">#ccffcc</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#99ff99")}
              >
                <p className="colorName">lime 3</p>
                <p className="colorCode">#99ff99</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#66ff66")}
              >
                <p className="colorName">lime 4</p>
                <p className="colorCode">#66ff66</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#33ff33")}
              >
                <p className="colorName">lime 5</p>
                <p className="colorCode">#33ff33</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#00ff00")}
              >
                <p className="colorName">lime 6</p>
                <p className="colorCode">#00ff00</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#00cc00")}
              >
                <p className="colorName">lime 7</p>
                <p className="colorCode">#00cc00</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#009900")}
              >
                <p className="colorName">lime 8</p>
                <p className="colorCode">#009900</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#006600")}
              >
                <p className="colorName">lime 9</p>
                <p className="colorCode">#006600</p>
              </div>
              <div
                className="colorSwitch lime"
                onClick={() => handleColorClick("#003300")}
              >
                <p className="colorName">lime 10</p>
                <p className="colorCode">#003300</p>
              </div>
            </div>

            <div className="colorSwitchrow">
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#dafdf5")}
              >
                <p className="colorName">Teal 1</p>
                <p className="colorCode">#dafdf5</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#c2fcee")}
              >
                <p className="colorName">Teal 2</p>
                <p className="colorCode">#c2fcee</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#64edd2")}
              >
                <p className="colorName">Teal 3</p>
                <p className="colorCode">#64edd2</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#2ce0bf")}
              >
                <p className="colorName">Teal 4</p>
                <p className="colorCode">#2ce0bf</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#00ceac")}
              >
                <p className="colorName">Teal 5</p>
                <p className="colorCode">#00ceac</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#049f9a")}
              >
                <p className="colorName">Teal 6</p>
                <p className="colorCode">#049f9a</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#07838f")}
              >
                <p className="colorName">Teal 7</p>
                <p className="colorCode">#07838f</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#046c7a")}
              >
                <p className="colorName">Teal 8</p>
                <p className="colorCode">#046c7a</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#035663")}
              >
                <p className="colorName">Teal 9</p>
                <p className="colorCode">#035663</p>
              </div>
              <div
                className="colorSwitch teal"
                onClick={() => handleColorClick("#02414c")}
              >
                <p className="colorName">Teal 10</p>
                <p className="colorCode">#02414c</p>
              </div>
            </div>

            <div className="colorSwitchrow">
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#e0f7fa")}
              >
                <p className="colorName">Blue 1</p>
                <p className="colorCode">#e0f7fa</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#b3e5fc")}
              >
                <p className="colorName">Blue 2</p>
                <p className="colorCode">#b3e5fc</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#81d4fa")}
              >
                <p className="colorName">Blue 3</p>
                <p className="colorCode">#81d4fa</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#4fc3f7")}
              >
                <p className="colorName">Blue 4</p>
                <p className="colorCode">#4fc3f7</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#29b6f6")}
              >
                <p className="colorName">Blue 5</p>
                <p className="colorCode">#29b6f6</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#03a9f4")}
              >
                <p className="colorName">Blue 6</p>
                <p className="colorCode">#03a9f4</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#0288d1")}
              >
                <p className="colorName">Blue 7</p>
                <p className="colorCode">#0288d1</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#0277bd")}
              >
                <p className="colorName">Blue 8</p>
                <p className="colorCode">#0277bd</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#01579b")}
              >
                <p className="colorName">Blue 9</p>
                <p className="colorCode">#01579b</p>
              </div>
              <div
                className="colorSwitch blue"
                onClick={() => handleColorClick("#004d8c")}
              >
                <p className="colorName">Blue 10</p>
                <p className="colorCode">#004d8c</p>
              </div>
            </div>

            <div className="colorSwitchrow">
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#F1ECFF")}
              >
                <p className="colorName">Indigo 1</p>
                <p className="colorCode">#F1ECFF</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#E2D8FF")}
              >
                <p className="colorName">Indigo 2</p>
                <p className="colorCode">#E2D8FF</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#D3B6FF")}
              >
                <p className="colorName">Indigo 3</p>
                <p className="colorCode">#D3B6FF</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#B894FF")}
              >
                <p className="colorName">Indigo 4</p>
                <p className="colorCode">#B894FF</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#9B76FF")}
              >
                <p className="colorName">Indigo 5</p>
                <p className="colorCode">#9B76FF</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#7858FF")}
              >
                <p className="colorName">Indigo 6</p>
                <p className="colorCode">#7858FF</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#5D36FF")}
              >
                <p className="colorName">Indigo 7</p>
                <p className="colorCode">#5D36FF</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#470CED")}
              >
                <p className="colorName">Indigo 8</p>
                <p className="colorCode">#470CED</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#2C13AD")}
              >
                <p className="colorName">Indigo 9</p>
                <p className="colorCode">#2C13AD</p>
              </div>
              <div
                className="colorSwitch indigo"
                onClick={() => handleColorClick("#1C0C6E")}
              >
                <p className="colorName">Indigo 10</p>
                <p className="colorCode">#1C0C6E</p>
              </div>
            </div>

            <div className="colorSwitchrow">
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#FFF0FA")}
              >
                <p className="colorName">Pink 1</p>
                <p className="colorCode">#FFF0FA</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#FFDCF3")}
              >
                <p className="colorName">Pink 2</p>
                <p className="colorCode">#FFDCF3</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#FFAFED")}
              >
                <p className="colorName">Pink 3</p>
                <p className="colorCode">#FFAFED</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#FF8AF0")}
              >
                <p className="colorName">Pink 4</p>
                <p className="colorCode">#FF8AF0</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#F65AF2")}
              >
                <p className="colorName">Pink 5</p>
                <p className="colorCode">#F65AF2</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#F31DED")}
              >
                <p className="colorName">Pink 6</p>
                <p className="colorCode">#F31DED</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#CC00DC")}
              >
                <p className="colorName">Pink 7</p>
                <p className="colorCode">#CC00DC</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#A100C2")}
              >
                <p className="colorName">Pink 8</p>
                <p className="colorCode">#A100C2</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#7800A4")}
              >
                <p className="colorName">Pink 9</p>
                <p className="colorCode">#7800A4</p>
              </div>
              <div
                className="colorSwitch pink"
                onClick={() => handleColorClick("#510080")}
              >
                <p className="colorName">Pink 10</p>
                <p className="colorCode">#510080</p>
              </div>
            </div>

            <div className="colorSwitchrow">
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#fde0dc")}
              >
                <p className="colorName">Raspberry 1</p>
                <p className="colorCode">#fde0dc</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#f9bdbb")}
              >
                <p className="colorName">Raspberry 2</p>
                <p className="colorCode">#f9bdbb</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#f69988")}
              >
                <p className="colorName">Raspberry 3</p>
                <p className="colorCode">#f69988</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#f36c60")}
              >
                <p className="colorName">Raspberry 4</p>
                <p className="colorCode">#f36c60</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#e84e40")}
              >
                <p className="colorName">Raspberry 5</p>
                <p className="colorCode">#e84e40</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#e51c23")}
              >
                <p className="colorName">Raspberry 6</p>
                <p className="colorCode">#e51c23</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#dd191d")}
              >
                <p className="colorName">Raspberry 7</p>
                <p className="colorCode">#dd191d</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#d01716")}
              >
                <p className="colorName">Raspberry 8</p>
                <p className="colorCode">#d01716</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#c41411")}
              >
                <p className="colorName">Raspberry 9</p>
                <p className="colorCode">#c41411</p>
              </div>
              <div
                className="colorSwitch raspberry"
                onClick={() => handleColorClick("#b0120a")}
              >
                <p className="colorName">Raspberry 10</p>
                <p className="colorCode">#b0120a</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ColorPage;
