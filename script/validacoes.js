function possibilidadeDeJogar(palavraDigitada){
    return eValida(palavraDigitada) && (palavrasErradas < 7 && !ganhou)
}

function eValida(word){
   let palavrasValidas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return palavrasValidas.includes(word)
}

function inclusa(word, palavraVerificada){
    lapis.fillStyle = "green"
    return palavraVerificada.includes(word)
}

function jaUsada(word, palavrasUsadas){
    return palavrasUsadas.includes(word)
}
function verifica(palavrasEncontradas, palavraSecretaQt){
    return palavrasEncontradas == palavraSecretaQt
}
function todasVerificacoes(word){
    if(possibilidadeDeJogar(word)){
        if(!jaUsada(word, palavrasUsadas)){
            if(palavraCompleta.includes(word)){
                for(let i = 0; i < palavraDaVez.length; i++){
                    if(word == palavraDaVez[i].letra){
                        preencheCorreta(palavraDaVez[i])
                        ganhou = verifica(palavrasEncontradas, palavraDaVez.length)
                        ganhou? win():""
                    }
                } 
            }else{
                preencheIncorreta(word)
                desenhaForca(palavrasErradas)
                palavrasErradas > 6? lose():""
            }
            palavrasUsadas.push(word) 
        }
    }
}