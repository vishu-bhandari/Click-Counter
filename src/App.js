import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      document.getElementById("alert").style.display = "block";
      setTimeout(() => {
        document.getElementById("alert").style.display = "none";
      }, 2000);
      setNum(0);
    }
  };

  return (
    <>
      <h1>Click Counter</h1>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button className="increment_btn" onClick={incNum}>
              Increment
            </button>
            <button className="decrement_btn" onClick={decNum}>
              Decrement
            </button>
          </div>
          <div id="alert" className="alert">
            Limit Reached
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
