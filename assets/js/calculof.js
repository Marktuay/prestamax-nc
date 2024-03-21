

// Ejemplo de uso
let montoPrestamo = 10000; // Ejemplo de monto de préstamo
let tasaInteres = 0.25; // Tasa de interés mensual (en porcentaje)
let tiempoMeses = 12; // Duración del préstamo en meses

// Cálculo de la cuota mensual incluyendo intereses
let cuotaMensual = (montoPrestamo * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -tiempoMeses));
console.log("La cuota mensual del préstamo es: $" + cuotaMensual.toFixed(2));

// Función para calcular las cuotas mensuales con intereses
function cuotasMes() {
    for (let i = 1; i <= tiempoMeses; i++) {
        let saldoRestante = montoPrestamo * Math.pow(1 + tasaInteres, i) - (cuotaMensual * (Math.pow(1 + tasaInteres, i) - 1) / tasaInteres);
        console.log(`La cuota ${i} del préstamo es: $${cuotaMensual.toFixed(2)}, Saldo Restante: $${saldoRestante.toFixed(2)}`);
    }
}

cuotasMes(); // Llamada a la función para calcular e imprimir las cuotas mensuales



 
/*** Pruebas Unitarias */



