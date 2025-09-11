alert('Boas vindas ao jogo do número secretoooooouu');
let mangomustard = 9;
let mangomustard = parseInt(Math.random() * 10 + 1);
console.log(mangomustard)
let chute = prompt('Escolha um número entre 1 e 10');
let chute;
let tentativas = 1;

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}
// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);