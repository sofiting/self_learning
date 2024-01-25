def leerFecha():
    day = int(input("Día:"))
    month = int(input("Mes:"))
    year = int(input("Año:"))
    return day,month,year

def calculaDiaJuli(d,m,a):
    diaj=0
    for m in range(1,m):
        diaj+=diaMes(m,a)
    diaj+=d
    return diaj

def diaMes(m,a):
    if m in [1,3,5,7,8,10,12]:
        return 31
    elif m in [4,6,9,11]:
        return 30
    elif m  == 2:
        if esBisiesto(a):
            return 29
        else:
            return 28
        
    
def esBisiesto(a):
    return (a%4==0 and not (a%100 == 0)) or a%400 == 0

d,m,a=leerFecha()
print("Día Juliano: ",calculaDiaJuli(d,m,a))