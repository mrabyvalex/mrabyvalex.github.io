import React from "react";
import Header from "../Header/Header";
import "./App.scss";
import background from "../../assets/bg_img_v1.png";
import Typewriter from "../TypeWriter/Typewriter";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <Typewriter />
    </div>
  );
}

export default App;
