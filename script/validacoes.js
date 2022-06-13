function possibilidadeDeJogar(palavraDigitada){
    return palavrasValidas.includes(palavraDigitada) && (palavrasErradas < 7 && !ganhou)
}


/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    function eValida(word){
       let palavrasValidas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        return palavrasValidas.includes(word)? true:false
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
*/
/*
////////////////////////////////////////////////////////////////////
    function verificaLetraInclusa(palavraSorteada, word){
        return palavraSorteada.includes(word)
    }
///////////////////////////////////////////////////////////////////////
    ai a verificação será 
    if(possibilidadeDeJogar(word)){ // for true
        if(eValida(word)){
            if(verificaLetraInclusa(word)){
                palavrasCorretas++
            }else{
                palavrasErradas++
            }
        }
    }
*/

/*
    função que verifica se as palavras encontradas são a mesma quantidade das palavras da vez
*/
    function verifica(palavrasEncontradas, palavraSecretaQt){
        return palavrasEncontradas == palavraSecretaQt? true:false
    }
