import React from "react";
import Header from "../Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="header">Test Header</h1>
      <h2>test text {window.innerWidth}</h2>
    </div>
  );
}

export default App;
