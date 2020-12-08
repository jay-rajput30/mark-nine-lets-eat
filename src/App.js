import React, { useState } from "react";
import "./styles.css";

let indian = {
  "konkani cuisine": "4/5",
  "kashmiri cuisine": "4/5"
};

let indianCuisines = Object.keys(indian);
let indianCuisineRating = Object.values(indian);

export default function App() {
  let [item1, setItem1] = useState("food item will appear here");
  let [item2, setItem2] = useState("food item will appear here");

  let [rating1, setRating1] = useState("");
  let [rating2, setRating2] = useState("");

  function indianClickHandler() {
    setItem1(indianCuisines[0]);
    setItem2(indianCuisines[1]);
    setRating1(indianCuisineRating[0]);
    setRating2(indianCuisineRating[1]);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Good Food</h1>
        <div className="btnGroup">
          <button onClick={indianClickHandler} className=" btn btnIndian">
            Indian
          </button>
          <button className="btn btnChinese">Chinese</button>
          <button className="btn btnItalian">Italian</button>
          <button className="btn btnThai">Thai</button>
        </div>
      </div>

      <ul className="food-list">
        <li className="food-item">
          {item1} <span>{rating1}</span>
        </li>
        <li className="food-item">
          {item2} <span>{rating2}</span>
        </li>
      </ul>
    </div>
  );
}
