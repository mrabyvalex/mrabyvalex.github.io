import React from "react";
import Header from "../Header/Header";
import "./App.scss";
import background from "../../assets/bg_img_v1.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
    </div>
  );
}

export default App;
