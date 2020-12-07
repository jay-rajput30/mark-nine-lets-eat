import React from "react";
import "./styles.css";

export default function App() {
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
    </div>
  );
}
