import React from "react";
import "./App.css";

import Editor from "./editor";
import Previewer from "./previewer";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-lg-6 col-12">
          <Editor />
        </div>
        <div className="col-lg-6 col-12">
          <Previewer />
        </div>
      </div>
    </div>
  );
}

export default App;
