const numeroSenha = document.querySelector('.parametro-senha__texto')
const CampoSenha = document.querySelector('#campo-senha')

CampoSenha.value = 'Senha.'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'

let numeros = '123456789'

let simbolos = '@#$&*!-_'

tamanhoSenha = 8;
numeroSenha.textContent = tamanhoSenha;

const checkbox = document.querySelectorAll('.checkbox')

for(let i = 0; i < checkbox.length; i++){
   checkbox[i].onclick = geraSenha;
}
//checkbox[0] = maiusculas
//checkbox[1] = minusculas
//

const botoes = document.querySelectorAll(".parametro-senha__botao")

botoes[0].onclick = diminuir;

function diminuir(){
   tamanhoSenha--;
   numeroSenha.textContent = tamanhoSenha;
   geraSenha()
}

botoes[1].onclick = aumentar;

function aumentar(){
   tamanhoSenha++;
   numeroSenha.textContent = tamanhoSenha;
   geraSenha()
}


geraSenha()

function geraSenha(){
   let senha = ''
   for (let i = 0; i < tamanhoSenha; i++){
      let numeroAleatorio = Math.random() * 26;
      numeroAleatorio = Math.floor(numeroAleatorio)
      senha = senha + letrasMaiusculas[numeroAleatorio]
   }
   CampoSenha.value = senha;
}