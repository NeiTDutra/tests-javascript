const valor1 = parseInt(500);
const valor2 = parseFloat(35.0).toFixed(1);

let consumo = parseFloat(valor1 / valor2).toFixed(3);

console.log('\nkm Rodados:    ' + valor1);
console.log('\nConsumo:       ' + valor2);
console.log('\nConsumo medio: ' + consumo + ' Km/l\n');
