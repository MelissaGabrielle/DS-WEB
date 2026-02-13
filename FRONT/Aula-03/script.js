//Criando o contador de tarefas
var contadorItem = 0;

//Cria um li e fala o conteudo do meio >...<. e coloca como id e item1 
function adicionar(){
    //Incrementando o contador de itens 
    contadorItem ++;

    //Crio o item
    let novoItem = document.createElement("li");
    //Adiciono o texto ao meu item
    novoItem.textContent = contadorItem + " - " + prompt("Digite o nome da Tarefa: ");
    //atribuo um ID
    novoItem.setAttribute("id", contadorItem);

    //Cria o botão de remover    
    let botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover"//Adiciona texto ao botão
    botaoRemover.setAttribute("onclick",`remover(${contadorItem})`)//Adiciona uma função ao botão

    novoItem.appendChild(botaoRemover)//Adiciona o botão ao novo item
    document.getElementById("lista").appendChild(novoItem);
}

function remover(itemLista){
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}