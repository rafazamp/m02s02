function buscadorDeDDD(ddd) {
  if (ddd >= 11 && ddd <= 19) return "São Paulo";
  if (ddd >= 21 && ddd <= 24) return "Rio de Janeiro";
  if (ddd >= 27 && ddd <= 28) return "Espírito Santo";
  if (ddd >= 31 && ddd <= 38) return "Minas Gerais";
  if (ddd >= 41 && ddd <= 46) return "Paraná";
  if (ddd >= 47 && ddd <= 49) return "Santa Catarina";
  if (ddd >= 51 && ddd <= 55) return "Rio Grande do Sul";
  if (ddd == 61) return "Distrito Federal";
  if (ddd == 62 || ddd == 64) return "Goiás";
  if (ddd == 63) return "Tocantins";
  if (ddd == 65 || ddd <= 67) return "Mato Grosso";
  if (ddd == 68) return "Acre";
  if (ddd == 69) return "Rondônia";
  if (ddd >= 71 && ddd <= 77) return "Bahia";
  if (ddd == 79) return "Sergipe";
  if (ddd == 81 || ddd == 87) return "Pernambuco";
  if (ddd == 82) return "Alagoas";
  if (ddd == 83) return "Paraíba";
  if (ddd == 84) return "Rio Grande do Norte";
  if (ddd == 85 || ddd == 88) return "Ceará";
  if (ddd == 86 || ddd == 89) return "Piauí";
  if (ddd == 91 || ddd == 93 || ddd == 94) return "Pará";
  if (ddd == 92 || ddd == 97) return "Amazonas";
  if (ddd == 95) return "Roraima";
  if (ddd == 96) return "Amapá";
  if (ddd == 98 || ddd == 99) return "Maranhão";
}

console.log(buscadorDeDDD(11));
console.log(buscadorDeDDD(19));
console.log(buscadorDeDDD(23));
console.log(buscadorDeDDD(27));
console.log(buscadorDeDDD(32));
console.log(buscadorDeDDD(44));
console.log(buscadorDeDDD(48));
console.log(buscadorDeDDD(52));
console.log(buscadorDeDDD(61));
console.log(buscadorDeDDD(64));
console.log(buscadorDeDDD(63));
console.log(buscadorDeDDD(68));
console.log(buscadorDeDDD(69));
console.log(buscadorDeDDD(73));
console.log(buscadorDeDDD(79));
console.log(buscadorDeDDD(87));

module.exports = buscadorDeDDD;
