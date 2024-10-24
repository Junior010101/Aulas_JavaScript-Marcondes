//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
const time = new Date();
const dia = time.getDate();
const mes = time.getMonth();
const ano = time.getFullYear();
var DataDeNascimento;
var DataAtual;
var idade;
var nome;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que converte real para dolar ${"=".repeat(12)}\n`);
nome = prompt("Digite seu nome: ");

console.log("\nDigite sua data de nascimento com dia, mês e ano separados por '-' deste jeito: 00-00-0000");
DataDeNascimento = prompt("Data de nascimento: ");

DataDeNascimento = DataDeNascimento.replaceAll("-", "");
DataAtual = Number(new String(ano+mes+dia));


