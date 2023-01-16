let articulo = ""
let precioOriginal = 0
let precioDescuento = 0
let opcionPago = 0

for (let index = 0; index < 4; index++) {
    
    articulo = prompt(`Ingrese el nombre del articulo ${index +1}`)
    precioOriginal = parseFloat(prompt(`Ingrese el precio original del articulo ${index +1}`))
    opcionPago = parseInt(prompt(`Ingrese la opcion de pago (1 0 2) del articulo ${index +1}`))

    if(opcionPago == 1){
        alert("Pagara a contado, tiene 10% de descuento")
        precioDescuento = precioOriginal - (precioOriginal * 0.1)
    }else if(opcionPago == 2){
        alert("Pagara a credito, tiene 20% de descuento")
        precioDescuento = precioOriginal - (precioOriginal * 0.2)
    }else{
        alert("Opcion de pago no valida")
    }

    console.log("Articulo ", (index + 1), "tiene un precio original de: ", precioOriginal, 
    "La opcion de pago que escogio fue: ", opcionPago, "Su precio con descuento seria: ", precioDescuento)
    
}