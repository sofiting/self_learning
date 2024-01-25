# Pedir el nombre y los dos apellidos de una persona y mostrar las iniciales.

nombre = str(input("introduce tu nombre: "))
apellido = str(input("introduce tu apellido: "))

ini=nombre[0].upper()+apellido[0].upper()

print("Hola %s %s , las iniciales de tu nombre es %s"%(nombre,apellido,ini))