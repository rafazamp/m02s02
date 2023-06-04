const sistemasDeArquivos = require("fs");

function criarOuAtualizar(nomeDoArquivo, dados) {
  try {
    sistemasDeArquivos.writeFileSync("" + nomeDoArquivo, JSON.stringify(dados));
  } catch (error) {
    throw error;
  }
}

function pegarDados(nomeDoArquivo) {
  try {
    const resultadoDaBusca = JSON.parse(
      sistemasDeArquivos.readFileSync("" + nomeDoArquivo, "utf8")
    );
    return resultadoDaBusca;
  } catch (error) {
    return null;
  }
}

function criaUsuario(nome, email, senha) {
  const usuarios = pegarDados("usuarios.json");

  if (!nome || !email || !senha) {
    return console.log("Todos os campos são obrigatórios");
  }

  if (!usuarios || usuarios.length === 0) {
    criarOuAtualizar("usuarios.json", [
      {
        nome,
        email,
        senha,
      },
    ]);
    return console.log("Usuário cadastrado com sucesso");
  } 

  const existeMail = usuarios.some((user) => user.email === email);
  if (existeMail) {
    return console.log("Email já cadastrado");
  }

  const totalDeUsuarios = [
    ...usuarios,
    {
      nome,
      email,
      senha,
    },
  ];

  criarOuAtualizar("usuarios.json", totalDeUsuarios);
  return console.log("Usuário cadastrado com sucesso");
  
}

function login(email, senha) {
  const usuarios = pegarDados("usuarios.json");

  if (!email || !senha) {
    return console.log("Todos os campos são obrigatórios");
  }

  const findUserAndPass = usuarios.some((user) => user.email === email && user.senha === senha);
  if (!findUserAndPass) {
    return console.log("Email ou senha inválidos");
  } else {
    return console.log("Login realizado com sucesso");
  }
}

function deleteUser(email, senha) {
  const usuarios = pegarDados("usuarios.json");

  if (!email || !senha) {
    return console.log("Todos os campos são obrigatórios");
  }

  const findUser = usuarios.some((user) => user.email === email && user.senha === senha);
  if (!findUser) {
    return console.log("Usuário não encontrado");
  } else {
    const newUsers = usuarios.filter((user) => user.email !== email);
    criarOuAtualizar("usuarios.json", newUsers);
    return console.log("Usuário deletado com sucesso");
  }
}

module.exports = {
  criaUsuario,
  login,
  deleteUser,
};

criaUsuario("rafael","rafael@rafael.com", "123456");
login("rafael@rafael.com4", "123456");
deleteUser("rod@rod.com", "123123");
