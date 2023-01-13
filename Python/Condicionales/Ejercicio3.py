# 3.Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar.

n = int(input("Ingrese un numero entero: "))

if n <= 0 :
    print("El numero ingresado no es valido")
else:
    if n % 2 == 0 :
        print("El numero ", n , " Es par")
    else:
        print("El numero ", n , " Es impar")
    
