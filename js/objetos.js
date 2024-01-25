var persona = {
    nombre: 'Jhon',
    edad: 30,
    saludar: function () {
        console.log('Hola',this.nombre);
    }
}

console.log(persona.saludar());