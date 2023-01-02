//Productos
const productos=[
    //Pantalones
    {
        id: "cargo-01",
        titulo:"Cargo",
        imagen: "./images/cargo-beige.jpg",
        categoria:{
            nombre:"Pantalones",
            id: "pantalones",
        },
        precio: 4000,
    },
    {
        id:"jeans-recto",
        titulo:"Jeans Recto",
        imagen:"./images/jean-recto.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones",
        },
        precio:4500
    },
    
    {
        id:"jeans-mom-01",
        titulo:"Jeans Mom",
        imagen:"./images/jeanMom.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones",
        },
        precio:45000,
    },
    {
        id:"jeans-mom-02",
        titulo:"Jeans",
        imagen:"./images/mom-women.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones",
        },
        precio:4500,
    },
    {
        id:"palazo-floral",
        titulo:"Palazo Floral",
        imagen:"./images/palazo-floral.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones",
        },
        precio:4500,
    },
    {
        id:"pantalon-verde",
        titulo:"Pantalon T/Alto",
        imagen:"/images/pabtalon-verde tiro-alto.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones",
        },
        precio:4500,
    },
    {
        id:"palazo-negro",
        titulo:"Palazo Negro",
        imagen:"./images/palazo-negro-de-vestir.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones",
        },
        precio:4500,
    },
    //Abrigos
    {
        id:"buzo-batik",
        titulo:"Buzo Batik",
        imagen:"./images/buzo-batik.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:5000,
    },
    {
        id:"buzo-clasico",
        titulo:"Buzo Clasico",
        imagen:"./images/buzo-verde.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:5000,
    },
    {
        id:"campera-corderito",
        titulo:"Campera Corderito",
        imagen:"./images/campera-corderito-beige.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:8000,
    },
    {
        id:"campera-escocesa",
        titulo:"Campera Escocesa",
        imagen:"./images/campera-escocesa.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:8000,
    },
    {
        id:"campera-inflada",
        titulo:"Campera Inflada",
        imagen:"./images/campera-inflada.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:8000,
    },
    {
        id:"tapado-amarillo",
        titulo:"Tapado Amarillo",
        imagen:"./images/tapadoAmarillo.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:10000,
    },
    {
        id:"tapado-azul",
        titulo:"Tapado Azul",
        imagen:"./images/tapadoAzul.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:10000,
    },
    {
        id:"maxibuzo-bolsillo",
        titulo:"Maxibuzo C/Bolsillo",
        imagen:"/images/maxibuzo-beige.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:5000,
    },
    {
        id:"maxibuzo-franjas",
        titulo:"Maxibuzo C/Franjas",
        imagen:"./images/maxibuzo-franjas-en-mangas.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:5000
    },
    {
        id:"polera-poncho",
        titulo:"Polera Poncho",
        imagen:"./images/polera-poncho gris.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:6000,
    },
    {
        id:"pullover-estampado",
        titulo:"Pullover Estampado",
        imagen:"./images/pulover-verde-estampado.jpg",
        categoria:{
            nombre:"Abrigos",
            id:"abrigos",
        },
        precio:6000,
    },
    //Polleras-Shorts
    {
        id:"pollera-strass",
        titulo:"Pollera Strass",
        imagen:"./images/engomada-c-faja-strass.jpg",
        categoria:{
            nombre:"Polleras-Shorts",
            id:"polleras-shorts",
        },
        precio:3500
    },
    {
        id:"pollera-jeans-rotura-01",
        titulo:"Pollera Jeans Rotura",
        imagen:"./images/falda-jeans-azul-rotura.jpg",
        categoria:{
            nombre:"Polleras-Shorts",
            id:"polleras-shorts",
        },
        precio:3500
    },
    {
        id:"pollera-jeans-rotura-02",
        titulo:"Pollera Jeans",
        imagen:"./images/pollera-negra-jeans.jpg",
        categoria:{
            nombre:"Polleras-Shorts",
            id:"polleras-shorts",
        },
        precio:3500,
    },
    {
        id:"short-rayado",
        titulo:"Short Rayado",
        imagen:"./images/short-01.jpg",
        categoria:{
            nombre:"Polleras-Shorts",
            id:"polleras-shorts",
        },
        precio:4000,
    },
    {
        id:"short-lino",
        titulo:"Short Lino",
        imagen:"./images/short-02.jpg",
        categoria:{
            nombre:"Polleras-Shorts",
            id:"polleras-shorts",
        },
        precio:4000,
    },
    {
        id:"short-jeans",
        titulo:"Short Jeans",
        imagen:"./images/short-03.jpg",
        categoria:{
            nombre:"Polleras-Shorts",
            id:"polleras-shorts",
        },
        precio:4000,
    },
    //Vestidos-Monos
    {
        id:"vestido-strapless",
        titulo:"Vestido Strapless",
        imagen:"./images/vestido-cuatro.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"vestido-bretel-fino",
        titulo:"Vestido B/Fino",
        imagen:"./images/vestido-seis.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"vestido-con-encaje",
        titulo:"Vestido C/Encaje",
        imagen:"./images/vestido-uno.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"vestido-largo-estampado",
        titulo:"Vestido Largo Estamp.",
        imagen:"./images/vestidos-dos.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"mono-cierre",
        titulo:"Mono C/Cierre",
        imagen:"./images/mono-cinco.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"mono-volado",
        titulo:"Mono C/Volado",
        imagen:"./images/mono-dos.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"mono-strapless",
        titulo:"Mono Strapless",
        imagen:"./images/mono-ocho.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"mono-corto-estampado",
        titulo:"Mono M/C Estamp",
        imagen:"./images/mono-uno.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"Mono-cadena",
        titulo:"Mono C/Cadena",
        imagen:"./images/mono-siete.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    {
        id:"Mono-cruzado",
        titulo:"Mono Cruzado",
        imagen:"./images/mono-seis.jpg",
        categoria:{
            nombre:"Vestidos-Monos",
            id:"vestidos-monos",
        },
        precio:5000
    },
    //Remeras
    {
        id:"remera-cuello-V",
        titulo:"Remera Cuello V",
        imagen:"./images/remera-cuello-V-gris-oferta.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-rock",
        titulo:"Remera Rock",
        imagen:"./images/remera-rock-oferta.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-tigre",
        titulo:"Remera Tigre",
        imagen:"./images/remara-bca-tigre.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-star",
        titulo:"Remera Star",
        imagen:"./images/remera-negra-star.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-floral",
        titulo:"Remera Floral",
        imagen:"./images/remera-cuatro.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-montaña",
        titulo:"Remera Montaña",
        imagen:"./images/rem-bordo-estamp-oferta.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-volados",
        titulo:"Remera M/Volados",
        imagen:"./images/remera-manga-volado-oferta.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-s/m-c/cuello",
        titulo:"Musculosa C/Cuello",
        imagen:"./images/remera-seis.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-cuero",
        titulo:"Remera Cuero",
        imagen:"./images/remera-tres.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    {
        id:"remera-jungla",
        titulo:"Remera Jungla",
        imagen:"./images/remera-siete.jpg",
        categoria:{
            nombre:"Remeras",
            id:"remeras",
        },
        precio:2500
    },
    //Blusas-Camisas
    {
        id:"blusa-blanca",
        titulo:"Blusa Blanca",
        imagen:"./images/blusa-bca.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"blusa-broderi",
        titulo:"Blusa C/Broderí",
        imagen:"./images/blusa-dos.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"blusa-lunares",
        titulo:"Blusa Lunares",
        imagen:"./images/blusa-lunares.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"camisa-escocesa",
        titulo:"Camisa Escocesa",
        imagen:"./images/camisa-dos.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"camisa-volados-jeans",
        titulo:"Camisa Volados",
        imagen:"./images/camisa-volado-y-puño-jean.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"blusa-cuello-V",
        titulo:"Blusa Cuello V",
        imagen:"./images/blusa-marron.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"blusa-transparente",
        titulo:"Blusa Transparente",
        imagen:"./images/blusa-neg-transp-en-manga.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"blusa-volado",
        titulo:"Blusa Volado",
        imagen:"./images/blusa-tres.png",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"blusa-M/C",
        titulo:"Blusa M/C",
        imagen:"./images/blusa-uno.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
    {
        id:"camisa-rayada",
        titulo:"Camisa Rayada",
        imagen:"./images/camisa-uno.jpg",
        categoria:{
            nombre:"Blusas-Camisas",
            id:"blusas-camisas",
        },
        precio:4500
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

function cargarProductos(productosElegidos) {

    cargarProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        
        contenedorProductos.append(div);

    })
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            cargarProductos(productos);
        } 
    })
})

