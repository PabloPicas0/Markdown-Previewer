import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

import { marked } from "marked";

const Previewer = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-belt">
        <div id="belt-label" className="ps-2">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span className="ms-1">Previewer</span>
        </div>
        <button type="button" className="btn btn-outline-dark" onClick={props.click}>
          <FontAwesomeIcon icon={faMaximize} />
        </button>
      </div>
      <div
        id="preview"
        style={{height: props.onlyPreview ? "" : "91vh"}}
        className="text-preview shadow p-2 overflow-auto"
        dangerouslySetInnerHTML={{ __html: marked.parse(props.input) }}></div>
    </div>
  );
};

export default Previewer;
