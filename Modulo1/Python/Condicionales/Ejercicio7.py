# 8.Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 
# caso contrario mostrar false, utilizar el operador ternario.

num1 = int(input("Ingrese el primer numero "))
num2 = int(input("Ingrese el segundo numero "))
num3 = int(input("Ingrese el tercer numero "))

promedio = 0


if num1 < 1 or num1 > 10 or num2 < 1 or num2 > 10 or num3 < 1 or num3 > 10 :
    print("cada uno de los 3 numeros tiene que tener un valor en el rango de 1 a 10")
else:
    promedio = (num1 + num2 + num3 )/ 3
    print("El promedio es: ", promedio)
    if promedio > 5 :
        print("El promedio es mayor a 5?")
        print(True)
    else:
        print("El promedio es mayor a 5?")
        print(False) 