var colores = ["verde", "azul", "rojo", "blanco"];

for (var i = 0; i < colores.length; i++) {
    console.log(colores[i]," ");
}

colores.push("negro");
colores.forEach(function (color) {
    console.log(color);
});

//shift remove first array element
colores.pop()
colores.forEach(color => console.log(color));

//suma de numero pares
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
cont = 0;
numeros.forEach(function (n) {
    if (n % 2 == 0) {
        cont += n;
        console.log(n, "es numero par");
    } 
    console.log(n);
});
console.log("suma de los numeros pares es ", cont);