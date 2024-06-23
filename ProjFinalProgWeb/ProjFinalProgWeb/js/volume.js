function LitParaMil(input) {
    return ((input * 100)).toFixed(2);
}

function LitParaGal(input) {
    return (input *  3.785).toFixed(2);
}

function milParaLit(input) {
    return (input / 1000).toFixed(2);
}

function milParaGal(input) {
    return (input / 3785).toFixed(2);
}

function galParaLit(input) {
    return (input *  3,785).toFixed(2);
}

function galParaMil(input) {
    return (input * 3785).toFixed(2);
}

function calcular(input, uniInput, uniOutput) {
    if (uniInput === 'litros' && uniOutput === 'mililitros') {
        return LitParaMil(input);
    } else if (uniInput === 'litros' && uniOutput === 'galoes') {
        return LitParaGal(input);
    } else if (uniInput === 'mililitros' && uniOutput === 'litros') {
        return milParaLit(input);
    } else if (uniInput === 'mililitros' && uniOutput === 'galoes') {
        return milParaGal(input);
    } else if (uniInput === 'galoes' && uniOutput === 'litros') {
        return galParaLit(input);
    } else if (uniInput === 'galoes' && uniOutput === 'mililitros') {
        return galParaMil(input);
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