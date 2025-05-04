function volume(raio) {
    let pi = 3.14159
    let resultado = (4.0 / 3) * pi * raio * raio * raio
    return resultado
}

let volume1 = volume(3)
let volume2 = volume(15)
let volume3 = volume(1523)

console.log(`VOLUME = ${volume1.toFixed(3)}`)
console.log(`VOLUME = ${volume2.toFixed(3)}`)
console.log(`VOLUME = ${volume3.toFixed(3)}`)
