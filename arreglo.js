var arreglo = [ 1, 5, 9, 8, 6 ];

function sumaArreglo( arr ){
    var total = 0;
    for (i=0; i<arr.length; i++){
        total += arr[i];
    }

    return total;
}

var totalarreglo = sumaArreglo(arreglo);
console.log("La suma del arreglo es = ", totalarreglo );