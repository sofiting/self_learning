from dni import Dni


class Persona():

    def __init__(self,dni,nombre,edad):
        self.__dni=dni
        self.__nombre = nombre
        self.__edad=edad

    @property
    def dni(self):
        return self.__dni
    
    @dni.setter
    def dni(self,dni):
        self.__dni.numero=dni

    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def nombre(self,nombre):
        self.__nombre=nombre

    @property
    def edad(self):
        return self.__edad
    
    @edad.setter
    def edad(self,edad):
        if edad > 0:
            self.__edad=edad
        else:
            self.__edad=0
            print("error edad negativa")

    def mostrar(self):
        return (f"{self.__dni.mostrar()}, Nombre: {self.__nombre}, Edad:{str(self.__edad)}")