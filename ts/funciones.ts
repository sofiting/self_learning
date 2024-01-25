//solo valida si es una funcion ,
//no valida los parametros ni nada
let combineValue: Function;

//linea 35 va a dar error , por que no coincide los parametros
//let combineValue: (a: number, b: number) => number;

function sum(a: number, b: number): number {
  return a + b;
}
/*
//de este manera , b no es obligatorio a pasar
function sum(a: number, b?: number): number {
  return a + b;
}
console.log(sum(6));

//de este manera , b tiene un valor por defecto, aunque no pasa ningun valor
function sum(a: number, b: number = 1): number {
  return a + b;
}
console.log(sum(6,undefined));
*/
console.log(sum(6, 3));

function sayHello() {
  console.log("hello sofia");
}

var user = "luis";

if (user == "Bob") {
  combineValue = sum;
} else {
  combineValue = sayHello;
}

console.log(combineValue(2, 3));

//():never
//coóigo lanza errores y el script no seguirá su ejecución

function generateError(menssage: string): never | boolean {
  if (menssage == "hola") {
    return true;
  }
  throw new Error(menssage);
}

try {
  generateError("Ops!! An error has occurred");
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unexpected error occurred.");
  }
}
