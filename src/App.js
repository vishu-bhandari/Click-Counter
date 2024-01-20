import React, { useState } from "react";
import "./App.css"; // Import your CSS file

const App = () => {

  const [num,setNum]=useState(0);

  const incNum=()=>{
    setNum(num +1);
  }
  const decNum=()=>{
    setNum(num-1);
    if(num<0){
      alert("your num is less than 0")
      return;
    }
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button className="increment_btn" onClick={incNum}>Increment</button>
            <button className="decrement_btn" onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
