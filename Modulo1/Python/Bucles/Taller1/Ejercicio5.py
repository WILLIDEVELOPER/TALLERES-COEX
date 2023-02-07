# 5. Diseñe un algoritmo que reciba un numero entero positivo mayor a 100 y luego imprima todos los numeros primos que hay antes de ese nuemro ingresado.

#si lo copie de google, porque demore 4 horas tratando de hacerlo y no me dio, pero todo lo que esta aqui abajo lo entiendo y ya lo mapie, y deje abajo comentado lo que habia intentado hacer, gracias juan, este tipo de ejercicios son los que valen la pena para mejorar

# recibir el numero
num = int(input("Ingresa un numero entero positivo mayor a 100: "))

# validar que sea un entero positivo mayor a 100
while num < 100:
    num = int(input("Ingresa un numero entero positivo mayor a 100: "))

# recorrer desde 2 hasta el numero dado
for i in range(2, num):
    es_primo = True
    # recorrer desde 2 hasta i-1
    for j in range(2, i):
        # si i es divisible entre j, no es primo
        if i % j == 0:
            es_primo = False
    # si es_primo sigue siendo True, es primo
    if es_primo:
        print(i)


# numero = int(input("Ingrese un numero: "))
# primo = 0
# siguienteNumero = numero-1

# if(numero > 0):
#     for i in range(numero-1, 0, -1):
#         if(i < siguienteNumero):
#             for j in range(siguienteNumero - 1, 0, -1 ):
#                 if(siguienteNumero % j != 0 and j != 1):
#                     primo = siguienteNumero
#             print("es primo",primo, siguienteNumero)
#             siguienteNumero = i
#         print(siguienteNumero)

                
