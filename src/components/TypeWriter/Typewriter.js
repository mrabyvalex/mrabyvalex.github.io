import React, { useEffect } from "react";
import * as TW from "typewriter-effect/dist/core";
import "./Typewriter.scss"

const Typewriter = () => {
  useEffect(() => {
    var app = document.getElementById("typewriter");

    var customNodeCreator = function (character) {
      return document.createTextNode(character);
    };

    var typewriter = new TW(app, {
      loop: false,
      delay: 75,
      onCreateTextNode: customNodeCreator,
    });

    typewriter
      .typeString("A simple yet powerful native javascript")
      .pauseFor(300)
      .start();
  }, []);
  return <div id="typewriter"></div>;
};

export default Typewriter;
