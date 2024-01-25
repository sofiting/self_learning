import math

def calculaAreaPeri(radio):
    area = math.pi * radio **2
    peri = 2*math.pi*radio
    return area,peri

radio = float(input("introduce el radio:"))
area,peri=calculaAreaPeri(radio)

#solo guarda 2 decimales
area2f= f"{area:.2f}"
peri2f=f"{peri:.2f}"

print("Area: ",area2f)
print("Perimetro: ",peri2f)