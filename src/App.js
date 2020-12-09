import React, { useState } from "react";
import "./styles.css";

let indian = {
  "tandoori chicken": "5/5",
  samosa: "4/5"
};

let chinese = {
  "manchow soup": "3/5",
  "fried rice": "4/5"
};

let italian = {
  pasta: "3/5",
  pizza: "4/5"
};

let american = {
  hamburger: "4/5",
  nachos: "3/5"
};

let indianCuisines = Object.keys(indian);
let indianCuisineRating = Object.values(indian);

let chineseCuisines = Object.keys(chinese);
let chineseCuisineRating = Object.values(chinese);

let italianCuisines = Object.keys(italian);
let italianCuisineRating = Object.values(italian);

let americanCuisines = Object.keys(american);
let americanCuisineRating = Object.values(american);

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

  function chineseClickHandler() {
    setItem1(chineseCuisines[0]);
    setItem2(chineseCuisines[1]);
    setRating1(chineseCuisineRating[0]);
    setRating2(chineseCuisineRating[1]);
  }

  function italianClickHandler() {
    setItem1(italianCuisines[0]);
    setItem2(italianCuisines[1]);
    setRating1(italianCuisineRating[0]);
    setRating2(italianCuisineRating[1]);
  }
  function americanClickHandler() {
    setItem1(americanCuisines[0]);
    setItem2(americanCuisines[1]);
    setRating1(americanCuisineRating[0]);
    setRating2(americanCuisineRating[1]);
  }

  return (
    <div className="App">
      <div className="container">
        <header class="header">
          <h1>Good Food</h1>
          <small>
            {" "}
            checkout my top food recommendations{" "}
            <span role="img" aria-label="food">
              🍝
            </span>
          </small>
        </header>

        <div className="btnGroup">
          <button onClick={indianClickHandler} className=" btn btnIndian">
            Indian
          </button>
          <button onClick={chineseClickHandler} className="btn btnChinese">
            Chinese
          </button>
          <button onClick={italianClickHandler} className="btn btnItalian">
            Italian
          </button>
          <button onClick={americanClickHandler} className="btn btnThai">
            American
          </button>
        </div>
      </div>

      <ul className="food-list">
        <li className="food-item">
          {item1} <strong>{rating1}</strong>
        </li>
        <li className="food-item">
          {item2} <strong>{rating2}</strong>
        </li>
      </ul>
    </div>
  );
}
