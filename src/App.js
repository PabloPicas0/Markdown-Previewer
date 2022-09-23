import React, { useState } from "react";
import "./App.css";

import Editor from "./editor";
import Previewer from "./previewer";

function App() {
  const [input, setInput] = useState("");
  const [onlyEdit, setOnlyEdit] = useState(false);
  const [onlyPreview, setOnlyPreview] = useState(false);

  const handlePreviewClick = () => {
    setOnlyPreview(!onlyPreview);
  };

  const handleEditClick = () => {
    setOnlyEdit(!onlyEdit);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="min-vh-100 row">
        <div
          style={{ display: onlyPreview ? "none" : "block" }}
          className={`col-lg-${onlyEdit ? "12" : "5"} mt-3`}>
          <Editor
            input={input}
            change={handleChange}
            click={handleEditClick}
            onlyEdit={onlyEdit}
          />
        </div>
        <div
          style={{ display: onlyEdit ? "none" : "block" }}
          className={`col-lg-${onlyPreview ? "12" : "7"} mt-3`}>
          <Previewer
            input={input}
            onlyPreview={onlyPreview}
            click={handlePreviewClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
