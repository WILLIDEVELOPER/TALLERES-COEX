# 9.Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar. Ademas el numero debe ser positivo.

numero = int(input("Ingrese un numero "))

if numero <= 0 :
    print("El numero ingresado no es valido, debe ser positivo o mayor a cero")
else:
    if numero % 2 == 0 :
        print("El numero ", numero , " Es par")
    else:
        print("El numero ", numero , " Es impar")