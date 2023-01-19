# 1. Haga la sucesion de Fibonacci
numero = int(input("Ingrese el rango maximo del fibonacci: "))
n = 0
m = 1
suma = 0
for i in range(0, numero+1):
    suma = suma + n
    n = m 
    m = suma
    print(suma)      
    
    