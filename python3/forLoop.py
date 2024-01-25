#imprime de 1 a 10
for var in range(1,11):
    print(var," ",end="")

print("")

# imprime 10 a 1
for var in range(10,0,-1):
    print(var," ",end="")

print("")

#imprime numero par hasta 10
for var in range(2,11,2):
    print(var," ",end="")

print("")

cont = 0
suma = 0
par = True

for var in range(1,6):
    num = int (input("Dime un número: "))
    if num % 2 == 0:
        par = False
        cont +=1
        suma +=num
        print(num," es par")

if par:
    print("ningún número par")
else:
    print("has introducido %s es un número par, y la suma de estos es %s"%(cont,suma))
