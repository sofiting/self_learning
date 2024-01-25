require("dotenv").config();

//read environment variable
console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log("I`m ", process.env.NAME, ", I`m ", process.env.PROFESSION);

//in powershell
//$env:NAME = "sofia"; $env:PROFESSION = "developer"; node env.js

//another way : create .env -> file
//npm i dotenv -> use require line 1

//in bash
//set NAME=sofia && set PROFESSION=developer && node env.js
