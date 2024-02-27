//Fecha
const fechaActual = new Date();
const fechaFormateada = fechaActual.toLocaleDateString("es-ES");
document.getElementById("fecha-actual").innerHTML = fechaFormateada;




const year = new Date().getFullYear();
        const yearElement = document.querySelector(".year");
        yearElement.textContent = year;


