/*let name = document.getElementById("name")

let surname= document.getElementById("surname")

let age = document.getElementById("age")

let email = document.getElementById("email")

let phone = document.getElementById("phone")

let description = document.getElementById("description")

class Cliente {
    constructor(nombre, apellido, edad, email ,telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;

    }
    toString() {
        return this.nombre + " " + this.apellido;
    }
}

let datosContacto= document.querySelector("#datosContacto");
let names= document.querySelector("#names");
let surname= document.querySelector("surname");
let age= document.querySelector("#age");
let email= document.querySelector("#email");
let phone= document.querySelector("phone");
let totalDatosContacto= document.querySelector("#totalDatosContacto");

datosContacto.addEventListener ("submit", (event)=>{
    event.preventDefault();

    if ((names.value !=="")&& (surname.value !=="")&& (age.value !=="")&& (email.value !=="")&& (phone.value !=="")) {

        totalDatosContacto.innerText = ("Muchas gracias por contactarnos"+ "\n" + "nombre:"+ (names.value).toUpperCase()+ "\n" + "apellido:"+ (surname.value).toUpperCase()+ "\n" + "edad:"+ (age.value).toUpperCase()+ "\n" + "email:" + (email.value).toUpperCase()+ "\n" + "teléfono:" + (phone.value));



        names.focus();
        datosContacto.reset();
        
    }
})*/

let btn= document.getElementById("mainButton");
let name=document.getElementById("name");
let lastName=document.getElementById("lastName");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let consulta=document.getElementById("consulta");

let myForm=document.getElementById("myForm");

name.addEventListener("change", (evt) => {
    console.log("-->evento change en el input nombre", evt.target.value)
});
lastName.addEventListener("change", (evt) => {
    console.log("-->evento change en el input apellido", evt.target.value)
});
email.addEventListener("change", (evt) => {
    console.log("-->evento change en el input email", evt.target.value)
});
phone.addEventListener("change", (evt) => {
    console.log("-->evento change en el input telefono", evt.target.value)
});
consulta.addEventListener("change", (evt) => {
    console.log("-->evento change en el input consulta", evt.target.value)
});




