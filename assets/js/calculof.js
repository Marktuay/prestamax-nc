

document.addEventListener("DOMContentLoaded", function() {
    const botonCuotaMes = document.getElementById("botonCuotaMes");

    botonCuotaMes.onclick = function() {
        const montoPrestamo = parseFloat(document.querySelector("#monto").value);
        let tiempoMeses = parseInt(document.querySelector("#tiempo").value);
        // Limitar el tiempo a un máximo de 60 meses
        tiempoMeses = Math.min(tiempoMeses, 60);
        
        const tasaInteresAnual = 0.12; // Tasa de interés anual fija
        const tasaInteresMensual = tasaInteresAnual / 12; // Convertir a tasa mensual

        // Limpiar las cuotas previamente calculadas
        document.getElementById('cuotas').innerHTML = '';

        // Cálculo de la cuota mensual incluyendo intereses
        const cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -tiempoMeses));
        console.log("La cuota mensual del préstamo es: $" + cuotaMensual.toFixed(2));
        let cuota = cuotaMensual;
        document.getElementById('cuotas').innerHTML += '<tr><td>'+"$"+cuota.toFixed(2)+'</td></tr> ';
        
        // Función para calcular las cuotas mensuales con intereses 
        for (let i = 1; i <= tiempoMeses; i++) {
            const saldoRestante = montoPrestamo * Math.pow(1 + tasaInteresMensual, i) - (cuotaMensual * (Math.pow(1 + tasaInteresMensual, i) - 1) / tasaInteresMensual);
            console.log(`La cuota ${i} del préstamo es: $${cuotaMensual.toFixed(2)}, Saldo Restante: $${saldoRestante.toFixed(2)}`);
        }
    };
});








