const nomeProduto=document.querySelector('#nome')
const precoProduto=document.querySelector('#preco')
const quantidadeP=document.querySelector('#quantidade')
const btnCadastro=document.querySelector('#btn-cadastro')


btnCadastro.addEventListener('click',(e)=>{
//Não envia o formulario
    e.preventDefault()

    if(nomeProduto.value == '' && precoProduto.value =='' && quantidadeP.value == ''){
        console.log('erro')
    }else{
        const estoque=[
            {nome:`${nomeProduto.value}`,preco:`${precoProduto.value}`,qtd:`${quantidadeP.value}`}
        ]
        alert(`Cadastro realizado com sucesso! Seu produto foi adicionado ao sistema.`)

        console.log(estoque)
    }
    nomeProduto.value=''
    precoProduto.value=''
    quantidadeP.value=''

})
