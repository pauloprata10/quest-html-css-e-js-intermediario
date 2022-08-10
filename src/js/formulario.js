const campoFormulario = document.querySelectorAll(".campo")
const botao = document.getElementById("botao")

botao.addEventListener("click", function(event){
    event.preventDefault()
    campoFormulario.forEach(function (campo){
        if(campo.value == ""){
            campo.nextElementSibling.classList.add("erro")
            campo.classList.add("erro")
            campo.classList.remove("ok")
        } else {
            campo.classList.add("ok")
            campo.classList.remove("erro")
            campo.nextElementSibling.classList.remove("erro")
        }
    })
})

campoFormulario.forEach(function(item){
    item.addEventListener('input', function(event){
        const mudarCor = event.target
        if(mudarCor.value){
            mudarCor.classList.remove('erro')
            mudarCor.nextElementSibling.classList.remove('erro')
            mudarCor.classList.add('ok')
        } else {
            mudarCor.classList.remove('ok')
        }
    })
})