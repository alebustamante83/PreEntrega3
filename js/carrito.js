const contenedorCarrito = document.getElementById('carrito-productos')
const total = document.getElementById('total')
const botonVaciarCarrito = document.getElementById('vaciar-carrito')
const carritoVacio = document.getElementById('carrito-vacio')

carrito = JSON.parse(localStorage.getItem('carrito'))
//------------------------------------------------------------------------------------------
function cargarCarrito() {
    contenedorCarrito.innerHTML=""
    if (carrito.length > 0) {
        console.log(carritoVacio)
        carritoVacio.classList.add("disabled")
        carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add ('carrito-productos')
        div.innerHTML = `
            <div> 
                <h3>MARCA</h3>
                <p>${prod.marca}</p> 
           </div>
            <div> 
                <h3>PRECIO</h3>
                <p>$${prod.precio}</p> 
            </div>
            <div> 
                <h3>CANTIDAD</h3>
                <p>${prod.cantidad}</p> 
            </div>
            <div> 
                <h3>TOTAL</h3>
                <p>$${prod.precio * prod.cantidad}</p> 
            </div>
                <button id="eliminar${prod.id}" class="boton-eliminar">Eliminar</button>
            `
        contenedorCarrito.append(div)
        const botonEliminar = document.getElementById(`eliminar${prod.id}`)
        botonEliminar.addEventListener('click', () => {
            eliminarDelCarrito(prod.id)
        })
    })
    actualizarTotal()
    } else {
        carritoVacio.classList.remove("disabled")    
    }
}
//-----------------------------------------------------------------------------------------------
cargarCarrito() // CON ESTE LLAMADO A LA FUNCION CARGA EL STOCK EN CASO DE QUE HAYA
//-----------------------------------------------------------------------------------------------
function actualizarTotal() {
    const totalCalculado = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `Total: $${totalCalculado}`;
}
//-----------------------------------------------------------------------------------------------
function eliminarDelCarrito(prodId) {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    localStorage.setItem('carrito', JSON.stringify(carrito))
    cargarCarrito()
    actualizarTotal() 
}
//----------------------------------------------------------------------------------------------
botonVaciarCarrito.addEventListener("click", vaciarCarrito)
//----------------------------------------------------------------------------------------------
function vaciarCarrito() {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))
    cargarCarrito()
    actualizarTotal() 
}
