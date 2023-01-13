# 6.Pedir dos números y decir si son múltiplos o no.


num1 = int(input("Ingrese un numero "))
num2 = int(input("Ingrese otro numero "))

resultado = num2 % num1

if num1 < 0 or num2 < 0 :
    print("Algun numero no es valido")
else:
    if resultado == 0 :
        print("El numero ", num1, "Es multiplo de ", num2)
    else:
        print("El numero ", num1, "No es multiplo de ", num2)
    



#  console.log(resultado, num1, num2)