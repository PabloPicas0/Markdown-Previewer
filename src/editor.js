import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const editor = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span>text edit</span>
        </div>
        <button type="button">
          <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
      </div>
      <textarea className="text-area" />
    </div>
  );
};

export default editor;
