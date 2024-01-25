import "./PrimerComponente.css";

/* eslint-disable no-unused-vars */
const string = "Esto es un texto";
const number = 12345;
const array = ["sofia", "sara", 32344, "manu"];
const boolean = true;
const funcion = () => 1 + 4;
const objeto = { nombre: "sofia", edad: 23 };
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    <>
      <h1>Variable en JSX</h1>
      <h4>Varible tipo String:</h4>
      <p>{string}</p>
      <h4>Varible tipo Number:</h4>
      <p>{number}</p>
      <h4>Varible tipo Array:</h4>
      <p>{array}</p>
      <h4>Varible tipo Boolean:</h4>
      <p>{boolean}</p>
      <h4>Varible tipo Función:</h4>
      <p>{funcion()}</p>
      <h4>Varible tipo Objeto:</h4>
      <p>{JSON.stringify(objeto)}</p>
      <h4>Varible tipo Fecha:</h4>
      <p>{JSON.stringify(fecha)}</p>
    </>
  );
};
//<p>{JSON.stringify(objeto)}</p>
//<p>{string}</p>
//<p>{funcion() }</p>

/*function PrimerComponente() {
  return <h1>Hola Mundo!</h1>;
}

export default PrimerComponente;
*/
