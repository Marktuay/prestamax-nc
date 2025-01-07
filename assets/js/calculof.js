

document.addEventListener("DOMContentLoaded", function() {
    const botonCuotaMes = document.getElementById("botonCuotaMes");

    botonCuotaMes.onclick = function() {
        const montoPrestamo = parseFloat(document.querySelector("#monto").value); //dato obtenido del campo del monto;
        const tiempoMeses = parseInt(document.querySelector("#tiempo").value); //dato obteido del campo de los meses del prestamo; 
        const tasaInteres = 0.02; // Tasa de interés mensual (en porcentaje)

        // Limpiar las cuotas previamente calculadas
        document.getElementById('cuotas').innerHTML = '';

        // Cálculo de la cuota mensual incluyendo intereses
        const cuotaMensual = (montoPrestamo * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -tiempoMeses));
        console.log("La cuota mensual del préstamo es: $" + cuotaMensual.toFixed(2));
        let cuota = cuotaMensual;
        document.getElementById('cuotas').innerHTML += '<tr><td>'+"$"+cuota.toFixed(2)+'</td></tr> ';
        

        // Función para calcular las cuotas mensuales con intereses 
        for (let i = 1; i <= tiempoMeses; i++) {
            const saldoRestante = montoPrestamo * Math.pow(1 + tasaInteres, i) - (cuotaMensual * (Math.pow(1 + tasaInteres, i) - 1) / tasaInteres);
            console.log(`La cuota ${i} del préstamo es: $${cuotaMensual.toFixed(2)}, Saldo Restante: $${saldoRestante.toFixed(2)}`);
           
        }
    };
});

let sum = (a, b) => a+ b;
console.log(sum(5,7));








