var date = new Date();
console.log(date);

 
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());

var pi = Math.PI;
console.log(pi);

console.log(Math.min(1, 7, 4, 2, 9, -2, 4));
console.log(Math.max(1, 7, 4, 2, 9, -2, 4));

console.log(Math.round(4.4));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.8));
console.log(Math.random());
console.log(randomNumber(5,20))

function randomNumber(min, max) {
     return Math.round(Math.random() * (max - min + 1)) + min;
}