from random import randint

def maxMinLista(numeros):
    return max(numeros),min(numeros)


numeros=[]

for i in range(10):
    numeros.append(randint(1,20))

for i in numeros:
    print(i,end=" ")



print()

max,min = maxMinLista(numeros)
print("el valor mayor de la lista es",max)
print("el valor menor de la lista es",min)