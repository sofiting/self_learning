password = "sofia"
attempt = 3
correct = True

while attempt > 0:
    pass_enter = str(input("Enter your password: "))
    if password != pass_enter:
        print("Password incorrect")
        attempt -= 1  # Decrement the attempt counter
    else:
        attempt = 0  # Set attempt to 0 to exit the loop
        correct = False

if not correct:
    print("You entered the system")
else:
    print("Exceeded maximum attempts. Access denied.")
    
"""
esto es para comentar una seccion de coed
"""
#mostrar numero impar
cont = 0
while cont < 10: 
    if cont % 2 == 0:
        cont+=1
        continue
    #sino entra if , es numero impar
    print(cont)
    cont+=1

#mostrar numero par
cont2=0
while cont2 < 10: 
    if cont2 % 2 == 0:
        print(cont2)
        cont2+=1 
        continue
    cont2+=1

