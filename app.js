function exibirTextoNaTela(tag) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto
} 
exibirTextoNaTela('h1', 'jogo de adivinhar');
exibirTextoNaTela('p', 'escolha um numero de 0  10');

function verificarChute() {
    console.log ('o botão foi clicado');
}