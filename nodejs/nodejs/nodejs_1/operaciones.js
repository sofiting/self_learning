function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

module.exports = {
  suma: suma,
  //si clave y valor es lo mismo es puede obviar
  resta,
  mult: multiplicar,
};
