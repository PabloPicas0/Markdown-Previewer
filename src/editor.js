import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const editor = () => {
  return (
    <div>
      <div>
        <div>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span>text edit</span>
        </div>
        <button type="button">
          <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
      </div>
      <textarea />
    </div>
  );
};

export default editor;
