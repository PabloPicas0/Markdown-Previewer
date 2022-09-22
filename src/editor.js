import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const editor = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-belt">
        <div id="belt-label" className="ps-2">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span className="ms-1">Text Editor</span>
        </div>
        <button type="button" className="btn btn-outline-dark">
          <FontAwesomeIcon icon={faMaximize} />
        </button>
      </div>
      <textarea className="text-area overflow-auto" />
    </div>
  );
};

export default editor;
