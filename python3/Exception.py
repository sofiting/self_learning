while True:
    try:
        x = int(input("Introduce un número:"))
        print(10/x)
        break
    except ValueError:
        print("Debes introducir un número")
    except ZeroDivisionError:
        print("no se puede dividir por zero")
    else:
        print("ha producido algún error")
    finally:
        print("esta linea siempre ejecuta")
