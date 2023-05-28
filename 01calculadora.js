function somar(a, b) {
    return `A soma de ${a} + ${b} é ${a + b}`;
}

function subtrair(a, b) {
  return `A subtração de ${a} - ${b} é ${a - b}`;
}

function multiplicar(a, b) {
  return `A multiplicação de ${a} * ${b} é ${a * b}`;
}

function dividir(a, b) {
  return `A divisão de ${a} / ${b} é ${a / b}`;
}

module.exports = {somar, subtrair, multiplicar, dividir};

console.log(somar(2, 3))
console.log(subtrair(10, 4));
console.log(multiplicar(5, 5));
console.log(dividir(10, 2));