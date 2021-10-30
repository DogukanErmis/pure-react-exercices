import React, { useEffect, useRef, useState } from "react";
import * as ReactDOM from "react-dom";

const LogEffect = () => {
  const inputRef = useRef(); // Store the input's value in state
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("mounted");
    return () => console.log("unmounting...");
  }, []);

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
