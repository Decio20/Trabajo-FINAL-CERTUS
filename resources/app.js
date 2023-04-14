/* Almacenar en una Variable los botones */
let botones = document.querySelectorAll(".container > .card > button");

/* Agregar el escucha del evento click en los botones */
botones.forEach(elemento => {
    elemento.addEventListener("click", agregarCarrito);
})

/* Función para aregar el Carrito */
function agregarCarrito(producto){
    /* Conseguir los Datos de mi Producto */
    let tituloProducto = producto.target.parentElement.querySelector("h2");
    let precioProducto = producto.target.parentElement.querySelector("p");

    /* Ahora colocar en el Modal */
    let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");

    modalCuerpo.innerHTML += "<h3>"+tituloProducto.innerHTML +"</h3><p>"+precioProducto.innerHTML+"</p>";

    /* Condicional para mostrar Carrito Vacío o no */
    if(modalCuerpo.querySelector("p").innerHTML=="Carrito vacío."){
        modalCuerpo.innerHTML ="";
    }

    /* Boton Limpiar */
    let modalFooter = document.querySelector("#ventanaCarrito > div > div > div.modal-footer");
    let btnLimpiar = modalFooter.querySelector(".btn-limpiar");

    btnLimpiar.addEventListener("click", borrarCarrito);

    function borrarCarrito(){
        modalCuerpo.innerHTML="";
        agregarCarrito();
    }

}