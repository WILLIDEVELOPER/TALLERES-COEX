# 3.Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 despues debe calcular el factorial de este numero
# e imprimirlo en pantalla.}


numero = int(input("Ingrese un numero: "))
factorial = 0

primera = numero
segunda = primera-1

if(numero > 10 and numero < 15):
    for i in range(numero, 0, -1):
        if(i < numero):
            factorial = primera *i
            primera = factorial
            
print("Factorial: ", factorial)