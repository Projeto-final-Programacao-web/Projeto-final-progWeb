function KgParaGrama(input) {
    return input * 1000;
}

function KgParaLibra(input) {
    return input * 2.205;
}

function gramaParaKg(input) {
    return input / 1000;
}

function gramaParaLibra(input) {
    return input / 453.592;
}

function libraParaKg(input) {
    return input / 2.205;
}

function libraParaGrama(input) {
    return input * 453.592;
}

function calcular(input, uniInput, uniOutput) {
    if (uniInput === 'quilogramas' && uniOutput === 'gramas') {
        return KgParaGrama(input);
    } else if (uniInput === 'quilogramas' && uniOutput === 'libras') {
        return KgParaLibra(input);
    } else if (uniInput === 'gramas' && uniOutput === 'quilogramas') {
        return gramaParaKg(input);
    } else if (uniInput === 'gramas' && uniOutput === 'libras') {
        return gramaParaLibra(input);
    } else if (uniInput === 'libras' && uniOutput === 'quilogramas') {
        return libraParaKg(input);
    } else if (uniInput === 'libras' && uniOutput === 'gramas') {
        return libraParaGrama(input);
    } else {
         alert("Conversão não suportada");
    }
}

function pegarValor() {
    const input = parseFloat(document.getElementById('inputNumero').value);
    const uniInput = document.getElementById('inputSelect').value;
    const uniOutput = document.getElementById('outputSelect').value;

    const resultado = calcular(input, uniInput, uniOutput);

    document.getElementById('outputNumero').value = (resultado).toFixed(2)
}