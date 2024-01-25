
from Coche import Coche

# Crear una instancia de la clase Coche
mi_coche = Coche()

# Obtener el estado del motor (delega al método "obtener_estado" del objeto Motor)
print("Estado del motor:", mi_coche.obtener_estado_motor())

# Intentar encender el motor (delega al método "encender" del objeto Coche)
mi_coche.encender()

# Obtener el estado del motor después de intentar encenderlo
print("Estado del motor:", mi_coche.obtener_estado_motor())
