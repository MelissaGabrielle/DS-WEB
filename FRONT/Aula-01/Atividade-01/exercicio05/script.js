var C = Number(prompt("Digite o capital inicial investido: "));
var i = Number(prompt("Digite a taxa de juros, em percentual: "));
var t = Number(prompt("Digite o tempo do investimento, em meses: "));

var M = C * (1+i)**t;

alert(M.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));