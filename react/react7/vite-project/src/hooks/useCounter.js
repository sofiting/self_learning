/* eslint-disable no-unused-vars */
import { useState } from "react";

export const useCounter = (valor = 0) => {
  const [contador, setContador] = useState(valor);

  const incrementar = (valor = 1) => {
    setContador(contador + valor);
  };

  const resetear = () => {
    setContador(0);
  };

  const decrementar = (valor = 1) => {
    setContador(contador - valor);
  };

  return {
    contador,
    incrementar,
    decrementar,
    resetear,
  };
};
