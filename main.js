const numeroSenha = document.querySelector('.parametro-senha__texto')
const CampoSenha = document.querySelector('#campo-senha')

const forcaSenha = document.querySelector(".forca")


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
//checkbox[2] = numeros
//checkbox[3] = simbolos

const botoes = document.querySelectorAll(".parametro-senha__botao")

botoes[0].onclick = diminuir;

function diminuir(){
   if(tamanhoSenha > 0){
      tamanhoSenha--;
   numeroSenha.textContent = tamanhoSenha;
   geraSenha()
   }
}

botoes[1].onclick = aumentar;

function aumentar(){
   if(tamanhoSenha < 20){
      tamanhoSenha++;
   numeroSenha.textContent = tamanhoSenha;
   geraSenha()
   }
}


geraSenha()

function geraSenha(){

 let alfabeto = ''
 if(checkbox[0].checked){
   alfabeto = alfabeto + letrasMaiusculas
 }
  if(checkbox[1].checked){
   alfabeto = alfabeto + letrasMinusculas
   }
  if(checkbox[2].checked){
      alfabeto = alfabeto + numeros
   }
  if(checkbox[3].checked){
      alfabeto = alfabeto + simbolos
   }

   let senha = ''
   for (let i = 0; i < tamanhoSenha; i++){
      let numeroAleatorio = Math.random() * alfabeto.length;
      numeroAleatorio = Math.floor(numeroAleatorio)
      senha = senha + alfabeto[numeroAleatorio]
   }
   CampoSenha.value = senha;
   classficarSenha()
}


function classficarSenha(){

forcaSenha.classList.remove('forte', 'media', 'fraca')

   if(tamanhoSenha > 11){
      forcaSenha.classList.add('forte')
   }else if(tamanhoSenha < 7){
      forcaSenha.classList.add('fraca')
   }else{ 
       forcaSenha.classList.add('media')
   }
}