// 10.Crea un algoritmo que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las siguientes operaciones:
	
// 	A. Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero
// 	   mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones 
// 	   anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
	
// 	B. Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor 
// 	   inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

let diametroRueda = parseFloat(prompt("Ingrese el diametro de la rueda"))
let grosorRueda = parseFloat(prompt("Ingrese el grosor de la rueda en metros"))

if (diametroRueda > 1.4) {
    alert("La rueda es para un vehiculo grande.")
    if(grosorRueda < 0.4){
        alert("El grosor para esta rueda es inferior al recomendado")
    }
}else if(diametroRueda <= 1.4  && diametroRueda > 0.8){
    alert("La rueda es para un vehículo mediano")
    if(grosorRueda < 0.25){
        alert("El grosor para esta rueda es inferior al recomendado")
    }
}else{
    alert("La rueda es para un vehículo pequeño")
}
