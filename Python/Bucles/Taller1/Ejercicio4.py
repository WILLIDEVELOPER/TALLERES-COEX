# 4. Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

# 	1. Sumar 2 numeros
# 	2. Restar 3 numeros
# 	3. Multiplicar 2 numeros
# 	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
# 	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.

opciones = input("Que operacion quiere hacer: sumar, restar, dividir ")

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
        opciones = input("Que operacion quiere hacer: sumar, restar, dividir ")

print("Adios y gracias por utilizar el servicio")

