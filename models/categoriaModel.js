const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/categorias.json");

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

function salvar(categoria) {
  let categorias = lerDados();
  const novo = {
    id: categorias.length > 0 ? categorias[categorias.length - 1].id + 1 : 1,
    nome: categoria.nome
  };
  categorias.push(novo);
  salvarDados(categorias);
}

function buscarPorId(id) {
  let categorias = lerDados();
 
  return categorias.find(c => c.id == id);
}

function editar(id, novaCategoria) {
    let categorias = lerDados();
    
    let index = categorias.findIndex(c => c.id == id);
    
    
    if (index !== -1) {
        
        categorias[index].nome = novaCategoria.nome;
        salvarDados(categorias);
    }
}

function excluir(id) {
  const categorias = lerDados();
  const novaLista = categorias.filter(c => c.id != id);
  salvarDados(novaLista);
}

module.exports = {
  listar,
  salvar,
  buscarPorId,
  editar,
  excluir
};