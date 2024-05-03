function sumarProductos(precioUnitario, cantidadDeseada) {
    let gastoTotal = precioUnitario * cantidadDeseada;
    return gastoTotal;
}
let producto = prompt("¿Qué producto quiere comprar?");
let precioUnitario = prompt("¿Cuánto cuesta su producto?");
let cantidadDeseada = prompt("¿Cuánto quiere comprar de ese producto?");
let costoTotal = sumarProductos(precioUnitario, cantidadDeseada);
console.log(`El costo de ${producto} es igual a ${costoTotal}`)