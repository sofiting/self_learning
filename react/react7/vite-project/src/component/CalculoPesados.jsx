/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useMemo } from "react";

// ejemplo useMemo -> memorizar data

export const CalculoPesados = () => {
  const [listaNum, setListaNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [show, setShow] = useState(true);

  const getCalculo = useMemo(() => {
    console.log("calculando");
    return listaNum.reduce((a, b) => a * b, 1);
  }, [listaNum]);

  const agregaNum = () => {
    setListaNum([...listaNum, listaNum[listaNum.length - 1] + 1]);
  };

  return (
    <>
      <h2>Calculo:</h2>
      <p>{getCalculo}</p>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "Show" : "Hide"}
      </button>
      <button className="btn btn-primary" onClick={() => agregaNum()}>
        Agrega número
      </button>
    </>
  );
};
