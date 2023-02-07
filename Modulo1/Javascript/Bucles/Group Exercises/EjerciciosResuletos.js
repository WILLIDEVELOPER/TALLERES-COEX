// 3. Un supermercado quiere premiar a  sus 10 mejores clientes con un descuento en sus compras totales que puede ir desde en 10 % hasta un 100 % en el total de su compra
// cree un programa que le permita al cajero ingresar las compras  de los clientes teniendo en cuenta la categoria del producto y el total de la comprar, teniendo en cuenta la siguiente tabla
// categoria      ID
// lacteos         1
// aseo            2
// carnes          3
// verduras        4
// granos          5

// para participar el cliente debe hacer mas de 3 compras como minimo de diferentes categorias
// el descuento se da cuando el cliente oprime un boton y aleatoriamente genera un codigo que va de 1 a 10, el monto del descuento se determina segun la tabla
// 1--- 10 %
// 2--- 20 %
// 3--- 30 %
// 4----40 %
// 5----50 %
// 6--- 60%
// 7---70%
// 8---80%
// 9---90%
// 10 --100%
//  0 --- no obtiene descuento
//Imprima el total que debe pagar el cliente y si obtuvo un descuanto de cuanto fue. y que se imprima cual caterogia vendio mas entre todos los clientes que participaron


// 1. Un programa que me de el inventario de una tienda, adicional me deje agregarle o quitarle(vender) productos, si se desea vender me debe mostrar los productos vendidos, el cliente, el precio unitario, y el total.
// Si desea agregar debe mostrar los productos agregados la cantidad agregada, el proveedor. Y la cantidad final de cada producto

// // 1. Compra y venta, 

// let opcionProducto = parseInt(prompt("Quieres comprar(1) o vender(2) productos "))

// let cProductos = 0

// let cliente = ""

// let productos = ""

// let precioUnitario = 0.0

// let total = 0

// let proveedor = ""

// switch (opcionProducto) {
//     case 1:
//         proveedor = prompt(" Ingrese el nombre del proveedor ")
//         cProductos = parseInt(prompt(" Ingrese la cantidad de productos Agregados "))

//         precioUnitario = parseFloat(prompt(`ingrese el precio unitario: `))

//         for (let index = 0; index < cProductos; index++) {
//             productos = prompt(`Ingrese el nombre de el producto ${index + 1}`)
//             console.log(`Producto ${index + 1}`, productos)
//         }
//         total = precioUnitario *cProductos
//         console.log("La cantidad agregada es: ", cProductos)
//         console.log("Proveedor: ", proveedor)
//         console.log("Total a pagar: ", total)
//         break;
//     case 2:
//         alert("Vamos a vender! ")
//         cProductos = parseInt(prompt(" Ingrese la cantidad de productos vendidos "))

//         cliente = prompt("Ingrese el nombre del cliente ")

//         precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto "))

//         total = cProductos * precioUnitario

//         console.log(" Nombre del cliente ", cliente,
//                     " Cantidad de productos: ", cProductos,
//                     " Precio unitario: ", precioUnitario,
//                     "Total a pagar por la venta: ", total)
//         break;
//     default:
//         alert("Lo siento esta accion no existe.")
//         break;
// }


// 2. un cine desea premiar a un cliente cada 50 compras con un descuento de entre 10% a 70% dependiendo del dia de la semana que sea realizada la compra. El programa debe mostrar el nombre del cliente, la pelicula( se ingrese por codigo y solo haya dos), el asiento(no se puede repetir), el precio, el descuento, el precio con descuento, y el total, y la fecha.

let dia = prompt("Ingrese el dia de compra: (1 a 7)");
let cantCompras = 0;
let nombreCliente = prompt("Ingrese el nombre del cliente: ");
let pelicula = parseInt(prompt("Que pelicula se vera la 1 o la 2? "));
let asiento;
let precio;
let descuento;
let precioDesc;
let total;
let fecha = new Date();
let fechaCompra = 0;
let cantAsientos=0

switch (dia) {
  case 1:
    alert("Domingo, Descuento de 10% por cada 50 compras")
    cantCompras = parseInt(prompt("Ingrese la cantidad de compras del cliente"))
    switch (pelicula) {
        case 1:
            precio = parseFloat(prompt("Ingrese el precio de la peli 1"))
            cantAsientos = parseInt(prompt("Ingrese la cantidad de asientos para la peli 1"))
            for (let index = 0; index < cantAsientos; index++) {
                asiento = parseInt(prompt("Ingrese su asiento correspondiente "))
                if(asiento[index+1] == asiento[index]){
                    alert("No se puede repetir el asiento")
                }
                console.log("Asiento ", asiento)
            }
            
            break;
        case 2:
            precio = parseFloat(prompt("Ingrese el precio de la peli 2"))
            break;
        default:
            break;
    }
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
  case 7:
    break;
  default:
    break;
}

