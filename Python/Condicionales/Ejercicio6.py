# 7.Pedir un número y decir si es un número negativo, si es positivo o cero.

numero = int(input("Ingrese un numero "))

if numero < 0 : 
    print("El numero ", numero, " es negativo")
elif numero > 0 :
    print("El numero ", numero, " es positivo")
else:
    print("El numero ", numero, " es cero")
