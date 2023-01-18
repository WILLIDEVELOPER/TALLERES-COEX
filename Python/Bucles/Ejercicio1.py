edadAnimal = 0
animalEstudiar = ""
muestra = 0
totalAnimales = 20+15+40
porcentaje = 0

i = 0

for i in range(0, 3):
    edadAnimal = int(input("Ingrese la edad del animal %s: "% i))
    if edadAnimal >= 0 and edadAnimal <= 1:
        animalEstudiar = input("Ingrese el animal a estudiar: ")
        if animalEstudiar == "elefantes":
            muestra = 20
            porcentaje = (muestra * 100)/ totalAnimales
            print("Elefantes a estudiar en la edad de 0 a 1 año ", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan los elefantes dentro de los animales de esta edad ", porcentaje)
        elif animalEstudiar == "jirafas":
            muestra = 15
            porcentaje = (muestra * 100)/ totalAnimales
            print("jirafas a estudiar en la edad de 0 a 1 año ", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan las jirafas dentro de los animales de esta edad ", porcentaje)
        elif animalEstudiar == "chimpances":
            muestra = 40
            porcentaje = (muestra * 100)/ totalAnimales
            print("chimpances a estudiar en la edad de 0 a 1 año ", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan los chimpances dentro de los animales de esta edad ", porcentaje)
    elif edadAnimal > 1 and edadAnimal < 3:
        animalEstudiar = input("Ingrese el animal a estudiar: ")
        if animalEstudiar == "elefantes":
            muestra = 20
            porcentaje = (muestra * 100)/ totalAnimales
            print("Elefantes a estudiar en la edad de 1 a 3 año ", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan los elefantes dentro de los animales de esta edad ", porcentaje)
        elif animalEstudiar == "jirafas":
            muestra = 15
            porcentaje = (muestra * 100)/ totalAnimales
            print("jirafas a estudiar en la edad de 1 a 3 año ", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan las jirafas dentro de los animales de esta edad ", porcentaje)
        elif animalEstudiar == "chimpances":
            muestra = 40
            porcentaje = (muestra * 100)/ totalAnimales
            print("chimpances a estudiar en la edad de 1 a 3 años ", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan los chimpances dentro de los animales de esta edad ", porcentaje)
    elif edadAnimal >= 3:
        animalEstudiar = input("Ingrese el animal a estudiar: ")
        if animalEstudiar == "elefantes":
            muestra = 20
            porcentaje = (muestra * 100)/ totalAnimales
            print("Elefantes a estudiar en la edad de 3 años o mayor", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan los elefantes dentro de los animales de esta edad ", porcentaje)
        elif animalEstudiar == "jirafas":
            muestra = 15
            porcentaje = (muestra * 100)/ totalAnimales
            print("jirafas a estudiar en la edad de 3 años o mayor", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan las jirafas dentro de los animales de esta edad ", porcentaje)
        elif animalEstudiar == "chimpances":
            muestra = 40
            porcentaje = (muestra * 100)/ totalAnimales
            print("chimpances a estudiar en la edad de 3 años o mayor ", muestra)
            print("Cantidad de animales ", totalAnimales)
            print("Porcentaje que ocupan los chimpances dentro de los animales de esta edad ", porcentaje)
