import { useState, useEffect } from "react";
import "../../css/iconpage.css";
import Footer from "../../components/footer";

interface IconData {
  id: number;
  iconName: string;
  iconpath: string;
}

function IconPage() {
  const [icons, setIcons] = useState<IconData[]>([]);

  useEffect(() => {
    fetch("img/icons/oxdicon-data.json")
      .then((response) => response.json())
      .then((data) => setIcons(data))
      .catch((error) => console.error("Error fetching icon data:", error));
  }, []);

  const handleDownload = (iconpath: string) => {
    const link = document.createElement("a");
    link.href = iconpath.startsWith("/") ? iconpath : `/${iconpath}`;
    link.download = iconpath.split("/").pop() || "icon.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="iconpageWrap">
        <h1 className="icontitle">Icon Library</h1>
        <div className="detailBox">
          <div className="iconwrap">
            <img src="/img/guideimg/iconwrap.png"></img>
          </div>
          <div>
            <p className="iconDescription">
              These icons have been designed following the OXD design method and
              are suitable for HRM domains. All icons are available in SVG
              format, supporting multiple sizes and colors for easy use and
              editing. When designing and displaying icons, ensure consistency
              in style and size to maintain visual harmony. Icons should be
              simple, clear, and easily recognizable, especially at small sizes.
              Use vector formats for scalability, and ensure high contrast with
              the background for visibility. Align icons optically for visual
              balance, and provide adequate spacing around icons. Use common
              sizes such as 16x16, 24x24, 32x32, and 48x48 pixels, adjusting
              slightly if needed for optical balance.
            </p>
            <div className="sizeGuide">
              <h2>Icon Size Guide</h2>
              <div className="sizeSamples">
                <div className="sizeSample">
                  <img
                    src="/img/icons/emp-user.svg"
                    alt="emp-user"
                    style={{ width: "14px", height: "14px" }}
                  />
                  <p>14x14</p>
                </div>
                <div className="sizeSample">
                  <img
                    src="/img/icons/emp-user.svg"
                    alt="emp-user"
                    style={{ width: "16px", height: "16px" }}
                  />
                  <p>16x16</p>
                </div>
                <div className="sizeSample">
                  <img
                    src="/img/icons/emp-user.svg"
                    alt="emp-user"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <p>24x24</p>
                </div>
                <div className="sizeSample">
                  <img
                    src="/img/icons/emp-user.svg"
                    alt="emp-user"
                    style={{ width: "48px", height: "48px" }}
                  />
                  <p>48x48</p>
                </div>
                <div className="sizeSample">
                  <img
                    src="/img/icons/emp-user.svg"
                    alt="emp-user"
                    style={{ width: "72px", height: "72px" }}
                  />
                  <p>72x72</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iconCardWrap">
          {icons.map((icon) => (
            <div className="iconCard" key={icon.id}>
              <img
                src={
                  icon.iconpath.startsWith("/")
                    ? icon.iconpath
                    : `/${icon.iconpath}`
                }
                alt={icon.iconName}
              />
              <p className="iconLabel">{icon.iconName}</p>
              <button
                onClick={() => handleDownload(icon.iconpath)}
                className="downloadbt"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default IconPage;
