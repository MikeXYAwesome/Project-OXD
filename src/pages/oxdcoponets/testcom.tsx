import { useState, useEffect } from "react";
// import SvgOXDCorrect from "../../assets/svgs/oxd-correct.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import Modal from "../../components/modal";
import SkeletonLoader from "../../components/SkeletonLoader";
import "../../css/componetspage.css";
import "../../css/common.css";

interface Variant {
  title: string;
  imageSrc: string;
  codeSnippet: string;
}

interface SpacingVariant {
  title: string;
  imageSrc: string;
}

interface ComponentsData {
  title: string;
  componentName: string;
  variantsTitle: string;
  variants: Variant[];
  cssCodePath: string;
  stylesTitle: string;
  themeSupportTitle: string;
  themeSupportText: string;
  themeSupportImageSrc: string;
  themeVariants: Variant[];
  behaviorsTitle: string;
  behaviorsList: string[];
  spacingTitle: string;
  spacingVariants: SpacingVariant[];
}

interface TestComProps {
  dataPath: string;
}

function TestCom({ dataPath }: TestComProps) {
  const [data, setData] = useState<ComponentsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentSnippet, setCurrentSnippet] = useState("");

  useEffect(() => {
    console.log(`Fetching data from: ${dataPath}`);
    fetch(dataPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log("Fetched data:", jsonData);
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, [dataPath]);

  const fetchCssCode = (path: string) => {
    fetch(path)
      .then((response) => response.text())
      .then((cssCode) => {
        setCurrentSnippet(cssCode);
        setModalVisible(true);
      })
      .catch((error) => {
        console.error("Error fetching CSS code:", error);
        setError(error.message);
      });
  };

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  if (!data) {
    return <SkeletonLoader />;
  }

  const handleCodeButtonClick = (codeSnippet: string) => {
    console.log("Code button clicked, snippet:", codeSnippet);
    setCurrentSnippet(codeSnippet);
    setModalVisible(true);
  };

  const handleCssButtonClick = () => {
    console.log("CSS button clicked");
    if (data.cssCodePath) {
      fetchCssCode(data.cssCodePath);
    }
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setModalVisible(false);
  };

  return (
    <div className="ComPageWarp">
      <div className="ComTitleRow">
        <h4>{data.title}</h4>
        <div className="comName">
          <code>{`</${data.componentName}>`}</code>
        </div>
      </div>
      <div className="ComTitleRow bodernone">
        <h4>{data.variantsTitle}</h4>
      </div>
      <div className="variantsWarp">
        {data.variants.map((variant, index) => (
          <div className="VBox" key={index}>
            <p className="Vtitle">{variant.title}</p>
            <img src={variant.imageSrc} className="Vimg" alt={variant.title} />
            <button
              className="codebt"
              onClick={() => handleCodeButtonClick(variant.codeSnippet)}
            >
              <img src={SvgCodeIcon} alt="Code Icon" />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
        ))}
      </div>
      <div className="ComTitleRow">
        <h4>{data.stylesTitle}</h4>
        <div>
          <button
            className="getCodeButton"
            id="cssModal"
            onClick={handleCssButtonClick}
          >
            Get The Css
          </button>
        </div>
      </div>
      <div className="ComTitleRow bodernone">
        <h4>{data.themeSupportTitle}</h4>
        <div>
          <div className="CorrctTab">
            {data.themeSupportText}
            <div className="IconSizeM">
              <img src={data.themeSupportImageSrc} alt="theme-Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="variantsWarp">
        {data.themeVariants.map((variant, index) => (
          <div className="VBox" key={index}>
            <p className="Vtitle">{variant.title}</p>
            <img src={variant.imageSrc} className="Vimg" alt={variant.title} />
            <button
              className="codebt"
              onClick={() => handleCodeButtonClick(variant.codeSnippet)}
            >
              <img src={SvgCodeIcon} alt="Code Icon" />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
        ))}
      </div>
      <div className="ComTitleRow ">
        <h4>{data.behaviorsTitle}</h4>
      </div>
      <div className="listViewWrap">
        <ul>
          {data.behaviorsList.map((behavior, index) => (
            <li key={index}>{behavior}</li>
          ))}
        </ul>
      </div>
      <div className="ComTitleRow ">
        <h4>{data.spacingTitle}</h4>
      </div>
      <div className="variantsWarp">
        {data.spacingVariants.map((variant, index) => (
          <div className="VBox" key={index}>
            <p className="Vtitle">{variant.title}</p>
            <img src={variant.imageSrc} className="Vimg" alt={variant.title} />
          </div>
        ))}
      </div>
      <Modal
        isVisible={isModalVisible}
        content={currentSnippet}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default TestCom;
