import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <nav className="Header navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="navbar-item title">ReactHooks</h1>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button
                className="button is-primary"
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
