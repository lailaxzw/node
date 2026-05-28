const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/funcionarios.json");

function lerDados() {
  const dados = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(dados);
}

function listar() {
  return lerDados();
}

function salvarDados(dados) {
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
}

function salvar(funcionario) {
  let funcionarios = lerDados();
  const novo = {
    id: funcionarios.length > 0 ? funcionarios[funcionarios.length - 1].id + 1 : 1,
    nome: funcionario.nome,
    email: funcionario.email, // Corrigido
    cargo: funcionario.cargo  // Corrigido
  };
  funcionarios.push(novo);
  salvarDados(funcionarios);
}

function buscarPorId(id) {
  let funcionarios = lerDados();
  
  return funcionarios.find(f => f.id === Number(id));
}

function editar(id, novoFuncionario) {
  let funcionarios = lerDados();
  let index = funcionarios.findIndex(f => f.id === Number(id));
  
  if (index !== -1) {
    funcionarios[index].nome = novoFuncionario.nome;
    funcionarios[index].email = novoFuncionario.email;
    funcionarios[index].cargo = novoFuncionario.cargo; 
    salvarDados(funcionarios);
  }
}

function excluir(id) {
  const funcionarios = lerDados();
  const novaLista = funcionarios.filter(f => f.id != id);
  salvarDados(novaLista);
}

module.exports = {
  listar,
  salvar,
  buscarPorId,
  editar,
  excluir
};