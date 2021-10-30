import React, { useEffect, useRef, useState } from "react";
import * as ReactDOM from "react-dom";

const LogEffect = () => {
  const inputRef = useRef(); // Store the input's value in state
  const [value, setValue] = useState("");
  useEffect(
    () => {
      // This runs AFTER the first render,
      // so the ref is already set.
      console.log("render");
      inputRef.current.focus();
    },
    // The effect "depends on" inputRef
    [inputRef]
  );
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <LogEffect />
  </React.StrictMode>,
  document.getElementById("root")
);
