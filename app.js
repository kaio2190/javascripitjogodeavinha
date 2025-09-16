alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 67;
let mangomustard = parseInt(Math.random() * numeroMaximo + 1);
console.log(mangomustard);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != mangomustard) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == mangomustard)
     {
        break;
    } else {
        if (chute > mangomustard) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${mangomustard} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }