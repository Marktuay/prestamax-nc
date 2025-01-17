

document.addEventListener("DOMContentLoaded", function () {
    const botonCuotaMes = document.getElementById("botonCuotaMes");

    botonCuotaMes.onclick = function () {
        const montoPrestamo = parseFloat(document.querySelector("#monto").value);
        let tiempoMeses = parseInt(document.querySelector("#tiempo").value);
        const tipoPrestamo = document.querySelector('input[name="tipoPrestamo"]:checked').value;

        // Limitar el tiempo a un máximo de 60 meses
        tiempoMeses = Math.min(tiempoMeses, 60);

        let tasaInteresAnual;
        if (tipoPrestamo === 'hipotecario') {
            tasaInteresAnual = 0.12; // Tasa de interés anual para hipotecario
        } else if (tipoPrestamo === 'consumo') {
            tasaInteresAnual = 0.24; // Tasa de interés anual para prestamos a colaboradores
        }

        const tasaInteresMensual = tasaInteresAnual / 12; // Convertir a tasa mensual

        // Limpiar las cuotas previamente calculadas
        document.getElementById("resultadoCuotas").innerHTML = "";

        // Cálculo de la cuota mensual incluyendo intereses
        const cuotaMensual = (montoPrestamo * tasaInteresMensual) / 
            (1 - Math.pow(1 + tasaInteresMensual, -tiempoMeses));

        console.log("La cuota mensual del préstamo es: $" + cuotaMensual.toFixed(2));

        // Crear una tabla para mostrar las cuotas
        const table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";
        table.style.textAlign = "center";

        // Agregar estilos dinámicos a través de <style>
        const style = document.createElement("style");
        style.textContent = `
            table {
                border-collapse: collapse;
                width: 100%;
                text-align: center;
                margin-top: 10px;
            }
            th, td {
                border: 1px solid #000;
                padding: 8px;
            }
        `;
        document.head.appendChild(style);

        // Crear encabezados de la tabla
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Cuota</th>
                    <th>Monto</th>
                    <th>Saldo Restante</th>
                </tr>
            </thead>
        `;
        const tbody = document.createElement("tbody");

        // Calcular cada cuota y agregarla a la tabla
        for (let i = 1; i <= tiempoMeses; i++) {
            const saldoRestante =
                montoPrestamo * Math.pow(1 + tasaInteresMensual, i) -
                (cuotaMensual * (Math.pow(1 + tasaInteresMensual, i) - 1)) / tasaInteresMensual;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${i}</td>
                <td>$${cuotaMensual.toFixed(2)}</td>
                <td>$${saldoRestante.toFixed(2)}</td>
            `;
            tbody.appendChild(row);
        }

        // Agregar cuerpo de la tabla y mostrarla en el contenedor
        table.appendChild(tbody);
        document.getElementById("resultadoCuotas").appendChild(table);
    };
});
