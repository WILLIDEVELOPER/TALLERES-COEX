
# 1.Desarrolle un algoritmo que permita leer 3 números enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
#  Ademas ninguno de los 3 numeros ingresados pueden ser iguales. En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.

n1 = int(input("Ingrese un numero entero "))
n2 = int(input("Ingrese un numero entero "))
n3 = int(input("Ingrese un numero entero "))

mayor = 0
menor = 0

if n1 < 0 or n2 < 0 or n3 < 0 :
    print("Alguno de los numeros no es valido. Ingrese un numero mayor o igual a 0.")
elif n1 == n2 or n1 == n3 or n2 == n3 :
    print("No puede aver numero iguales. Ingrese valores diferentes")
else:
    if n1 > n2 and n1 > n3 :
        mayor = n1
        if n2 > n3 :
            menor = n3
        else:
            menor = n2
    elif n2 > n1 and n2 > n3 :
        mayor = n2
        if n1 > n3 :
            menor = n3
        else:
            menor = n1
    elif n3 > n1 and n3 > n2 :
        mayor = n3
        if n1 > n2 :
            menor = n2
        else:
            menor = n1

    print("Los 3 numeros son: ", n1, " ", n2, " ", n3)
    print("el numero mayor es: ", mayor)
    print("el numero menor es: ", menor)
