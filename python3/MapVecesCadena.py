dic = {}

cadena =input("dame una cadena:")
for caracter in cadena:
    if caracter in dic:
        dic[caracter]+=1
    else:
        dic[caracter]=1

for clave,valor in dic.items():
    print(clave," -> ",valor)