function lose(erros){
    if(erros == 7){
        lapis.font = "40px arial"
        lapis.fillStyle = "#f00"
        lapis.fillText("Você perdeu!", 600, 200)
    }
}
function win(){
    lapis.font = "40px arial"
    lapis.fillStyle = "#0f0"
    lapis.fillText("Você ganhou!", 600, 200)
}