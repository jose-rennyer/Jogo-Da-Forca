let padrao = () => {
    lapis.fillStyle = "#000";
    lapis.beginPath()
}
function desenhaForca(erros){
    switch (erros){
        case 1: 
            forca();
        break;
        case 2:
            cabeca();
        break;
        case 3:
            tronco();
        break;
        case 4:
            pernaEsquerda();
        break;
        case 5:
            pernaDireita();
        break;
        case 6:
            bracoEsquerdo();
        break;
        case 7:
            bracoDireito();
        break;
    }
}
// 380 x , 400 y
function forca(){
    padrao()
    lapis.moveTo(380, 400)
    lapis.lineTo(380, 60)
    lapis.lineTo(540, 60)
    lapis.lineTo(540, 110)
    lapis.lineTo(530, 110)
    lapis.lineTo(530, 70)
    lapis.lineTo(390, 70)
    lapis.lineTo(390, 400)
    lapis.fill()
}
function cabeca(){
    padrao()
    lapis.arc(535, 140, 30, 0, 2 * Math.PI)
    lapis.fill()

    lapis.fillStyle="lightgreen"
    lapis.beginPath()
    lapis.arc(535, 140, 20, 0, 2 * Math.PI)
    lapis.fill()
}

function tronco(){
    padrao()
    lapis.moveTo(530, 170)
    lapis.lineTo(530, 250)
    lapis.lineTo(540, 250)
    lapis.lineTo(540, 170)
    lapis.fill()
}

function pernaEsquerda(){
    padrao()
    lapis.moveTo(530, 250)
    lapis.lineTo(490, 290)
    lapis.lineTo(500, 290)
    lapis.lineTo(540, 250)
    lapis.fill()
}
function pernaDireita(){
    padrao()
    lapis.moveTo(540, 250)
    lapis.lineTo(580, 290)
    lapis.lineTo(570, 290)
    lapis.lineTo(530, 250)
    lapis.fill()
}

function bracoEsquerdo(){
    padrao()
    lapis.moveTo(530, 190)
    lapis.lineTo(490, 230)
    lapis.lineTo(500, 230)
    lapis.lineTo(540, 190)
    lapis.fill()
}
function bracoDireito(){
    padrao()
    lapis.moveTo(540, 190)
    lapis.lineTo(580, 230)
    lapis.lineTo(570, 230)
    lapis.lineTo(530, 190)
    lapis.fill()
}



