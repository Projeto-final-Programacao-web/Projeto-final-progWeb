function celParaFah(input) {
    return ((input * 1.8)+ 32).toFixed(2);
}

function celParaKel(input) {
    return (input + 273).toFixed(2);
}

function fahParaCel(input) {
    return ((input -  32)/1.8).toFixed(2);
}

function fahParaKel(input) {
    return ((input - 32) * 5 / 9 + 273.15).toFixed(2);
}

function kelParaCel(input) {
    return (input - 273.15).toFixed(2);
}

function kelParaFah(input) {
    return ((input - 273.15) * 9 / 5 + 32).toFixed(2);
}

function calcular(input, uniInput, uniOutput) {
    if (uniInput === 'celsius' && uniOutput === 'fahrenheit') {
        return celParaFah(input);
    } else if (uniInput === 'celsius' && uniOutput === 'kelvin') {
        return celParaKel(input);
    } else if (uniInput === 'fahrenheit' && uniOutput === 'celsius') {
        return fahParaCel(input);
    } else if (uniInput === 'fahrenheit' && uniOutput === 'kelvin') {
        return fahParaKel(input);
    } else if (uniInput === 'kelvin' && uniOutput === 'celsius') {
        return kelParaCel(input);
    } else if (uniInput === 'kelvin' && uniOutput === 'fahrenheit') {
        return kelParaFah(input);
    } else {
         alert("Conversão não suportada");
    }
}

function pegarValor() {
    const input = parseFloat(document.getElementById('inputNumero').value);
    const uniInput = document.getElementById('inputSelect').value;
    const uniOutput = document.getElementById('outputSelect').value;

    const resultado = calcular(input, uniInput, uniOutput);

    document.getElementById('outputNumero').value = resultado
}