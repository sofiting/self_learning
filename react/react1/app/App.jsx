import React from "react";

const subjects = [
  { text: "React", done: true },
  { text: "NodeJs", done: true },
  { text: "Spring", done: false },
  { text: "Maven", done: false },
];

const App = () => (
  <div>
    <h1>Sofi React</h1>
    <fieldset>
      <legend>Subject</legend>
      <input type="text" placeholder="Enter subject" />
    </fieldset>
    <ul>
      {subjects.map((sub) => (
        // eslint-disable-next-line react/jsx-key
        <li>{sub.text}</li>
      ))}
    </ul>
  </div>
);

export default App;
