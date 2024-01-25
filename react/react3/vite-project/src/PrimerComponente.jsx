/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./PrimerComponente.css";
import PropTypes from "prop-types";

export const PrimerComponente = ({ titulo, subtitulo }) => {
  console.log({ titulo });
  console.log({ subtitulo });
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </>
  );
};

PrimerComponente.PropTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired,
};

//valor por defecto
PrimerComponente.defaultProps = {
  titulo: "Curso React",
  subtitulo: "Sección de Props",
};
