/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const Incrementa = React.memo(({ incrementaPadre }) => {
  console.log("redija button");

  return (
    <button
      onClick={() => {
        incrementaPadre(10);
      }}
    >
      +1
    </button>
  );
});
