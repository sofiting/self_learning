import math

num = -5
# mostrar tipo de dato
print(type(num))

# numero absoluto
print(abs(num))

#7 divide 2
print(7/2)

# 7 divide 2 , pero solo muestra parte entera
print(7//2)

# 7 mod 2 , resto
print(7 % 2)

#devuelve dos resultado , uno es resul entero y otro resto
print(divmod(7,2))

# potencia
print(3**2)

#otra manera de hacer potencia
print(pow(3,2))

# casting a int o float
print(int(7.2))
print(int("234"))
print(float(7))

#casting  str
print("hola soy number "+str(8))

# raiz cuadrada
print(math.sqrt(9))

#bool
number = 7
print(number == 7)
print(number>= 1 and number <= 5)
print(number>= 1 or number <= 5)

# no sé puede number ++ 
print(number +1)

number +=2
print(number)

number -= 1
print(number)

number *= 3
print(number)

#forma de print
print("Hola %s tengo %s años"%("sofia",23))

#cadenas
cad = "hola "
resul = cad*5
print(resul)
print(cad[0])
print(len(cad))
print(cad.upper())
print(cad.lower())
