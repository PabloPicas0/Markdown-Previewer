import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const editor = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-belt">
        <div>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span>Text Editor</span>
        </div>
        <button type="button" className="btn btn-outline-dark">
          <FontAwesomeIcon icon={faMaximize} />
        </button>
      </div>
      <textarea className="text-area" />
    </div>
  );
};

export default editor;
