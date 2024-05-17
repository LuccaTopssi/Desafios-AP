let Productos = ["Coca-Cola", "Sprite", "Fanta", "Agua Mineral"]
for(let i = 0; i< Productos.length; i++)
    {
        console.log(`Los productos disponibles son: ${Productos[i]}`)
    }
    for (let i = Productos.length - 1; i >= 0; i--) 
    {
        Productos.pop()
        console.log("Se vendió un producto")
        console.log(`Queda un total de ${Productos.length} productos en stock.`)
    }