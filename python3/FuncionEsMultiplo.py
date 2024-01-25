def  esMultiplo(n1,n2):
    if n1%n2 == 0:
        return True
    else:
        return False
    
n1 = int(input("primer numero:"))
n2 = int(input("segundo numero:"))

if esMultiplo(n1,n2):
    print("%s es multiplo de %s"%(n1,n2))
else:
    print("%s no es multiplo de %s"%(n1,n2))