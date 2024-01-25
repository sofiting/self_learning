
"""
Se quiere realizar un programa que lea por teclado 
las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, 
la nota más alta que ha sacado y la menor.
"""
cont = 0
lista =[]
sum = 0

while(cont < 5):
   mark = float(input("Enter your mark: "))
   if(mark > 0 and mark <= 10):
    lista.append(mark)
    sum+=mark 
    cont +=1       
   else:
     print("mark isn`t valid")     

for m in lista:
    print(m)

print("average mark is ",(sum/len(lista))," the better mark is ",max(lista)," the worst mark is ",min(lista))

#nombre y edad de alumno, mostra mayor de edad y alumno mayor
nombre=""
listaNombre=[]
listaEdad=[]

while(nombre!="*"):
   nombre = str(input("Enter your name:"))
   edad = int (input("Enter your age: "))
   listaNombre.append(nombre)
   listaEdad.append(edad)

for n,e in zip(listaNombre,listaEdad):
   if e >= 18:
     print("Nombre: ",n," , "," Edad: ",e)

print("*********** mayor edad ***************")

for n,e in zip(listaNombre,listaEdad):
   if e >= 18:
     print("Nombre: ",n," , "," Edad: ",e)

print("mayor edad dentro de lo que introducido")
edadMayor = max(listaEdad)
for n,e in zip(listaNombre,listaEdad):
   if e == edadMayor:
     print("Nombre: ",n," , "," Edad: ",e)
#este caso no resuelve si hay más que uno tiene mayor edad que los demás
#print("Alumno mayor es %s con %s años"%(listaNombre[listaEdad.index(max(listaEdad))],listaEdad[listaEdad.index(max(listaEdad))]))

"""
# Nombre y edad de alumno, mostrar mayor de edad y alumno mayor
nombres = []
edades = []

while True:
    nombre = input("Enter your name (enter '*' to stop): ")
    if nombre == "*":
        break
    edad = int(input("Enter your age: "))
    nombres.append(nombre)
    edades.append(edad)

print("*********** Mayores de edad ***************")

# Mostrar alumnos mayores de edad
for n, e in zip(nombres, edades):
    if e >= 18:
        print("Nombre: ", n, " , ", " Edad: ", e)

print("*********** Alumno mayor ***************")

# Encontrar y mostrar al alumno mayor
indice_alumno_mayor = edades.index(max(edades))
nombre_alumno_mayor = nombres[indice_alumno_mayor]
edad_alumno_mayor = edades[indice_alumno_mayor]

print("Alumno mayor es %s con %s años" % (nombre_alumno_mayor, edad_alumno_mayor))

"""