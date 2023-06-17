let precio = 420;

let totalCantidad = document.querySelector("#cantidad");
let totalColor = document.querySelector("#color");

let button = document.querySelector("#consultar");

button.addEventListener("click", () => {
  document.querySelector("#total").innerHTML = totalCantidad.value * precio;
  document.querySelector("#fin").innerHTML = totalCantidad.value;
  document.querySelector("#colorear").style.backgroundColor = totalColor.value;
  totalColor.value;
});
