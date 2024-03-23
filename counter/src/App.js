import React, { useState } from "react";
import Button from "./compoonents/button";
import "./assets/style.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div className=" title-countainer">
          <h3>COUNTER REACT APP</h3>
          <div className="title-underline"></div>
        </div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}