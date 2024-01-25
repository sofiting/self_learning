class Motor:
    def __init__(self):
        self.__estado = "apagado"

    @property
    def obtener_estado(self):
        return self.__estado

    def encender(self):
        if self.__estado == "apagado":
            print("Motor encendido")
            self.__estado = "encendido"
        else:
            print("El motor ya está encendido")

    def apagar(self):
        if self.__estado == "encendido":
            print("Motor apagado")
            self.__estado = "apagado"
        else:
            print("El motor ya está apagado")
