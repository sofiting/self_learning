/* eslint-disable no-unused-vars */
import React from "react";

const wishes = [
  { id: 1, text: "Travel to Paris", done: false },
  { id: 2, text: "Pay the gym", done: false },
  { id: 3, text: "Learn React", done: true },
  { id: 4, text: "Become a programmer", done: true },
  { id: 5, text: "Bake a cake", done: true },
];

export const App = () => {
  return (
    <div>
      <h1>My Wishlist</h1>
      <fieldset>
        <legend>Wish</legend>
        <input type="text" placeholder="Enter your wish" />
      </fieldset>
      <ul>
        {wishes.map(({ id, text, done }, i) => (
          <li key={id} className="li">
            <label htmlFor={`wish${i}`}>
              <input id={`wish${i}`} type="checkbox" checked={done} />
              {text}
            </label>
          </li>
        ))}
      </ul>
      <button type="button">Archive done</button>
    </div>
  );
};

export default App;
