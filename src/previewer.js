import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const previewer = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-belt">
        <div>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span>Previewer</span>
        </div>
        <button type="button" className="btn btn-outline-dark">
          <FontAwesomeIcon icon={faMaximize} />
        </button>
      </div>
      <div className="text-preview shadow p-2">
        <p>jknjdnas</p>
      </div>
    </div>
  );
};

export default previewer;
