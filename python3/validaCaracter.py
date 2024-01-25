correct = True


cadena = str(input("introduce una cadena: "))

while(correct):
    ch = str(input("introduce un caracter: "))
    if len(ch) == 1 and ch.isalpha():
        correct=False


print(" '%s' ha aparecido en ' %s ' %s veces"%(ch,cadena,cadena.count(ch)))