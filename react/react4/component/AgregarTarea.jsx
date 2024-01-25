/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

//recibe lo de padre
export const AgregarTarea = ({ agregaTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //pasa valo a padre
  const onsubmit = (event) => {
    event.preventDefault();
    agregaTarea(inputValue);
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="introduce tarea"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
