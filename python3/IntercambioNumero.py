# Dadas dos variables numéricas A y B, que el usuario debe teclear, 
# se pide realizar un algoritmo que intercambie los valores de ambas variables 
# y muestre cuanto valen al final las dos variables.

n1 = float(input("introduce numero 1:"))
n2 = float(input("introduce numero 2:"))

print(" numero 1 : %s , numero 2 es % s"%(n1,n2))

aux= n1
n1=n2
n2=aux
print("después de cambio : numero 1 : %s , numero 2 es % s"%(n1,n2))