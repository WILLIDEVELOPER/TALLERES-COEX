let inventario = []
let empleados = {
    nombre: "",
    usuario: "",
    password: "",
}


let opcion = parseInt(prompt(`Ingrese lo que desea hacer:\n
1. -agregar empleado\n
2. -listar empleados\n
3. -salir`))

let cantEmpleados = 0
while (opcion != 3) {
    switch (opcion) {
        case 1:
            cantEmpleados = parseInt(prompt(`Cuantos empleados desea agregar?`))
            for (let index = 0; index < cantEmpleados; index++) {
                empleados.nombre = prompt(`Ingrese el nombre del empleado ${index+1}`)
                empleados.usuario = prompt(`Ingrese el usuario del empleado ${index+1}`)
                empleados.password = prompt(`Ingrese la contraseña del empleado ${index+1}`)
                inventario.push(empleados)
                empleados = {}
            }
            opcion = parseInt(prompt(`Ingrese lo que desea hacer:\n
            2. -listar empleados\n
            3. -salir`))
            break;
        case 2:
            if(inventario.length != 0){
                alert("Se puede listar empleados")
                console.log("USUARIOS:");
                inventario.forEach((e) =>{
                    console.log(`Nombre del usuario: ${e.nombre}
                    Usuario del empleado:  ${e.usuario}
                    Contraseña del usuario: ${e.password}`);
                })
                opcion = parseInt(prompt(`Puede salirse o seguir agregando empleados:\n
                1. agregar empleados \n
                3. -salir`))
            }else{
                alert("Ocurrio un error, no se puede hacer inventario sin antes agregar empleados")
                opcion = parseInt(prompt(`Ingrese lo que desea hacer:\n
                1. -agregar empleado\n
                2. -listar empleados\n
                3. -salir`))
            }
            break;
        default:
            alert("Esta opcion de menu no existe")
            opcion = parseInt(prompt(`Ingrese lo que desea hacer:\n
                1. -agregar empleado\n
                2. -listar empleados\n
                3. -salir`))
            break;
    }
}