class Dni:

    def __init__(self, numero):
        self.numero = numero

    def __calcular_letra(self):
        letras = 'TRWAGMYFPDXBNJZSQVHLCKE'
        return letras[int(self.__numero) % 23]

    @property
    def numero(self):
        return self.__numero

    @property
    def letra(self):
        return self.__calcular_letra()

    @numero.setter
    def numero(self, numero):
        if len(numero) == 8 and numero.isdigit():
            self.__numero = numero
        else:
            self.__numero = 0
            print("DNI incorrecto")

    def mostrar(self):
       return f"DNI: {self.numero}-{self.__calcular_letra()}"