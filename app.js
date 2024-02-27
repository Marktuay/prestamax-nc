//Fecha
const fechaActual = new Date();
const fechaFormateada = fechaActual.toLocaleDateString("es-ES");
document.getElementById("fecha-actual").innerHTML = fechaFormateada;

console.log(fecha);
