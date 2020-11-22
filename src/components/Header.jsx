import React, { useState, useContext } from "react";

import ThemeContext from "../context/ThemeContext";
import themes from "../context/themes";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    !darkMode ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <nav className={theme.headerClass}>
      <div className="container">
        <div className="navbar-brand">
          <h1 className="navbar-item title">ReactHooks</h1>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button
                className={theme.buttonClass}
                type="button"
                onClick={handleClick}
              >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
