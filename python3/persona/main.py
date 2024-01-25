from dni import Dni
from persona import Persona
from alumno import Alumno

dni1 = Dni("11223344")
print(dni1.mostrar())

p1 = Persona(dni1,"sofia",23)
print(p1.mostrar())

a1 = Alumno(dni1,"sofia",23,"dam",9)
print(a1.mostrar())

a1.aprobado()

s = "hola"
print(s[:3])