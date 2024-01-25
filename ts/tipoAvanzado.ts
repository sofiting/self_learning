//type
type Persona = {
  name: string;
  age: number;
  sexo?: string;
};

const person: Persona = {
  name: "sofia",
  age: 23,
};

const person2: Persona = {
  name: "juan",
  age: 30,
};

//tuple
var arr: [number, number, number] = [1, 2, 3];

//interface
interface Animal {
  name: string;
  age: number;
  comunicate(): void;
}

const a1 = {
  name: "lili",
  age: 3,
  comunicate: function () {
    console.log("miaow");
  },
};

const a2 = {
  name: "lulu",
};

// a partir version 2.2 han eliminado object, hay que usar type y interface

// Record<t,t> dinamico
const myObject: Record<string, string | number> = {};

myObject.name = "sofia";
myObject.age = 23;

//union
type AlumnoName = {
  name: string;
};

type AlumnoAge = {
  age: number;
};

type AlumnoGreeting = {
  greeting: () => void;
};

type Alumno = AlumnoName & AlumnoAge & AlumnoGreeting;

const alum: Alumno = {
  name: "sofia",
  age: 23,
  greeting() {
    console.log("hello");
  },
};

//or
type ProfeName = {
  name: string;
};

type ProfeAge = {
  age: number;
};

type ProfeGreeting = {
  greeting: () => void;
};

type Profe = ProfeName | ProfeAge | ProfeGreeting;

const profe: Profe = {
  name: "sofia",
  greeting() {
    console.log("hello");
  },
};
