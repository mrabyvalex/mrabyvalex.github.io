import React from "react";
import BasicSpeedDial from "./Dialler";

const Header = () => {
  return (
    <div style={{ position: "fixed", top: "0", right: "10px" }}>
      <BasicSpeedDial />
    </div>
  );
};

export default Header;
