let precio = 420;

let totalCantidad = document.querySelector("#cantidad");
let totalColor = document.querySelector("#color");

let button = document.querySelector("#consultar");

button.addEventListener("consultar", () => {
  document.querySelector("#total").innerHTML = totalCantidad.value * precio;
  document.querySelector("#totalCantidad").innerHTML = totalCantidad.value;
  document.querySelector("#color").style.backgroundColor = color.value;
});
