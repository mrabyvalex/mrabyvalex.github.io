import React, { useEffect } from "react";
import * as TW from "typewriter-effect/dist/core";
import "./Typewriter.scss"
import CONSTANTS from "../../constants";

const Typewriter = () => {
  useEffect(() => {
    var app = document.getElementById("typewriter");

    var customNodeCreator = function (character) {
      return document.createTextNode(character);
    };

    let typewriter = new TW(app, {
      loop: false,
      delay: 75,
      onCreateTextNode: customNodeCreator,
    });

    CONSTANTS["WEDDING"].TYPEWRITER_TEXT.forEach(item => {
      const str = typeof item ==='string' ? item: item.text;
      const delay = typeof item ==='object' && typeof item.delay !=='undefined'? item.delay: 2000
      typewriter = typewriter.typeString(str)
        .pauseFor(delay)
    })

    typewriter.start();
  }, []);
  return <div id="typewriter"></div>;
};

export default Typewriter;
