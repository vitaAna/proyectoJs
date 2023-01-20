let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito= JSON.parse(productosEnCarrito);
const carritoVacio= document.querySelector("#carrito-vacio");
const carritoProductos= document.querySelector("#carrito-productos");
const carritoAcciones= document.querySelector("#carrito-acciones");
const carritoComprado= document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar= document.querySelector("#carrito-acciones-vaciar");
let total= document.querySelector("#total");
const botonComprar=document.querySelector("#carrito-acciones-comprar");



function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito
        .length > 0) {

        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");

        carritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
            <small>Título</small>
            <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>"${producto.cantidad}"</p>
            </div>
            <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>"$${producto.precio}"</p>
            </div>
            <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$"${producto.precio * producto.cantidad}"</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16"
            height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg></button>
        `;
            carritoProductos.append(div);
        })

    } else {
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    };
    actualizarBotonesEliminar();
    actualizarTotal()
    
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);   
    });  
};

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index= productosEnCarrito
    .findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify
    (productosEnCarrito));  
};

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){
    productosEnCarrito.length= 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
};

function actualizarTotal(){
    let nuevoTotal= productosEnCarrito.reduce((acc,producto)=> acc + producto.precio*producto.cantidad, 0);
    total.innerText= nuevoTotal;
}

botonComprar.addEventListener("click",comprarCarrito);
function comprarCarrito(){
    productosEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

carritoVacio.classList.add("disabled");carritoProductos.classList.add("disabled");
carritoAcciones.classList.add("disabled");
carritoComprado.classList.remove("disabled");
}

botonComprar.addEventListener("click", ()=>{
    swal.fire({
        position: "center",
    icon: 'success',
    title: "Muchas gracias por tu compra!",
    showConfirmButton: false,
    timer: 1500
        
    });
});

