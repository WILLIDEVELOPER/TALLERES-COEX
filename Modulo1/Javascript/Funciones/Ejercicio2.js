
let salarioPersonal = parseFloat(prompt("Ingrese el salario actual del vendedor: "))
let nAutosVend = parseInt(prompt("Ingrese el numero de autos vendidos: "))
let valorVenta = 0
let total = 0

for (let index = 0; index < nAutosVend; index++) {
    valorVenta += parseFloat(prompt(`Ingrese el valor de la venta sobre el auto ${index+1}`))
}
total = calcularSalario(salarioPersonal, valorVenta, nAutosVend)

console.log("Salario total del vendedor: ", total)


function calcularSalario(salario, valorVenta, nAutosVendidos ){
    let comision = nAutosVendidos * 170000
    let añadidura = valorVenta * 0.05
    salario = salario + comision +añadidura

    return salario
}

