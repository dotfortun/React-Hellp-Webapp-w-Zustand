import React from "react";
import Debug from "../component/debug";

import useStore from "../store/zustand";

const DebugMenu = (props) => {
  return (
    <div className="debug-menu">
      <Debug
        object={ useStore() }
       />
    </div>
  );
};

export default DebugMenu;
