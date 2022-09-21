import React from "react";
import "./App.css";

import Editor from "./editor";
import Previewer from "./previewer";

function App() {
  return (
    <div className="container">
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
