var carros = [
    { marca: 'Mazda', modelo: 2029 },
    { marca: 'Chevrolet', modelo: 2017 },
    { marca: 'Jeep', modelo: 2018 },
    { marca: 'Ferrari', modelo: 2015 },
    { marca: 'Nissan', modelo: 2021 },
]

function modelos(carro) {
return carro.modelo >= 2018;
}

console.log("Los carros con modelo >2018 son: ", carros.filter(modelos));