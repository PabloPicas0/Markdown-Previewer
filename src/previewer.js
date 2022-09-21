import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const previewer = () => {
  return (
    <div>
      <div>
        <div>
            <FontAwesomeIcon icon={faFreeCodeCamp}/>
            <span>Previewer</span>
        </div>
        <button type="button">
            <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
      </div>
    </div>
  );
};

export default previewer;
