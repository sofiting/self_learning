import math

class Punto():
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def mostrar(self):
        return str(self.x) + ":" + str(self.y)

    def distancia(self, otro):
        dx = self.x - otro.x
        dy = self.y - otro.y
        return math.sqrt((dx * dx + dy * dy))

punto = Punto(2, 3)
punto2 = Punto(4, 6)
print(punto.mostrar())
print(punto.distancia(punto2))
