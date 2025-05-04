let consumo = (distancia, combustivel) => distancia / combustivel

let consumo1 = consumo(500, 35.0)
let consumo2 = consumo(2254, 124.4)
let consumo3 = consumo(4554, 464.6)

console.log(`CONSUMO 1 = ${consumo1.toFixed(3)} km/l`)
console.log(`CONSUMO 2 = ${consumo2.toFixed(3)} km/l`)
console.log(`CONSUMO 3 = ${consumo3.toFixed(3)} km/l`)
