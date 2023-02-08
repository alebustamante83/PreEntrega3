const contenedorProductos = document.getElementById('contenedor-productos')
const contadorCarrito = document.getElementById('contadorCarrito')

const stockProductos = [
    {id: 1, marca: "NIKE", cantidad: 1, desc: "HOMBRE", precio: 1200, talle: "L"},
    {id: 2, marca: "NIKE", cantidad: 1, desc: "HOMBRE", precio: 1100, talle: "L"},
    {id: 3, marca: "NIKE", cantidad: 1, desc: "HOMBRE", precio: 1200, talle: "M"},
    {id: 4, marca: "NIKE", cantidad: 1, desc: "MUJER", precio: 1400, talle: "M"},
    {id: 5, marca: "NIKE", cantidad: 1, desc: "MUJER", precio: 1200, talle: "S"},
    {id: 6, marca: "NIKE", cantidad: 1, desc: "NIÑO", precio: 1500, talle: "S"},
    {id: 7, marca: "NIKE", cantidad: 1, desc: "NIÑO", precio: 500, talle: "L"},
    {id: 8, marca: "ADIDAS", cantidad: 1, desc: "HOMBRE", precio: 500, talle: "L"},
    {id: 9, marca: "ADIDAS", cantidad: 1, desc: "HOMBRE", precio: 500, talle: "M"},
    {id: 10, marca: "ADIDAS", cantidad: 1, desc: "HOMBRE", precio: 700, talle: "M"},
    {id: 11, marca: "ADIDAS", cantidad: 1,desc: "MUJER", precio: 700, talle: "S"},
    {id: 12, marca: "ADIDAS", cantidad: 1, desc: "MUJER", precio: 700, talle: "S"},
    {id: 13, marca: "ADIDAS", cantidad: 1, desc: "MUJER", precio: 900, talle: "L"},
    {id: 14, marca: "ADIDAS", cantidad: 1, desc: "HOMBRE", precio: 1400, talle: "S"},
    {id: 15, marca: "ADIDAS", cantidad: 1, desc: "NIÑO", precio: 7000, talle: "L"},
    {id: 16, marca: "ADIDAS", cantidad: 1, desc: "NIÑO", precio: 777, talle: "S"},
    {id: 17, marca: "ADIDAS", cantidad: 1, desc: "NIÑO", precio: 234, talle: "S"},
    {id: 18, marca: "PUMA", cantidad: 1, desc: "HOMBRE", precio: 155600, talle: "M"},
    {id: 19, marca: "PUMA", cantidad: 1, desc: "HOMBRE", precio: 1600, talle: "L"},
    {id: 20, marca: "PUMA", cantidad: 1, desc: "HOMBRE", precio: 3200, talle: "L"},
    {id: 21, marca: "PUMA", cantidad: 1, desc: "MUJER", precio: 2300, talle: "M"},
    {id: 22, marca: "PUMA", cantidad: 1, desc: "MUJER", precio: 5600, talle: "M"},
    {id: 23, marca: "PUMA", cantidad: 1, desc: "MUJER", precio: 1700, talle: "S"},
    {id: 24, marca: "PUMA", cantidad: 1, desc: "NIÑO", precio: 800, talle: "S"},
    {id: 25, marca: "PUMA", cantidad: 1, desc: "NIÑO", precio: 800, talle: "S"},
]

let carrito = []

//-------------------------------------------------------------------------------------------
//-------- ESTO ES PARA ACTUALIZAR EL CONTADOR DEL CARRITO EN CASO DE QUE SE ACTUALICE LA PAG
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    //actualizarCarrito()
    contadorCarrito.innerText = carrito.length 
    }
   })
//---------------------CARGA EL DOM CON EL STOCK----------------------------------------------
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
        <h3>${producto.marca}</h3>
        <p>${producto.desc}</p>
        <p>Talle: ${producto.talle}</p>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
    })
   })

//------------------AGREGA PRODUCTOS AL CARRITO-----------------------------------------------
const agregarAlCarrito = (prodId) => {
    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) 
    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTE SE AGREGA AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
    contadorCarrito.innerText = carrito.length 
}    
   

   