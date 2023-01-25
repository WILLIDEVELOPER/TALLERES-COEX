let palabra = prompt("Ingrese una palabra")
let letra = prompt("Ingrese una letra")

while(letra.length < 1 || letra.length > 1){
    letra = prompt("Ingrese una letra")
}

const concatWords = (p,l,posi) =>{
    let np = p.replace(p[posi], l)
    
    console.log(np)

    return p
}

let resultado = concatWords(palabra, letra, 2)

console.log(resultado)