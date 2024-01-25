# buscar numero primo
primo = True

num = int(input("Enter a number: "))

if num == 0 or num == 1:
    primo = True
else:
    for i in range(2,num//2+1):
        if num%i == 0: 
            primo = False


if primo:
    print(num, " es primo")
else:
    print(num, " no es primo") 

# buscar maximo comun divisor
def findMCD(a,b):

    while not b == 0:
        temp = b
        b = a%b
        a = temp
    return a


n1 = int(input("Enter first number: "))
n2 = int(input("Enter second number: "))

if n1 > n2:
   mcd =  findMCD(n1,n2)
   print("MCD de %s y %s es %s"%(n1,n2,mcd))
else:
   mcd =  findMCD(n2,n1)
   print("MCD de %s y %s es %s"%(n1,n2,mcd))
   

