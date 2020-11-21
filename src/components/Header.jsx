import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <div className="Header">
      <h1 className="title">ReactHooks</h1>
      <button className="button" type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
