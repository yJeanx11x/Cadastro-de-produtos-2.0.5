const nomeProduto = document.querySelector("#nome");
const precoProduto = document.querySelector("#preco");
const quantidadeP = document.querySelector("#quantidade");
const btnCadastro = document.querySelector("#btn-cadastro");

btnCadastro.addEventListener("click", (e) => {
  //Não envia o formulario
  e.preventDefault();
  
  // Armazena o Nomes dos Produtos
  const nomesProduto = ['xbox s s'];
  
  // verifica se os campos estão prenchidos se não erro 
  if (
      nomeProduto.value == "" && precoProduto.value == "" && quantidadeP.value == "") {
          console.log("erro");
        }
        // Verifica se á um produto com esse nome 
        if(nomesProduto.includes(`${nomeProduto.value}`)== true){
            alert('⚠️ Este produto já está cadastrado no sistema.')
            
        }else {
            nomesProduto.push(`${nomeProduto.value}`);
            const produto = {
      id:`${nomesProduto.length}`,
      nome: `${nomeProduto.value}`,
      preco: `${precoProduto.value}`,
      qtd: `${quantidadeP.value}`,
    };
    return produto 
  }
  
  nomeProduto.value = "";
  precoProduto.value = "";
  quantidadeP.value = "";
  
});




