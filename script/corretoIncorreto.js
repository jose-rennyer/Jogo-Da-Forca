let eixoXIncorrect = 880;
let eixoYIncorrect = 50;

function preencheCorreta(objeto){
    lapis.fillStyle = "green"
    palavrasEncontradas++
    lapis.font = "30px monospace";
    lapis.fillText(objeto.letra, objeto.x, objeto.y);
}

function preencheIncorreta(wordIncorrect){
    palavrasErradas++
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