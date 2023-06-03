async function buscaCEP(cep) {
  if ((cep.toString().length) > 8 || (cep.toString().length) < 8){
    console.log("CEP inválido")
  }
  else {
    try {
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resposta) => resposta.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log("Erro: ", error);
    } 
  }
}

module.exports = buscaCEP;

buscaCEP(95340000);
buscaCEP(2344);
buscaCEP(111111111111);