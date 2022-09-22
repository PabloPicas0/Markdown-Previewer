import React from "react";
import "./App.css";

import Editor from "./editor";
import Previewer from "./previewer";

function App() {
  return (
    <div className="container-fluid bg-dark">
      <div className="min-vh-100 row">
        <div className="col-lg-5 mt-2">
          <Editor />
        </div>
        <div className="col-lg-7 mt-2">
          <Previewer />
        </div>
      </div>
    </div>
  );
}

export default App;
