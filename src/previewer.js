import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const previewer = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span>Previewer</span>
        </div>
        <button type="button">
          <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
      </div>
      <div className="text-preview shadow bg-white">
        <p>jknjdnas</p>
      </div>
    </div>
  );
};

export default previewer;
