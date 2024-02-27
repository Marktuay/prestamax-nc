/************Fecha en el sitio*****************/
const fechaActual = new Date();
const fechaFormateada = fechaActual.toLocaleDateString("es-ES");
document.getElementById("fecha-actual").innerHTML = fechaFormateada;//linea para ponerlo en el html
 console.log(fechaActual)


const year = new Date().getFullYear();
        const yearElement = document.querySelector(".year");
        yearElement.textContent = year;

console.log(year);
/****************END fechas *******************/

