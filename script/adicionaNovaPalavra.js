let botaoAdd = document.querySelector(".new")
let addArea = document.querySelector(".area-add")
let botaoCancel = document.querySelector(".bt-cancel")
let botaoAddNewWord = document.querySelector(".bt-new")
let inputNewWord = document.querySelector(".input-new")
let mudar = false

function troca(){
    mudar = !mudar
    if(mudar){
        addArea.classList.add("visivel")
        addArea.classList.remove("invisivel")
    }else{
        addArea.classList.add("invisivel")
        addArea.classList.remove("visivel")
    }
}
botaoAdd.addEventListener("click", ()=> {
    troca()
})
botaoCancel.addEventListener("click",() => troca())
botaoAddNewWord.addEventListener("click", ()=>{
    palavras.push(inputNewWord.value.toUpperCase())
    sorteiaEDesenha()
    troca()
    document.querySelectorAll(".bt").forEach((item)=> item.classList.add("invisivel"))
    showButtons()
})

// Botão novo jogo e desistir

function showButtons(){
    document.querySelector(".game-buttons").style.display = "flex";
}
function clearButtons(){
    document.querySelector(".game-buttons").style.display = "none"
}

let botaoNewGame = document.querySelector(".new-game-button")
let surrenderButton = document.querySelector(".surrender-game-button")

botaoNewGame.addEventListener("click", () => {
    sorteiaEDesenha()
    showButtons()
})
surrenderButton.addEventListener("click", ()=>{
    clear();
    clearButtons()
    document.querySelectorAll(".bt").forEach((item)=> {
        item.classList.remove("invisivel")
    })
})