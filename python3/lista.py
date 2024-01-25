#lista mutable
lista1=[1,2,3,4]

lista1[1]=100
print(lista1)

#delete an element
del lista1[1]
print(lista1)

lista1.append(8)
print(lista1)

#b no cambia
a=6
b=a
print(b)
a=10
print(b)

#lista si cambia, apunta a la referencia
lista2 =lista1
print(lista2)
lista1.append(999)
print(lista1)
print(lista2)

#para hacer una copia de la lista
lista2 =lista1[:]
print(lista2)
lista1.append(999)
print(lista1)
print(lista2)

#inserta final
lista1.append(1000)
print(lista1)
#inserta posicion determinada
lista1.insert(1,3000)
print(lista1)

lista3=[222,333]
lista1.extend(lista3)
print(lista1)

#elimina final
lista1.pop()
print(lista1)

#elimina posicion determinada
lista1.pop(1)
print(lista1)

#elimina elemenro = x
lista1.remove(999)
print(lista1)

lista4=["hola","Hola","que","tal","Tal","Que"]
print(sorted(lista4))

#busqueda
print(lista1.count(8))
lista1.append(8)
print(lista1.count(8))

#posicion elemento
print(lista1.index(8))

#posicion elemento 1000 a partir de una posicion 2
print(lista1.index(1000,2))
