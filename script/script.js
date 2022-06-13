let canvas = document.querySelector("canvas");
let lapis = canvas.getContext("2d");
let palavraDaVez = [] 
let palavrasUsadas = []
let palavraCompleta = ""
let palavrasErradas = 0
let palavrasEncontradas = 0
let ganhou = false

// essas palavras serão as aleatorias
let palavras = ["melancia", "banana", "brasil", "paraguai", "uruguai", "marrocos", "tesoura", "policia",
"naruto", "luffy", "dark stalker", "winkawaks", "flamingo", "canada", "bleach vasto"]

// palavras validas para verificacao
let palavrasValidas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// função para verificar se a chave pressionada é uma letra, vou ligar a função de verificação, junto com o array de palavrasValidas

// função para verificar se a letra digitada está dentro da palavra Secreta


lapis.fillStyle = "lightgreen"
lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)


document.body.addEventListener("keydown", function(e){
    if(possibilidadeDeJogar(e.key)){
        if(!(palavrasUsadas.includes(e.key))){
            palavrasUsadas.push(e.key)
            if(palavraCompleta.includes(e.key)){
                lapis.fillStyle = "green"
                for(let i = 0; i < palavraDaVez.length; i++){
                    if(e.key == palavraDaVez[i].letra){
                        palavrasEncontradas++
                        preencheCorreta(palavraDaVez[i])
                        ganhou = verifica(palavrasEncontradas, palavraDaVez.length)
                        if(ganhou){
                            win()
                        }
                    }
                }
            }else{
                preencheIncorreta(e.key)
                palavrasErradas++
                desenhaForca(palavrasErradas)
                if(palavrasErradas == 7){
                    lose(palavrasErradas)
                }
            }
        }
    } 
})

//ela vai sorteiar a palavra, e vai desenhar os traços logo em seguida.
function sorteiaEDesenha(){
    clear()
    let palavraAleatoria = palavras[Math.round(Math.random() * (palavras.length - 1))]
    desenhaTracos(palavraAleatoria)
    palavraCompleta = palavraAleatoria;
}

function clear(){
    palavraCompleta = ""
    palavrasEncontradas = 0;
    palavrasErradas = 0;
    palavraDaVez = []
    palavrasUsadas = []
    ganhou = false
    eixoXIncorrect = 880
    eixoYIncorrect = 50
    lapis.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    lapis.fillStyle = "lightgreen"
    lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

//essa função vai pegar uma certa palavra sorteada, e vai desenhar cada traço de acordo com as letras, e a cordenada do eixo X, já comeca em 
//300 para que possa ser posicionada quase no centro, e a cada palavra, ele vai armazenar na palavra da vez, o local da letra, e a coordenada
//dela no eixoX e no eixo y.
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

// essa função vai receber o como parametro o objeto, que possui a letra que deve ser preenchida, e as coordenadas do eixo "x" e "y"


sorteiaEDesenha()