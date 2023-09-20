let produtos = Array();

function criar_produto(id, nome, qtd) {
    
    let p = {
      id: id,
      nome: nome,
      qtd: qtd
    };
    
    return p;
}

function adicionar_produto(p) {

    produtos.push(p);

}

function listar_produtos() {

    return produtos;

}

function remover_produto(id) {

  produtos = produtos.filter((p) => {
      return p.id != id
  })
  
  return {};
}

function editar_produto(id, qtdAtual) {

    let pEditado;

    produtos.forEach(p => {

        if(p.id == id){
            p.qtd = qtdAtual;
        }

        pEditado = p;

    });

    return pEditado;
}

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    remover_produto,
    editar_produto
   
}