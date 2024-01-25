/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto && "✅"}
    </li>
  );
};
//{visto ? "✅" : "❌"}
export const ListadoApp = () => {
  return (
    <>
      <h1>LIstado de temas</h1>
      <ol>
        <Items nombre="Uso de vite" visto={true}></Items>
        <Items nombre="Componentes" visto={true}></Items>
        <Items nombre="Variables en JSX" visto={true}></Items>
        <Items nombre="Props" visto={true}></Items>
        <Items nombre="Eventos" visto={true}></Items>
        <Items nombre="useSate" visto={true}></Items>
        <Items nombre="Redux" visto={true}></Items>
        <Items nombre="customHooks" visto={false}></Items>
        <Items nombre="Map" visto={true}></Items>
        <Items nombre="Bootstrap" visto={true}></Items>
      </ol>
    </>
  );
};
