let nombreProducto = prompt('¿Qué producto quieres comprar?')
let precioUnitario = prompt('¿Cuánto sale cada uno de ese producto?')
let cantidadDeseada = prompt('¿Cuánto quiere comprar de ese producto?')
let precioFinal = parseInt(precioUnitario*cantidadDeseada)
alert(`El costo final de ${nombreProducto} es de: $${precioFinal}`)