const botaoEnviar = document.getElementById('enviarFormulario')
const dadosDoUsuario = document.querySelectorAll('#dadoUsuario')
const mensagemDeErro = document.querySelectorAll('.mensagem-erro')

botaoEnviar.addEventListener('click', function(){
    for (let contador = 0; contador < dadosDoUsuario.length; contador++) {
        if(dadosDoUsuario[contador].value.length == 0){
            dadosDoUsuario[contador].classList.remove('preenchido')
            dadosDoUsuario[contador].classList.add('vazio')
            mensagemDeErro[contador].classList.remove('ocultar')
            mensagemDeErro[contador].classList.add('mostrar')
        }else{
            dadosDoUsuario[contador].classList.remove('vazio')
            dadosDoUsuario[contador].classList.add('preenchido')
            mensagemDeErro[contador].classList.remove('mostrar')
            mensagemDeErro[contador].classList.add('ocultar')
        }
    }
})

const input = document.querySelectorAll('.input')

input.forEach(input => {
    input.addEventListener('input', function valido(){
        if(input.value != ''){
            input.classList.add('preenchido')
            input.classList.remove('vazio')
            input.nextElementSibling.classList.remove('vazio')
        }else{
            input.classList.remove('preenchido')
        }
    })
})