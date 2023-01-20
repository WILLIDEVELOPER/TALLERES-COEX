# 6. Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios de la siguiente manera:

# 	1. Si el precio es mayor a $100 el 10%
# 	2. Si el precio es mayor a $100 y menor a $200 el 20%
# 	3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante ingresar la cantidad de productos y el precio de cada uno. El algoritmo
# tambien debe imprimir en pantalla el calculo de los descuentos.

cantProductos = int(input("Ingresa la cantidad de productos: "))
descuento = 0
precioTotal = 0

for i in range(0, cantProductos):
    precioProd = float(input("Ingresa el precio del producto %s: "%i+1))
    if(precioProd > 100):
        descuento = 0.1
    elif(precioProd > 100 and precioProd < 200):
        descuento = 0.2
    elif(precioProd > 200):
        descuento = 0.25
    precioTotal = precioProd - (precioProd * descuento)
    print("EL precio del producto %s es: "%i, precioProd)
    print("El descuento del producto %s es del: "%i, (descuento*100), "%")
    print("El precio total con descuento del producto %s es:"%i, precioTotal)