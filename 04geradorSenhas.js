function geradorDeSenhas(tamanho) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    senha += caracteres[Math.floor(Math.random() * caracteres.length)];
  }
  return senha;
}

module.exports = geradorDeSenhas;

console.log(geradorDeSenhas(10));
console.log(geradorDeSenhas(08));
console.log(geradorDeSenhas(12));
console.log(geradorDeSenhas(15));
