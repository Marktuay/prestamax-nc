

document.addEventListener("DOMContentLoaded", function() {
    const botonCuotaMes = document.getElementById("botonCuotaMes");

    botonCuotaMes.onclick = function() {
        const montoPrestamo = parseFloat(document.querySelector("#monto").value);
        const tiempoMeses = parseInt(document.querySelector("#tiempo").value);
        const tasaInteres = 0.02; // Tasa de interés mensual (en porcentaje)

        // Cálculo de la cuota mensual incluyendo intereses
        const cuotaMensual = (montoPrestamo * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -tiempoMeses));
        console.log("La cuota mensual del préstamo es: $" + cuotaMensual.toFixed(2));
        let cuota = cuotaMensual;
        document.getElementById('cuotas').innerHTML += '<tr><td>'+"$"+cuota.toFixed(2)+'</td></tr> ';

        // Función para calcular las cuotas mensuales con intereses 
        for (let i = 1; i <= tiempoMeses; i++) {
            const saldoRestante = montoPrestamo * Math.pow(1 + tasaInteres, i) - (cuotaMensual * (Math.pow(1 + tasaInteres, i) - 1) / tasaInteres);
            console.log(`La cuota ${i} del préstamo es: $${cuotaMensual.toFixed(2)}, Saldo Restante: $${saldoRestante.toFixed(2)}`);
           // if (i === tiempoMeses) {
            //    console.log (`la ultima cuota es" ${cuotaMensual - saldoRestante}` )
           // }
        }
    };
});







