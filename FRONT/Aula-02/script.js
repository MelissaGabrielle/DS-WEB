//Funções em Javascript:


function somarNumeros(num1,num2){
    return num1+num2;
}

let resultado = somarNumeros(5,10)
console.log(resultado)

resultado = somarNumeros(50,100)

//Trabalhando com DATA e HORA:
let dataAtual = new Date ()
console.log(dataAtual.toISOString())

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth()+1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano}${hora}:${minuto}:${segundo}`);

//================================================================
//Outro Exemplo de Date:
let hoje = new Date ();
let diasparaAdicionar = 7;
//Cria uma nova data a partir da data atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasparaAdicionar);
//toLocaleDateString Exibe a data no formato local, ou seja, Dia/Mes/Ano
console.log(novaData.toLocaleDateString());

//SubtraçãodeDatas
let data1 = new Date('2025-03-19');
let data2 = new Date('2025-03-25');

//Diferença em milissegundos
let DiferencaMS = Data2 - data1;

//Convertendo para Dias 
let diferencaDias = diferencaMS / (1000 * 60 * 60 * 24);
console.log(`Diferença: ${diferencaDias} dias`);

//Manipulando o DOM
document.getElementById("conteudo").innerHTML = "<p>Olá, Mundo!</p>"

//usando o InnerHTML
var valor = document .getElementBYId("conteudo").innerHTML;
console.log

//Usando o setAtribute
document.getElementById("foto").setAttribute("src", "imagem.jpg");

console.log(document.getElementBYId("foto").getAttribute("src"));

//Alterando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("foto").style.widht = "500px";

//Criando uma função para um botão
function mudaTamanho(){
document.getElementById("foto").style.width = "1000px";
}