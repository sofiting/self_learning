lista1 = [1,2,3,4,5]
lista2 = ["a","b","c","d","e"]

for num,letra in zip(lista1,lista2):
    print(num," ",letra)

#true o false
print(9 in lista1)

#concadena 
lista3 = [6,7,8]
print(lista1+lista3)

#multiplicar lista
print(lista1*2)

print(lista1[2:4])
print(lista1[2:5:2])
print(lista1[2:])
print(lista1[:4])
print(lista1[::-1])

print(len(lista1))
print(max(lista1))
print(min(lista1))
print(sum(lista1))

lista=[3,5,1,2,4,7,0]
print(sorted(lista))
print(sorted(lista,reverse=True))

#lista multidimensonales
tabla =[[1,2,3],[4,5,6],[7,8,9]]
print(tabla[0][1])

for fila in tabla:
    for ele in fila:
        print(ele,end="")
    print()
