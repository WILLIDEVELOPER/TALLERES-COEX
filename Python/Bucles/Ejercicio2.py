n = int(input("Ingrese el numero de vendedores "))
sueldoBase = 0
numeroVentas = 3
comisiones = 0
valorVenta = 0
total = 0

for i in range(1, n+1):
    sueldoBase = float(input("Ingrese el sueldo base del vendedor %s:"%(i)))    
    for j in range(1, numeroVentas+1):
        valorVenta = float(input("Ingrese el valor de la venta %s: "%(j)))
        comisiones += (valorVenta * 0.1)
    print("Comisiones del vendedor %s: "%i,comisiones)
    total = sueldoBase + comisiones
    print("Total de sueldo a pagar al vendedor %s: "%i,total)