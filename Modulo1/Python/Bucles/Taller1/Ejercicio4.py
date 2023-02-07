# 4. Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

# 	1. Sumar 2 numeros
# 	2. Restar 3 numeros
# 	3. Multiplicar 2 numeros
# 	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
# 	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.

opciones = input("Que operacion quiere hacer: sumar, restar, dividir, multiplicar ")

while(opciones != "salir"):
    if(opciones == "sumar"):
        num1 = int(input("Ingrese un numero: "))
        num2 = int(input("Ingrese otro numero: "))
        suma = num1 + num2
        print("sumatoria: ", suma)
        opciones = input("Que operacion quiere hacer: sumar, restar, dividir ")
    elif (opciones == "restar"):
        num1 = int(input("Ingrese un numero: "))
        num2 = int(input("Ingrese otro numero: "))
        num3 = int(input("Ingrese otro numero: "))
        restar = num1-num2-num3
        print("resta: ", restar)
        opciones = input("Que operacion quiere hacer: sumar, restar, dividir ")
    elif (opciones == "multiplicar"):
        num1 = int(input("Ingrese un numero: "))
        num2 = int(input("Ingrese otro numero: "))
        multiplicar = num1 * num2
        print("Multiplicacion: ", multiplicar)
        opciones = input("Que operacion quiere hacer: sumar, restar, dividir ")
    elif (opciones == "dividir"):
        num1 = int(input("Ingrese un numero: "))
        num2 = int(input("Ingrese un numero: "))
        if(num2 != 0):
            dividir = num1/num2
            print("divicion: ", dividir)
            opciones = input("Que operacion quiere hacer: sumar, restar, dividir ")
        else:
            print("Ingrese un divisor valido.")
            num2 = int(input("Ingrese un numero: "))
    else:
        print("No existe este tipo de operacion.")
        opciones = input("Que operacion quiere hacer: sumar, restar, dividir ")



print("Adios y gracias por utilizar el servicio")

