import React, { useState } from "react";

function App() {
  const [mouseState, setMouseState] = useState(false);

  function mouseOver() {
    return setMouseState(true);
  }

  function mouseOut() {
    return setMouseState(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseState ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
