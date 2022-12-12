const Marca = "MV INDUMENTARIA";

//formulario del cliente
class Cliente {
    constructor(nombre, apellido, telefono, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.mail = mail;

    }
    toString() {
        return this.nombre + " " + this.apellido;
    }
}
let clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese Su Apellido").toLocaleUpperCase(), prompt("Ingrese Su telefono").toLocaleUpperCase(), prompt("Ingrese Su Mail"));
console.log("los valores del cliente son", clienteUno)
console.log("el cliente se llama", clienteUno.toString())
alert("gracias y bienvenidos a" + Marca)

//simulando un carrito de compras utilizando arrays,bucle y metodos de busqueda
let productos = [{
        nombre: "remera",
        precio: 1200
    },
    {
        nombre: "short",
        precio: 2000
    },
    {
        nombre: "jeans",
        precio: 7000
    },
    {
        nombre: "vestido",
        precio: 1500
    },
    {
        nombre: "campera",
        precio: 5000
    },
];
let carrito = []

let seleccion = prompt("hola desea comprar un producto? ingrese si o no")
while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar un producto? ingrese si o no")
}

if (seleccion == "si") {
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todosLosProductos.join(" \n "))
} else if (seleccion == "no") {
    alert("gracias visitar" + Marca + "hasta pronto")

}

while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0;

    if (producto == "remera" || producto == "short" || producto == "jeans" || producto == "vestido" || producto == "campera") {
        switch (producto) {
            case "remera":
                precio = 1200;
                break;
            case "short":
                precio = 2000;
                break;
            case "jeans":
                precio = 7000;
                break;
            case "vestido":
                precio = 1500;
                break;
            case "campera":
                precio = 5000;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("cuantas unidades quiere llevar?"));
        carrito.push({
            producto,
            unidades,
            precio
        })
        console.log(carrito);
    } else {
        alert("no tenemos ese producto");
    }
    seleccion = prompt("desea seguir comprando? si o no")
    while (seleccion == "no") {
        alert("gracias por la compra, hasta pronto" + Marca)
        carrito.forEach((carritoFinal) => {
            console.log(`producto:${carritoFinal.producto}, unidades:${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

let total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`el total a pagar por su compra es:${total}`);
alert(`el total a pagar por su compra es:${total}`);


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
} else {
    alert("debe ingresar un numer del 1 al 4")
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

