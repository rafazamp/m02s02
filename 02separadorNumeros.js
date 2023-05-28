arrayDeNumeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 21, 37, 42, 54, 68, 71, 88, 99, 100,
];

function separadorDeNumeros(arrayDeNumeros, opcao) {
  if (opcao == 1) {
    return (
      "Números ímpares do array:" +
      arrayDeNumeros.filter((numero) => numero % 2 == 1)
    );
  } else if (opcao == 2) {
    return (
      "Números pares do array:" +
      arrayDeNumeros.filter((numero) => numero % 2 == 0)
    );
  } else if (opcao == 3) {
    return {
      "Números ímpares do array:" : arrayDeNumeros.filter((numero) => numero % 2 == 1),
      "Números pares do array:" : arrayDeNumeros.filter((numero) => numero % 2 == 0),
    };
  }
}

console.log(separadorDeNumeros(arrayDeNumeros, 1));
console.log(separadorDeNumeros(arrayDeNumeros, 2));
console.log(separadorDeNumeros(arrayDeNumeros, 3));

module.exports = separadorDeNumeros;
