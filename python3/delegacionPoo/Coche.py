# Coche.py
from Motor import Motor

class Coche:
    def __init__(self):
        # Delegar la funcionalidad del motor a una instancia de la clase Motor
        self.motor = Motor()

    def encender(self):
        print("Arrancando el coche...")
        self.motor.encender()

    def obtener_estado_motor(self):
        return self.motor.obtener_estado
