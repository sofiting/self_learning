//npm install colors
//luego

const colors = require("colors");
const axios = require("axios").default;

console.log("sofia".green);

axios
  .get("https://rickandmortyapi.com/api/character")
  .then((response) => {
    //.data es de axios para recuperar
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
