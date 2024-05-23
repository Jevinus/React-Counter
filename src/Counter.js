import "./App.css";
import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div className="counter-div">
      <p className="counter-para">
        Amount of times you have clicked this button: {counter}
      </p>
      <button
        type="button"
        className="counter"
        onClick={() => {
          setCounter(counter++);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default Counter;
