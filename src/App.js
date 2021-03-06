import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Name from "./compents/compents";
import { Hello } from "./compents/hello";
import { ParentComponent } from "./compents/parentComponent";
import { ArrayParent } from "./compents/arrayParent";
import {FormSubmit} from "./compents/formComponent"
function App() {
  // const [num, setNum] = React.useState(10);
  // const numChange = (val) => {
  //   if (num === 0 && val < 0) {
  //     if (val < 0) {
  //       setNum(0);
  //     }
  //   } else {
  //     setNum(num + val);
  //   }
  // };
  // return (
  //   <div>
  //     {num <= 0 ? <p>the counter is 0 </p> : <p> counter {num}</p>}
  //     <button onClick={() => numChange(10)}>+</button>
  //     <button onClick={() => numChange(-10)}>-</button>
  //     {num === 50 && <h1>The Counter is 50</h1>}
  //     {num === 100 && <h1>the counter is 100</h1>}
  //     {num === 0 ? <h1>counter is zero</h1> : <h1>counter has value</h1>}
  //     <Hello Name="vishnu" />
  //     <ParentComponent />
  // </div>
  // );
  return (
    <div>
      <FormSubmit />
    </div>
  );
}

export default App;
