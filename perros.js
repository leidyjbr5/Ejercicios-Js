var perritos = ['paco', 'pastor', 'douglas', 'pecas', 'simba', 'goku', 'rex', 'pluto', 'pelusa', 'perla'];

function nombres(perros) {
    return perritos.filter(function(el) {
      return el.toLowerCase().indexOf(perros.toLowerCase()) > -1;;
})
}

console.log("los nombre con p son: ", nombres ('p'));