map = {"one":1,"two":2,"three":3}
for i,j in map.items():
    print(i," ",j)

for clave in map.keys():
    print(clave)

for valor in map.values():
    print(valor)

diccionario = {}
diccionario["nombre"]="sofia"
diccionario["edad"]=23
diccionario["sexo"]="M"
print(diccionario)
print(diccionario["nombre"])
print(len(diccionario))

#dos forma para eliminar
del diccionario["sexo"]
print(diccionario)
# diccionario.pop("sexo")
# diccionario.pop("sexoooo","no existe")

print("nombre" in diccionario)

dic2 = diccionario.copy()
print(dic2)

diccionario["nombre"]="sara"
print(diccionario)
print(dic2)

#vaciar diccionario
# dic2.clear()  

map2 = {"four":4,"five":5}
map.update(map2)
print(map)

print(map.get("two"))
print(map.get("twooo","no existe"))