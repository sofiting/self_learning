def contar_palabras_preciso(texto):
    # Usa el método split para dividir el texto en palabras
    palabras = texto.split()

    # Filtra las palabras no vacías
    palabras_no_vacias = [palabra for palabra in palabras if palabra] 

    # Devuelve la cantidad de palabras
    return len(palabras_no_vacias)

def contar_palabras(texto):
    # Usa el método split para dividir el texto en palabras
    palabras = texto.split()

    # Inicializa un contador
    contador_palabras = 0

    # Recorre cada palabra y aumenta el contador
    for palabra in palabras:
        contador_palabras += 1

    # Devuelve la cantidad de palabras
    return contador_palabras

# Ejemplo de uso con múltiples espacios
texto_ejemplo = "Este es      un    ejemplo   de conteo de palabras   en Python. ¡Es preciso ahora!"
resultado = contar_palabras_preciso(texto_ejemplo)
resul = contar_palabras(texto_ejemplo)

print(f"El número de palabras en el texto es: {resultado}")
print("hay %s palabras"%(resul))


"""
palabra for palabra in palabras if palabra 
        ||
palabras_no_vacias = []

for palabra in palabras:
    if palabra:
        palabras_no_vacias.append(palabra)

"""