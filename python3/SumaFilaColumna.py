import random

tabla=[]

for i in range(1,6):
    fila=[]
    for j in range (1,6):
        fila.append(random.randint(1,10))
    tabla.append(fila)

for fila in tabla:
    for colum in fila:
        print(colum,end=" ")
    print()

print("******************************")

cont = 1
for fila in tabla:
    print("la suma de fila %s es %s"%(cont,sum(fila)))
    cont+=1

print("******************************")

for colum in range(1,6):
    suma = 0
    for fila in tabla:
        suma+= fila[colum-1]
    print("las suma de columna %s es %s "%(colum,suma))