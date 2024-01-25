from persona import Persona

class Alumno(Persona):
    def __init__(self,dni,nombre,edad,curso,nota):
        super().__init__(dni,nombre,edad)
        self.__curso=curso
        self.__nota=nota

    @property
    def curso(self):
        return self.__curso
    
    @curso.setter
    def curso(self,curso):
        self.__curso

    @property
    def nota(self):
        return self.__nota
    

    @nota.setter
    def nota(self,nota):
        if nota >= 0 and nota <=10:
            self.__nota=nota
        else:
            self.__nota=-1
            print("nota error")

        
    def aprobado(self):
        if self.__nota > 5:
            print("alumno aprobado")
        elif self.__nota >= 0 and self.__nota <5:
            print("alumno suspendido")
        else:
            print("nota no válido")

    def mostrar(self):
        return super().mostrar()+" Curso: "+self.__curso+" Nota: "+str(self.__nota)