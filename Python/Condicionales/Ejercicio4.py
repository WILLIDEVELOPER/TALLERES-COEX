# 4.Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
# A = 19 y 20.
# B = 16, 17 y 18.
# C = 13, 14 y 15. 
# D = 10, 11 y 12.
# E = 1 hasta 9.

# Las notas solo pueden ser numeros entre 1 y 20.

nota = int(input("Ingrese una nota "))

calificacion = ""

if nota < 0 :
    print("Esta nota no es valida")
else:
    if nota == 19 or nota == 20 :
        calificacion = "A"
    elif nota == 16 or nota == 17 or nota == 18 :
        calificacion = "B"
    elif nota == 13 or nota == 14 or nota == 15 :
        calificacion = "C"
    elif nota == 10 or nota == 11 or nota == 12 :
        calificacion = "D"
    elif nota < 10 and nota > 0 :
        calificacion = "E"
    else:
        calificacion = "F"
        print("Perdio el examen, su nota es: ", nota)
        print("Su calificacion es de rango: ", calificacion)
    
    print("La nota de su examen es: ", nota)
    print("Su calificacion es de rango: ", calificacion)



