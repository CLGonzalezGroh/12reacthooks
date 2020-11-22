import React, { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.sass";

import ThemeContext from "./context/ThemeContext";
import themes from "./context/themes";

function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
