function cambiarPrecio () {
  var precioProducto = document.getElementById("precioProducto");
  precioProducto.innerText = "Precio: $450";

  var nombreProducto = document.querySelector("#nombreProducto");
  nombreProducto.style.fontSize = "24px";
  nombreProducto.style.fontWeight = "bold";
  nombreProducto.style.color = "red";
}
cambiarPrecio()