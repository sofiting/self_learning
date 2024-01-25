from Vehiculo import Vehiculo


class Coche(Vehiculo):
    def __init__(self, marca, modelo, num_puertas):
        super().__init__(marca, modelo)
        self.num_puertas = num_puertas

    def mostrar_info(self):
        super().mostrar_info()
        print(f"Número de puertas: {self.num_puertas}")