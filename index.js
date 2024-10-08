
function calcularCuota(monto, interes, plazo) {
    const tasaMensual = (interes / 100) / 12; 
    const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo)); 
    return cuota; 
}


function manejarCalculo() {
    const monto = parseFloat(document.getElementById('monto').value);
    const interes = parseFloat(document.getElementById('interes').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    // Validar entradas
    if (isNaN(monto) || isNaN(interes) || isNaN(plazo) || monto <= 0 || interes < 0 || plazo <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const cuotaMensual = calcularCuota(monto, interes, plazo);
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `La cuota mensual es: $${cuotaMensual.toFixed(2)}`; // resultado//
}

// Asociar el evento al botón
document.getElementById('calcular').addEventListener('click', manejarCalculo);
