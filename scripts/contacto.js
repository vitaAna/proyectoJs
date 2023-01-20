// --------- GUARDAMOS NUESTRO FORMULARIO E INPUTS EN CONSTANTES ---------------
const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")

// --------- OBJETO CON NUESTRAS EXPRESIONES REGULARES ---------------
const expresiones = {
    
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    telefono: /^\d{10,14}$/, // ACEPTARA MINIMO 10 Y MAXIMO 14 NÚMEROS
    dni: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/,//Min un millon(7 digitos),max 999 millones(9 digitos),debe permitir puntos de mil opcionalmente
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES    
}

// -------------- OBJETO CON NUESTROS CAMPOS ----------------------
const campos = {
    nombre: false,
    apellido: false,
    telefono: false,
    dni: false,
    correo: false,
}
const validarFormulario=(e)=>{
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, "apellido");
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
        case "dni":
            validarCampo(expresiones.dni, e.target, "dni");
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;   
    }
}

// -------------- VALIDAMOS NUESTROS INPUTS ------------------------
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        
    } else {
           document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
           document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
           document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
           document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
           document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
           campos[campo] = false;
           
        }
}

// --------- CAPTURAMOS CADA VEZ QUE EL USUARIO PRESIONA UNA TECLA ---------------
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


// --------- VALIDAMOS TODO NUESTRO FORMULARIO ---------------
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const $terminos = document.getElementById("terminos");
    if(campos.nombre && campos.apellido && campos.telefono && campos.dni && campos.correo) {
        // formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
            document.getElementById("formulario__grupo-terminos").style.display = "none";

        }, 3000);

        document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
            icono.classList.remove("formulario__grupo--correcto");
        });

        setTimeout(() => {
            location.reload();
        }, 5000);

    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});



