import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const previewer = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-belt">
        <div id="belt-label" className="ps-2">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span className="ms-1">Previewer</span>
        </div>
        <button type="button" className="btn btn-outline-dark">
          <FontAwesomeIcon icon={faMaximize} />
        </button>
      </div>
      <div className="text-preview shadow p-2 overflow-auto">
        <p>jknjdnas</p>
      </div>
    </div>
  );
};

export default previewer;
