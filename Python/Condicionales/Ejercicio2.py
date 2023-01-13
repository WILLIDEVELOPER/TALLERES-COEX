# 2.Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
# debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la
# base multiplicado por 2 y sumarle 10.

base = float(input("Ingrese la base del triangulo en cm "))
altura = float(input("Ingrese la altura del triangulo en cm "))

areaT = 0

if base < 0 or altura < 0 :
    print("Los datos tienen que ser mayor a 0")
else:
    if base == altura :
        print("Los 2 valores ingresados no pueden ser iguales")
    else:
        if altura > 4 and base > 5 :
            areaT = (base * altura)/2
            print("El area es: ", areaT)
        else:
            print("Valor de la base: ", ((base * 2) + 10))
