let canvas = document.querySelector("canvas");
let lapis = canvas.getContext("2d");
let palavraDaVez = [] 
let palavrasUsadas = []
let palavraCompleta = ""
let palavrasErradas = 0
let palavrasEncontradas = 0
let ganhou = false
let botaoStart = document.querySelector(".start")
let comecou = false

lapis.fillStyle = "lightgreen"
lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

botaoStart.addEventListener("click", ()=> {
    sorteiaEDesenha()
    document.querySelectorAll(".bt").forEach((item)=> item.classList.add("invisivel"))
    showButtons()
})



document.body.addEventListener("keydown", function(e){
    if(comecou){
        let palavraDigitada = e.key.toUpperCase();
        todasVerificacoes(palavraDigitada)
    }
    
})

function sorteiaEDesenha(){
    clear()
    comecou = true
    let palavraAleatoria = palavras[Math.round(Math.random() * (palavras.length - 1))]
    desenhaTracos(palavraAleatoria)
    palavraCompleta = palavraAleatoria;
}

function clear(){
    comecou = false
    palavraCompleta = ""
    palavrasEncontradas = 0;
    palavrasErradas = 0;
    palavraDaVez = []
    palavrasUsadas = []
    ganhou = false
    eixoXIncorrect = 880
    eixoYIncorrect = 50
    addArea.classList.add("invisivel")
    inputNewWord.value = ""
    lapis.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    lapis.fillStyle = "lightgreen"
    lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

function desenhaTracos(word){
    palavraDaVez = []
    let eixoXTraco = 300;
    let eixoYTraco = 450
    lapis.fillStyle = "green"
    for(let i = 0; i < word.length; i++){
        if(word[i] != " "){
            palavraDaVez.push({letra:word[i], x:eixoXTraco + 5, y:eixoYTraco - 10})
            lapis.fillRect(eixoXTraco, eixoYTraco, 30, 5)
        }
        eixoXTraco += 40
    }
}