//windows
const fs = require("fs").promises;
const fsSync = require("fs");
const filesys = require("fs");

//para escritura de stream este y fs
const readline = require("readline");

//linux
//const fs = require("fs/promises");

/*
//leer fichero
fs.readFile("C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\texto.txt",'utf-8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


//escrbir
async function accionFichero() {
  try {
    await fs.appendFile(
      "C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\texto.txt",
      " \n Autora : sofia ting"
    );
    const data = await fs.readFile(
      "C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\texto.txt",
      "utf-8"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// con code C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\texto.txt se puede abrir fichero directamente
accionFichero();


//crear directorio y fichero -> escribir
(async () => {
  try {
    if (
      fsSync.existsSync(
        "C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\hola"
      )
    ) {
      console.log("Directorio ya existe");
    } else {
      await fs.mkdir("C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\hola");
      console.log("Directorio creado exitosamente");

      await fs.appendFile(
        "C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\hola\\sofia.txt",
        "hello sofia"
      );
    }
  } catch (error) {
    console.error("Error al crear el directorio:", error);
  }
})();


//stream -> fichero gigante
//lectura
const stream = filesys.createReadStream(
  "C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\texto.txt",
  "utf-8"
);

let body = "";
//solo ejecuta una vez que recibe evento
stream.once("data", () => {
  console.log("empieza la lectura");
});

//cada vez cuando recibe evento
//subscribir eventos predefinido , data es un evento
stream.on("data", (chunk) => {
  console.log("Recibo datos....");
  body += chunk;
});

stream.on("end", () => {
  console.log(`Body: ${body.length}`);
});
*/

//escritura stream
//pasa entrada y salida , puede cambiar a otro fichero, bbdd etc
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("How are you?", (answer) => {
  const stream = filesys.createWriteStream(
    `C:\\Users\\dista\\Desktop\\lenguaje\\inputOutput\\${answer}.txt`
  );

  //carga el text que queremos ver
  rl.setPrompt("What do you want? ('exit' if you want to exit)");
  //lanzar el consola
  rl.prompt();

  rl.on("line", (data) => {
    if (data.toLowerCase().trim() === "exit") {
      stream.close();
      rl.close();
    } else {
      stream.write(`${data}\n`);
      rl.prompt();
    }
  });
});

rl.on("close", () => {
  console.log("termina la escritura");
});
