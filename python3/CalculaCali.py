# Un alumno desea saber cual será su calificación final en la materia de Algoritmos
# Dicha calificación se compone de los siguientes porcentajes:
# * 55% del promedio de sus tres calificaciones parciales.
# * 30% de la calificación del examen final.
# * 15% de la calificación de un trabajo final.

p1 = float(input("introduce nota de parcial 1:"))
p2 = float(input("introduce nota de parcial 2:"))
p3 = float(input("introduce nota de parcial 3:"))

part1 = ((p1+p2+p3)/3)*0.55

final = float(input("introduce la nota de examen final: "))
part2 = final*0.3

trabajo = float(input("introduce la nota trabajo: "))
part3 = trabajo*0.15

print("nota final es %.2f"%(part1+part2+part3))
