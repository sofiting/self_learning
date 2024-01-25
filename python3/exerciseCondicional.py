#positive,negative o 0
number = int (input("enter a number: "))
if number > 0:
    print("%s is a positive number"%(number))
elif number< 0:
    print("%s is a negative number"%(number))
elif number==0:
     print("%s is a neutral number"%(number))
else:
     print("error")

#sino es "pepe" y "asdasd" mostra error
user = str(input("enter your user name: "))
password = str(input("enter your password: "))

if not (user == "pepe" and password == "asdasd"):
    print("error")
else:
    print("congrats!! you entered the system")

n1 = int(input("Enter first number: "))
n2 = int(input("Enter second number: "))
n3 = int(input("Enter third number: "))

if n1 > n2 and n1 > n3:
   if n2 > n3:
       print(n1," ",n2," ",n3)
   else:
       print(n1," ",n3," ",n2)
elif n2 > n1 and n2 > n3:
    if n1 > n3:
        print(n2," ",n1," ",n3)
    else:
         print(n2," ",n3," ",n1)
elif n3 >= n1 and n3 >= n2:
    if n1 > n2:
         print(n3," ",n1," ",n2)
    else:
         print(n3," ",n2," ",n1)

# pide una fecha si es correcta
dia = int(input("Introduce el dia:"))
mes = int(input("Introduce el mes:"))
year = int(input("Introduce el año:"))

if mes == 1 or mes == 3 or mes == 5 or mes == 7 or mes == 8 or mes == 10 or mes == 12:
	dias_del_mes = 31
elif mes == 4 or mes == 6 or mes == 9 or mes == 11:
	dias_del_mes = 30
elif mes == 2:
	if (year % 4 == 0 and not (year % 100 == 0)) or year % 400 == 0:
		dias_del_mes = 29
	else:
		dias_del_mes = 28
else:
	print("Fecha incorrecta")
	
if dia < 0 or dia > dias_del_mes:
	print("Fecha incorrecta")
else:
	print("Fecha correcta")