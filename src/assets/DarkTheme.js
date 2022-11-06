import React from "react";
import { useState } from "react";
const DarkTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <body className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="Container">
          {/* <span style={{ color: darkMode ? "grey" : "yellow" }}></span> */}
          <div className="switch-checkbox">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
              ></input>
              <span className="slider round"></span>
            </label>
          </div>
          {/* <span style={{ color: darkMode ? "#c96dfd" : "grey" }}></span> */}
        </div>
      </body>
      <div>
        <h1 className="darkorlight">Theme Mode</h1>
      </div>
    </>
  );
};

export default DarkTheme;
