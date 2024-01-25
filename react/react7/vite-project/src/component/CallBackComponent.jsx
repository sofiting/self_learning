/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import { Incrementa } from "../component/Incrementa";

// Ejemplo de useCallBack -> memoriza métodos
export const CallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementaPadre = useCallback((val) => {
    setCounter((contador) => contador + val);
  }, []);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <Incrementa incrementaPadre={incrementaPadre} />
    </>
  );
};

export default CallBackComponent;
