var nota1 = parseInt(prompt("ingrese la primer nota",""));
var nota2 = parseInt(prompt("ingrese la segunda nota",""));
var nota3 = parseInt(prompt("ingrese la tercera nota",""));
function promedio (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3;
}
var resultado = promedio (nota1, nota2, nota3);
resultado