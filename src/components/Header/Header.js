import React from "react";
import BasicSpeedDial from "./Dialler";

const Header = () => {
  return (
    <div style={{ position: "fixed", bottom: "50px", right: "20px" }}>
      <BasicSpeedDial />
    </div>
  );
};

export default Header;
