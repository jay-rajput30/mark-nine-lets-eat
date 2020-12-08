import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [item1, setItem1] = useState("food item will appear here");
  let [item2, setItem2] = useState("food item will appear here");
  return (
    <div className="App">
      <div className="container">
        <h1>Good Food</h1>
        <div className="btnGroup">
          <button className=" btn btnIndian">Indian</button>
          <button className="btn btnChinese">Chinese</button>
          <button className="btn btnItalian">Italian</button>
          <button className="btn btnThai">Thai</button>
        </div>
      </div>

      <ul className="food-list">
        <li className="food-item">{item1}</li>
        <li className="food-item">{item2}</li>
      </ul>
    </div>
  );
}
