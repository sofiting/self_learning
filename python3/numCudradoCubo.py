import random

"""
Realizar un programa que inicialice una lista 
con 10 valores aleatorios (del 1 al 10) y 
posteriormente muestre en pantalla cada elemento
de la lista junto con su cuadrado y su cubo.
"""

lista1=[]
lista2=[]
lista3=[]

for n in range(10):
    num = random.randint(1,10)
    lista1.append(num)
    lista2.append(num*num)
    lista3.append(num*num*num)

for x,y,k in zip(lista1,lista2,lista3):
    print(x," ",y," ",k)

print("***************************************")
    
lista=[]

for n in range(1,11):
    lista.append(random.randint(1,10))

for num in lista:
    print(num," ",num**2," ",num**3)


