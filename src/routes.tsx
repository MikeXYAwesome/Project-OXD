import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import DesignPage from "./pages/designpage";
import ComPage from "./pages/componetspage";
import ComPage2 from "./pages/component";
import QaPage from "./pages/qaguidepage";
import OimPage from "./pages/oimpage";
import UxPage from "./pages/uxpage";
import GuidePage from "./pages/guidepage";
import MadeByPage from "./pages/madebypage";
import IconPage from "./pages/design/iconpage";
import ColorPage from "./pages/design/colorpage";
import TypoPage from "./pages/design/typopage";
import WidgetsPage from "./pages/widgetspage";
import ExamPage from "./pages/exampage";
import BlogPage from "./pages/oxdblogpage";
import ErrorPage from "./pages/errorpage";
import CardGrid from "./components/cardgrid";
import SpacingPage from "./pages/design/spacingpage";
import FormDesignPage from "./pages/design/formdesignpage";
import DesignThinkPage from "./pages/designthinkingpage";
import ControlPanel from "./pages/admin/controlpanel";
import OxdComError from "./pages/oxdcoponets/comerror";

// Component imports based on SidebarData
import OxdButtons from "./pages/oxdcoponets/oxdbuttons";
import OxdDropDown from "./pages/oxdcoponets/oxddropdowns";
import OxdTextBox from "./pages/oxdcoponets/oxdtextbox";
import OxdRadio from "./pages/oxdcoponets/oxdradio";
import OxdSwitch from "./pages/oxdcoponets/oxdswitch";
import OxdAlerts from "./pages/oxdcoponets/oxdalerts";
import OxdAutoComplete from "./pages/oxdcoponets/oxdautocomplete";
import OxdChoshmark from "./pages/oxdcoponets/oxdcoashmark";
import OxdTooltips from "./pages/oxdcoponets/oxdtooltips";
import OxdCommnetBox from "./pages/oxdcoponets/oxdcommentbox";
import OxdTogglePils from "./pages/oxdcoponets/oxdtogglepils";
import OxdDatePicker from "./pages/oxdcoponets/oxddatepicker";
import OxdInfinityDropdown from "./pages/oxdcoponets/oxdinfinitydropdown";
import OxdLables from "./pages/oxdcoponets/oxdlables";
import OxdLightBox from "./pages/oxdcoponets/oxdlightbox";
import OxdPagination from "./pages/oxdcoponets/oxdpagination";
import OxdPluseMinus from "./pages/oxdcoponets/oxdplusminus";
import OxdProgresswheel from "./pages/oxdcoponets/oxdprogresswell";
import OxdProgressbar from "./pages/oxdcoponets/oxdprogressbar";
import OxdCheckBox from "./pages/oxdcoponets/oxdcheckbox";
import OxdTabs from "./pages/oxdcoponets/oxdtabs";
import OxdStatusLable from "./pages/oxdcoponets/oxdstatuslable";
import OxdSlider from "./pages/oxdcoponets/oxdslider";
import OxdNestedDropdown from "./pages/oxdcoponets/oxdnesteddropdown";
import OxdMultiselector from "./pages/oxdcoponets/oxdmultiselector";
import OxdProfileCircle from "./pages/oxdcoponets/oxdprofilecircle";
import OxdTextaria from "./pages/oxdcoponets/oxdtextaria";
import OxdListbox from "./pages/oxdcoponets/oxdlistbox";
import OxdSerchBox from "./pages/oxdcoponets/oxdsearchbox";
import OxdScrollBars from "./pages/oxdcoponets/oxdscrollbars";
import OxdTimePicker from "./pages/oxdcoponets/oxdtimepicker";
import OxdUploadBox from "./pages/oxdcoponets/oxduploadbox";
import OxdRadioPills from "./pages/oxdcoponets/oxdradiopills";
import OxdSegments from "./pages/oxdcoponets/oxdsegments";
import OxdListDropdown from "./pages/oxdcoponets/oxdlistdropdown";
import TestCom from "./pages/oxdcoponets/testcom";
import ShapePage from "./pages/design/shapepage";

const componentMapping: { [key: string]: React.ComponentType<any> } = {
  oxdbuttons: OxdButtons,
  oxddropdowns: OxdDropDown,
  oxdtextbox: OxdTextBox,
  oxdradio: OxdRadio,
  oxdswitch: OxdSwitch,
  oxdalerts: OxdAlerts,
  oxdautocomplete: OxdAutoComplete,
  oxdcoashmark: OxdChoshmark,
  oxdtooltips: OxdTooltips,
  oxdcommentbox: OxdCommnetBox,
  oxdtogglepils: OxdTogglePils,
  oxddatepicker: OxdDatePicker,
  oxdinfinitydropdown: OxdInfinityDropdown,
  oxdlables: OxdLables,
  oxdlightbox: OxdLightBox,
  oxdpagination: OxdPagination,
  oxdplusminus: OxdPluseMinus,
  oxdprogresswell: OxdProgresswheel,
  oxdprogressbar: OxdProgressbar,
  oxdcheckbox: OxdCheckBox,
  oxdtabs: OxdTabs,
  oxdstatuslable: OxdStatusLable,
  oxdslider: OxdSlider,
  oxdnesteddropdown: OxdNestedDropdown,
  oxdmultiselector: OxdMultiselector,
  oxdprofilecircle: OxdProfileCircle,
  oxdtextaria: OxdTextaria,
  oxdlistbox: OxdListbox,
  oxdsearchbox: OxdSerchBox,
  oxdscrollbars: OxdScrollBars,
  oxdtimepicker: OxdTimePicker,
  oxduploadbox: OxdUploadBox,
  oxdradiopills: OxdRadioPills,
  oxdsegments: OxdSegments,
  oxdlistdropdown: OxdListDropdown,
  testcom: TestCom,
  comerror: OxdComError,
};

function App() {
  const [sidebarData, setSidebarData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/sidenavdata.json")
      .then((response) => response.json())
      .then((data) => setSidebarData(data))
      .catch((error) => console.error("Error fetching sidebar data:", error));
  }, []);

  return (
    <Router>
      <div className="topNaveBar">
        <div className="logobox"></div>
        <div className="navwrap">
          <nav>
            <NavLink
              to="/"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Explore
            </NavLink>
            <NavLink
              to="/designpage"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Design
            </NavLink>
            <NavLink
              to="/component"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Components
            </NavLink>
            <NavLink
              to="/guidepage"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Guide
            </NavLink>
          </nav>
        </div>
        <div className="toplinkwrap">
          <div className="comlogo"></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/designpage" element={<DesignPage />} />
        <Route path="/guidepage" element={<GuidePage />} />
        <Route path="/colorpage" element={<ColorPage />} />
        <Route path="/typopage" element={<TypoPage />} />
        <Route path="/shapepage" element={<ShapePage />} />
        <Route path="/iconpage" element={<IconPage />} />
        <Route path="/spacingpage" element={<SpacingPage />} />
        <Route path="/formdesignpage" element={<FormDesignPage />} />
        <Route path="/qaguidepage" element={<QaPage />} />
        <Route path="/oimpage" element={<OimPage />} />
        <Route path="/uxpage" element={<UxPage />} />
        <Route path="/designthinkingpage" element={<DesignThinkPage />} />
        <Route path="/madebypage" element={<MadeByPage />} />
        <Route path="/widgetspage" element={<WidgetsPage />} />
        <Route path="/exampage" element={<ExamPage />} />
        <Route path="/oxdblogpage" element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/controlpanel" element={<ControlPanel />} />
        <Route path="/componetspage" element={<ComPage />} />
        <Route path="/component" element={<ComPage2 />}>
          <Route path="/component" element={<CardGrid />} />
          {sidebarData.map((item) => {
            const Component = componentMapping[item.link];
            if (!Component) {
              console.error(`Component not found for key: ${item.link}`);
              return null;
            }
            return (
              <Route
                key={item.id}
                path={`/component/${item.urlPath}`}
                element={<Component dataPath={item.data} />}
              />
            );
          })}
          <Route path="*" element={<OxdComError />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
