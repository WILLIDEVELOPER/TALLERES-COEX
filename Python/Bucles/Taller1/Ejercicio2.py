# 2.Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. Estos numeros serviran para definir un intervalo. La funcion del algoritmo 
# sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m].

n = int(input("ingrese un numero: "))
m = int(input("ingrese otro numero: "))
sumatoria = 0

if(n >=0 and m >=0):
    for i in range(n, m+1):
        if(i % 2 == 0):
            print("Pares sumados: ")
            sumatoria += i
            print(i)
    print("\nLa sumatoria de los pares es: ",sumatoria)
else:
    print("Ingrese un rango valido!")
