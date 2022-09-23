import React, { useState } from "react";
import "./App.css";

import Editor from "./editor";
import Previewer from "./previewer";



function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="min-vh-100 row">
        <div className="col-lg-5 mt-3">
          <Editor input={input} change={handleChange} />
        </div>
        <div className="col-lg-7 mt-3">
          <Previewer input={input} />
        </div>
      </div>
    </div>
  );
}

export default App;
