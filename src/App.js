import React from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Characters />
    </div>
  );
}

export default App;
