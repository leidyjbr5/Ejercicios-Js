var n1 = prompt("ingrese un número: ","");
var n2 = prompt("ingrese segundo número: ","");
var n3 = prompt("ingrese tercer número: ","");
function mayor (n1, n2, n3) {
    if(n1>=n2 && n1>=n3){
        return n1;
    }else if (n2>n1 && n2>n3){
        return n2;
    } else{
        return n3;
    }
}
alert("el numero mayor es " + mayor (n1,n2,n3));