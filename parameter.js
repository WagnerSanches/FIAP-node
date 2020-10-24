// Default
function multi(a, b = 1) {
    return a * b;
}

// Rest
function somaValores(...vars) {
    return vars.reduce((acumulador, atual) => acumulador + atual);
// seria a variavel q armazena^^^   ^^^ a variavel que pula de valor para valor
}

// Operator
function somaTres(a, b, c) {
    return a + b + c;
}

const vars = [1, 2, '3', 4]

console.log(somaTres(...vars))