import React from "react";
import Header from "../Header/Header";
import "./App.scss";
import background from "../../assets/bg_img_v1.png";
import Typewriter from "../TypeWriter/Typewriter";
import Parallax from "../Parallax/Parallax";

function App() {
  return (
    <div
      className="App"
    >
       <Header />
      <Typewriter />
      <Parallax />
    </div>
  );
}

export default App;
