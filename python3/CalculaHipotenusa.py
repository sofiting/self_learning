import math

cateto1 = float(input("introduce primer cateto:"))
cateto2 = float(input("introduce segundo cateto:"))

hipo = math.sqrt((math.pow(cateto1,2)+math.pow(cateto2,2)))

#.2f para solo guarda 2 decimales
print("cateto 1 es %s , cateto 2 es %s y hipotenusa es %.2f"%(cateto1,cateto2,hipo))