cadena = "hola todo soy sofia"
world = str(input("Enter a world: "))
if cadena.__contains__(world):
    print("%s' contiene '%s'"%(cadena,world))
else:
    print("%s' No contiene '%s'"%(cadena,world))

if world in cadena:
    print("%s' contiene '%s'"%(cadena,world))
else:
    print("%s' No contiene '%s'"%(cadena,world))

if cadena.find(world) > -1:
    print("%s' contiene '%s'"%(cadena,world))
else:
    print("%s' No contiene '%s'"%(cadena,world))