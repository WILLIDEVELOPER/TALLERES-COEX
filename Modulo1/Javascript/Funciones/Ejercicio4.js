let arreglo = []
let cont = 0
for (let index = 0; index < 3; index++) {
    arreglo[index] = []
    for (let j = 0; j < 3; j++) {
        cont++
        arreglo[index][j] = cont
    }
}
console.log(arreglo);