
# Un ciclista parte de una ciudad A a las HH horas, MM minutos y SS segundos. 
# El tiempo de viaje hasta llegar a otra ciudad B es de T segundos. 
# Escribir un algoritmo que determine la hora de llegada a la ciudad B.

hora = int (input("introduce las horas: "))
min = int (input("introduce los minutos: "))
seg = int (input("introduce los segundos: "))
print("el tiempo iniciar en ciudad a es %s : %s : %s"%(hora,min,seg))

tiempoIni = (hora*3600)+(min*60)+seg

tiempoViaje = int(input("introduce los segundos que tarda al llegar al ciudad b: "))
total_seg = tiempoIni+tiempoViaje

hora2 = total_seg//3600
seg_restante = total_seg%3600
min2 = seg_restante//60
seg2=seg_restante%60

print("el tiempo de llegada a ciudad b es %s : %s : %s"%(hora2,min2,seg2))