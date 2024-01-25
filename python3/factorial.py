
num = int(input("Enter a number: "))
result = 1

for var in range(1, num+1):
    result *= var
print("!",num," es ",result)

#pide numero hasta introduce 0 termina, salida imprirlos y sus media
cero = True
lista = []
suma = 0

while cero:
    n = int(input("Enter a number: "))
    if n == 0:
        cero = False
    else:
        lista.append(n)
        suma += n
        
print("numeros introducidos son %s , y la media es %s"%(lista,(suma/len(lista))))