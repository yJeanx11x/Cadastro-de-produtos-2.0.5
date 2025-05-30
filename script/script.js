const nomeProduto = document.querySelector("#nome");
const precoProduto = document.querySelector("#preco");
const quantidadeP = document.querySelector("#quantidade");
const btnCadastro = document.querySelector("#btn-cadastro");

const alerta = document.querySelector(".msg-cadastro");

btnCadastro.addEventListener("click", (e) => {
  //Não envia o formulario
  e.preventDefault();

  // Armazena o Nomes dos Produtos
  const nomesProduto = ["xbox s s"];

  // verifica se os campos estão preenchidos se não erro
  if (nomeProduto.value == "" && precoProduto.value == "" && quantidadeP.value == "" ) {
alerta.classList.remove("remover");
    alerta.textContent=`Erro!!`
    alerta.style.backgroundColor = "#ff4d4dce";

     setTimeout(() => {
      alerta.classList.add("remover");
    }, 3000);
    
  } else {
    nomesProduto.push(`${nomeProduto.value}`);
    const produto = {
      id: `${nomesProduto.length - 1}`,
      nome: `${nomeProduto.value}`,
      preco: `${precoProduto.value}`,
      qtd: `${quantidadeP.value}`,
    };
    console.log(produto);

    // adiciona o a msg de cadastro de produtos.
    alerta.classList.remove("remover");
alerta.textContent=`Produto cadastrado com sucesso!`
alerta.style.backgroundColor = "#08914ace";
    // remove a msg de cadastro de produtos apos 4s.
    setTimeout(() => {
      alerta.classList.add("remover");
    }, 3000);
    
  }
  nomeProduto.value = "";
  precoProduto.value = "";
  quantidadeP.value = "";

  // Verifica se á um produto com esse nome
  if (nomesProduto.includes(`${nomeProduto.value}`) == true) {
    alert("⚠️ Este produto já está cadastrado no sistema.");
  }
});
