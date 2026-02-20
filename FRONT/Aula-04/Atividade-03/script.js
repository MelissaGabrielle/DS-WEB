//Criando o contador de alunos
var contadorAluno = 0;

//Cria um li e fala o conteudo do meio >...<. e coloca como id e item1 
function adicionar(){
    //Incrementando o contador de itens 
    contadorAluno ++;

    //Crio o item
    let novoAluno = document.createElement("li");

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let rm = document.getElementById("rm").value;
    let telefone = document.getElementById("telefone").value;
    let turma = document.getElementById("turma").value;

    //Adiciono o texto ao meu item
   novoAluno.innerHTML = `${contadorAluno} <br> ${nome} <br> ${email} <br> ${rm}<br> ${telefone}<br> ${turma} <br>`;
    //atribuo um ID
    novoAluno.setAttribute("id", contadorAluno);

    //Cria o botão de remover    
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";//Adiciona texto ao botão
    botaoRemover.setAttribute("onclick",`remover(${contadorAluno})`);//Adiciona uma função ao botão

    novoAluno.appendChild(botaoRemover);//Adiciona o botão ao novo item
    document.getElementById("lista").appendChild(novoAluno);
}

function remover(alunosLista){
    var alunos = document.getElementById(alunosLista);
    document.getElementById("lista").removeChild(alunos);
}