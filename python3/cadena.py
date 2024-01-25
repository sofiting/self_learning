cadena = "sofia"
frase = "heLlo WorlD"
sentence = "welcome to my application"
existe = False

for c in cadena:
    if "a" in cadena:
        existe = True
    print(c,end=" ")

if existe:
    print("hola",cadena)

#como substring en java
print(frase[0:5])

#sacar letra de 2 a 8 en 2 de 2
print(frase[2:9:2])

#de posicion 6 hasta final
print(frase[6:])
# a reves
print(frase[:5])

#recorrer string a reves
print(frase[::-1])

print(frase.capitalize())
print(frase.title())

#mayus a minus, minus a mayus
print(frase.swapcase())

#count letter apparence
print(sentence.count("a"))
#buscar hasta x posicion
print(sentence.count("e",5))
#buscar en un rango
print(sentence.count("e",0,9))

#si no encuentra devueve -1
print(sentence.find("to"))

print(sentence.startswith("we"))
print(sentence.startswith("to",13))

print(sentence.endswith("tion"))

print(sentence.replace("e","x"))

#quita espacio
print(sentence.strip())

#quita algo
cad ="000000023400000"
print(cad.strip("0"))

hora="12:34:56"
print(hora.split(":"))

text="line1\nline2\nline3"
print(text)
print(text.splitlines())