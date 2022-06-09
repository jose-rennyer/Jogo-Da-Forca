let canvas = document.querySelector("canvas");
let lapis = canvas.getContext("2d");
let palavraDaVez = []

let palavras = ["melancia", "banana", "brasil", "paraguai", "uruguai", "marrocos", "tesoura", "policia",
"naruto", "luffy", "darkStalker", "winkawaks", "flamingo", "canada", "bleach vasto"]

let palavrasValidas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

lapis.fillStyle = "lightgreen"
lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)



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

function sorteiaEDesenha(){
    lapis.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    lapis.fillStyle = "lightgreen"
    lapis.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    let palavraAleatoria = palavras[Math.round(Math.random() * (palavras.length - 1))]
    desenhaTracos(palavraAleatoria)
    console.log(palavraAleatoria)
}

function preenche(objeto){
    lapis.font = "30px monospace";
    lapis.fillText(objeto.letra, objeto.x, objeto.y);
}
document.body.addEventListener("keydown", function(e){
    let count = 0;
    for(let i = 0; i < palavraDaVez.length; i++){
        if(e.key == palavraDaVez[i].letra){
            count++
            console.log(`${count} palavra encontrada`)
            preenche(palavraDaVez[i])
        }
    }
})