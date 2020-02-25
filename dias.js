var semana = prompt("ingrese un dia de la semana: ","");
function laboral (semana) {
    if(semana == 'lunes'){
        return "Es un día laboral 🙂";
    }else if (semana == 'martes'){
    return "Es un día laboral 🙂";
    }else if(semana == 'miercoles'){
    return "Es un día laboral 🙂";
    }else if(semana == 'jueves'){
    return "Es un día laboral 🙂";
    }else if(semana == 'viernes'){
    return "Es un día laboral 🙂";
    }else if(semana == 'sabado'){
    return "No es un día laboral 😉";
    }else if(semana == 'domingo'){
    return "No es un día laboral 😉";
    }else{
        return "El día ingresado no es valido";
    }  
}
var resultado = laboral (semana);
resultado;