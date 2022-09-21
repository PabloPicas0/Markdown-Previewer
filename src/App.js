import React from "react";
import "./App.css";

import Editor from "./editor";
import Previewer from "./previewer";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className=" App-header d-flex justify-cointent-center align-items-center">
        <Editor />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
