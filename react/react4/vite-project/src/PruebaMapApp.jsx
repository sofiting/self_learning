/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AgregarTarea } from "../../component/AgregarTarea";

const Item = ({ nombre, visto }) => {
  return (
    <li className="font">
      {nombre} {visto ? "✅" : "❌"}
    </li>
  );
};

export const PruebaMapApp = () => {
  const addTask = () => {
    setArray([...array, { nombre: "nuevo", visto: false }]);
  };

  let map = [
    { id: 1, nombre: "Uso de vite", visto: true },
    { id: 2, nombre: "Componentes", visto: true },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Props", visto: true },
    { id: 5, nombre: "Eventos", visto: true },
    { id: 6, nombre: "useSate", visto: true },
    { id: 7, nombre: "Redux", visto: true },
    { id: 8, nombre: "customHooks", visto: false },
    { id: 9, nombre: "Map", visto: true },
    { id: 10, nombre: "Bootstrap", visto: true },
  ];
  const [array, setArray] = useState(map);

  //recibe de hijo
  const onAddTask = (valor) => {
    let val = valor.trim();
    if (val < 1) return;
    const envio = {
      id: array.length + 1,
      nombre: val,
      visto: false,
    };
    setArray([...array, envio]);
  };
  return (
    <>
      <h1>Listado de temas</h1>
      <AgregarTarea agregaTarea={onAddTask}></AgregarTarea>
      <ol>
        {array.map((item) => (
          <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>
        ))}
      </ol>
    </>
  );
};

// <AgregarTarea agregaTarea={onAddTask}></AgregarTarea>
// es la manera de comunicar con el hijo
