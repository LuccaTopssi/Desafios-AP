let nombreProducto = prompt('¿Qué producto quieres comprar?')
let precioUnitario = prompt('¿Cuánto sale cada uno de ese producto?')
let cantidadDeseada = prompt('¿Cuánto quiere comprar de ese producto?')
precioTotal = parseInt(precioUnitario*cantidadDeseada)
if(cantidadDeseada >= 5) {
    precioFinal = parseInt(precioTotal - precioTotal * 10 / 100)
    alert(`El costo final con el descuento del 10% de ${nombreProducto} es de: $${precioFinal}`)
}
else(cantidadDeseada < 5)
    alert(`El costo final de ${nombreProducto} es de: $${precioFinal}`)