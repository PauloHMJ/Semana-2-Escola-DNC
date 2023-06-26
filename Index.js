var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Bruna.style ="display:none"
    Samantha.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Bruna.style ="display:flex"
    Samantha.style ="display:none"
    SetaDireita.style ="display:flex; margin-top:55px"
    SetaEsquerda.style ="display:none"
}