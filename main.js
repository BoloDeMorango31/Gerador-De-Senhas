const numeroSenha = document.querySelector('.parametro-senha__texto')
const CampoSenha = document.querySelector('#campo-senha')

CampoSenha.value = 'rhaenyra, herdeira legitima.'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'

let numeros = '123456789'



tamanhoSenha = 8;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll(".parametro-senha__botao")

botoes[0].onclick = diminuir;

function diminuir(){
   tamanhoSenha--;
   numeroSenha.textContent = tamanhoSenha;
}

botoes[1].onclick = aumentar;

function aumentar(){
   tamanhoSenha++;
   numeroSenha.textContent = tamanhoSenha;
}