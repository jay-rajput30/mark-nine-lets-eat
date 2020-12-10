import React, { useState } from "react";
import "./styles.css";
import data from "./data.js";

let foodDataKeys = Object.keys(data);

export default function App() {
  let [food, setFood] = useState(data.indian);

  function onClickHandler(country) {
    setFood(data[country]);

    console.log(food);
  }

  function getFoodItem(fItem) {
    let foodName = fItem.name;
    let foodRating = fItem.rating;
    let fDesc = fItem.desc;

    let listing = (
      <li className="food-item">
        <h3>
          {foodName} <strong>{foodRating}</strong>
        </h3>
        <p>{fDesc}</p>
      </li>
    );
    return listing;
  }
  return (
    <div className="App">
      <div className="container">
        <header class="header">
          <h1>
            Good Food{" "}
            <span role="img" aria-label="food">
              🍝
            </span>
          </h1>
          <small>
            checkout my top food recommendations. Click buttons to view details.
          </small>
        </header>

        <blockquote>food is everything we are</blockquote>

        <div className="btnGroup">
          {foodDataKeys.map((f) => {
            return (
              <button className="btn" onClick={() => onClickHandler(f)}>
                {f}
              </button>
            );
          })}
        </div>

        <ul className="food-list">
          {food.map((f) => {
            return getFoodItem(f);
          })}
        </ul>
      </div>
    </div>
  );
}
