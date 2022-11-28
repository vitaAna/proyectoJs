const Marca = "MV INDUMENTARIA";
let nombre = prompt("ingrese su nombre para registrarse");
console.log("ingresó " + nombre);

if (nombre != " ") {
    alert("hola " + nombre + "se registró con éxito en " + Marca
     +"ya puede comprar!")

}

function sumar(numeroUno, numeroDos, numeroTres) {
    console.log("el resultado es" + (parseFloat(uno) + parseFloat(dos) + parseFloat(tres)))
}
let uno = prompt("ingrese el valor de la primer prenda");
let dos = prompt("ingrese el valor de la segunda prenda");
let tres = prompt("ingrese el valor de la tercer prenda");
sumar(uno, dos, tres);

alert("el total es " + (parseFloat(uno) + parseFloat(dos) + parseFloat(tres)));


let envios = prompt("ingrese su zona para saber el valor de envios :" + "\n" + "1) zona este" + "\n" + "2) zona este" + "\n" + "3) zona norte" + "\n" + "4) zona sur");
if (envios == "1" || envios.toLowerCase() == "zona oste") {
    console.log("el valor es de $500");
    alert("el valor es de $500")
} else if (envios == "2" || envios.toLowerCase() == "zona este") {
    console.log("el valor es de $2000");
    alert("el valor es de $2000")
} else if (envios == "3" || envios.toLowerCase() == "zona norte") {
    console.log("el valor es de 2000")
    alert("el valor es de $2000")
} else if (envios == "4" || envios.toLowerCase() == "zona sur") {
    console.log("el valor es de $2000");
    alert("el valor es de $2000")
}

let zona = parseInt(prompt("elige tu zona para saber los dias de entrega:" + "\n" + "1-Zona Oeste" + "\n" + "2-Zona Este" + "\n" + "3-Zona Norte" + "\n" + "4-Zona Sur."));

switch (zona) {
    case 1:
        alert("estaremos repartiendo los dias Lunes, Miercoles y Viernes")
        break;
    case 2:
        alert("estaremos repartiendo los dias Martes y Jueves")
        break;
    case 3:
        alert("estaremos repartiendo los dias Lunes y Miercoles")
        break;
    case 4:
        alert("estaremos repartiendo los dias Martes y Viernes")
        break;
    default:
        alert("solo puedes ingresar un numero del 1 al 4");
        break;
}

let inicio = prompt("para conseguir un descuento solo tenes que elegir un numero del 1 al 10")
while (inicio != "7") {
    alert(inicio + "segui participando");
    inicio = prompt("desea finalizar?ingrese 1, de lo contrario ingrese 2")
}