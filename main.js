const Producto = function (nombre, precio, stock){
    this.nombre= nombre
    this.precio= precio
    this.stock= stock
}
let producto1= new Producto("Motorola Edge 40", 400000, 100)
let producto2= new Producto(" Motorola Edge 40 Pro", 600000, 160)
let producto3= new Producto(" Motorola Rarz", 680000, 400)
let producto4= new Producto("Iphone 14 Pro Max", 2000000, 1000)

let lista = [producto1, producto2, producto3, producto4]
function filtrarProducto(){
    let palabraClave = prompt("Ingresa el producto que buscas: ")
    let resultado= lista.filter( (x)=>x.nombre.toUpperCase().includes(palabraClave))
    if (resultado.length >0){
        console.table(resultado)
    }else{
        alert("No hay resultados para la busqueda")
    }
}
function agregarProducto(){
    let nombre= prompt("Ingresa el nombre del producto: ")
    let precio= prompt("Ingresa el precio del producto: ")
    let stock= prompt("Ingrese la cantidad de stock disponible: ")

    if(isNaN(precio) || isNaN(stock) || nombre =="" ){
        alert("Por favor ingrse valores validos")
        return
    }
    let producto= new Producto (nombre, precio, stock)
    lista.push(productos)
    console.log(lista)
}