import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var foodDB = {
    "🍔": "ham-burger",
    "🥮": "moon cake",
    "🍨": "ice-cream",
    "🥚": "egg",
    "🌭": "hotdog",
    "🥪": "sandwhich",
    "🍗": "poultry leg"
  };

  function foodInputHandler(event) {}

  return (
    <div className="App">
      <h1>Food recognizer</h1>

      <input onChange={foodInputHandler} />
      <h2>click the food to know its name</h2>
    </div>
  );
}
