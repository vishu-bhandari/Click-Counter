import React, { useState } from "react";
import "./App.css";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

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
          <Tooltip title="Increment">
            <Button variant="outlined" className="increment_btn" onClick={incNum}>
            Increment
            <PlusOneIcon/> 

            </Button>
            </Tooltip>
            <Tooltip title="Decrement">
            <Button variant="outlined" className="decrement_btn" onClick={decNum}>
              Decrement
              <DeleteIcon/> 
            </Button>
            </Tooltip>
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
