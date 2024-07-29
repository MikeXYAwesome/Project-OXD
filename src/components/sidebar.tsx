import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../css/sidenav.css";

interface SidebarItem {
  id: number;
  title: string;
  link: string;
  imagepath?: string;
  data?: string;
  urlPath?: string;
  disp?: string;
}

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarData, setSidebarData] = useState<SidebarItem[]>([]);

  useEffect(() => {
    fetch("/data/sidenavdata.json")
      .then((response) => response.json())
      .then((data) => setSidebarData(data))
      .catch((error) => console.error("Error fetching sidebar data:", error));
  }, []);

  const filteredSidebarData = sidebarData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="SideNav">
        <h1 className="navTitle">Components</h1>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ComSearchInput"
        />
        <div className="topFade"></div>

        <ul className="list-group">
          {filteredSidebarData
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((val, key) => (
              <div key={key}>
                <NavLink
                  to={`/component/${val.urlPath}`}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#000",
                        }
                      : { color: "#011627" }
                  }
                >
                  <li>{val.title}</li>
                </NavLink>
              </div>
            ))}
        </ul>
        <div className="bottomFade"></div>
      </div>
    </>
  );
}

export default Sidebar;
