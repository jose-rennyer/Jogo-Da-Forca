let canvas = document.querySelector("canvas");
let lapis = canvas.getContext("2d");
let palavraDaVez = [] 
let palavraCompleta = ""
let palavrasUsadas = []

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



lapis.fillStyle = "lightgreen"
lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)


document.body.addEventListener("keydown", function(e){
    if(palavrasValidas.includes(e.key) && (palavrasErradas < 7 && !ganhou)){
        if(!(palavrasUsadas.includes(e.key))){
            if(palavraCompleta.includes(e.key)){
                lapis.fillStyle = "green"
                palavrasUsadas.push(e.key)
                for(let i = 0; i < palavraDaVez.length; i++){
                    if(e.key == palavraDaVez[i].letra){
                        palavrasEncontradas++
                        preencheCorreta(palavraDaVez[i])
                    }
                }
            }else{
                palavrasUsadas.push(e.key)
                preencheIncorreta(e.key)
                palavrasErradas++
                desenhaForca(palavrasErradas)
            }
        }else{
            alert("Palavra já utilizada")
        }
    }

    if(palavrasEncontradas == palavraDaVez.length){
        alert("Você ganhou")
        ganhou = true
    }
    
    if(palavrasErradas > 6 && !ganhou){
        alert("Você perdeu")
    } 
    
})

//ela vai sorteiar a palavra, e vai desenhar os traços logo em seguida.
function sorteiaEDesenha(){
    palavraCompleta = ""
    clear()
    let palavraAleatoria = palavras[Math.round(Math.random() * (palavras.length - 1))]
    desenhaTracos(palavraAleatoria)
    palavraCompleta = palavraAleatoria;
}

function clear(){
    lapis.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    lapis.fillStyle = "lightgreen"
    lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

//essa função vai pegar uma certa palavra sorteada, e vai desenhar cada traço de acordo com as letras, e a cordenada do eixo X, já comeca em 
//300 para que possa ser posicionada quase no centro, e a cada palavra, ele vai armazenar na palavra da vez, o local da letra, e a coordenada
//dela no eixoX e no eixo y.
function desenhaTracos(word){
    palavraDaVez = []
    let count = 300;
    lapis.fillStyle = "green"
    for(let i = 0; i < word.length; i++){
        if(word[i] != " "){
            palavraDaVez.push({letra:word[i], x:count + 5, y:440})
            lapis.fillRect(count, 450, 30, 5)
        }
        count += 40
    }
}

// essa função vai receber o como parametro o objeto, que possui a letra que deve ser preenchida, e as coordenadas do eixo "x" e "y"
function preencheCorreta(objeto){
    lapis.font = "30px monospace";
    lapis.fillText(objeto.letra, objeto.x, objeto.y);
}

let eixoXIncorrect = 880;
let eixoYIncorrect = 50;

function preencheIncorreta(wordIncorrect){
    if(eixoXIncorrect == 960 ){
        eixoYIncorrect += 50
    }
    if(eixoXIncorrect == 960){
        eixoXIncorrect = 880
    }
    eixoXIncorrect += 40
    
    lapis.font = "30px monospace";
    lapis.fillStyle = "red"
    lapis.fillText(wordIncorrect, eixoXIncorrect, eixoYIncorrect)
}

sorteiaEDesenha()