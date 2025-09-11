// Jogo de adivinhação de números em JavaScript

// Função para gerar um número secreto aleatório entre 1 e 100
function gerarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

// Apresentação do jogo
console.log("Bem-vindo ao Jogo de Adivinhação de Números!");
console.log("Tente adivinhar o número secreto entre 1 e 100.");

// Gerando o número secreto
const numeroSecreto = gerarNumeroSecreto();

// Usando prompt para receber palpite do usuário (caso rode em browser)
// No Node.js, use readline
function jogarAdivinhacao() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function perguntar() {
    readline.question("Digite seu palpite: ", (palpite) => {
      const numero = Number(palpite);

      if (isNaN(numero) || numero < 1 || numero > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
        perguntar();
      } else if (numero < numeroSecreto) {
        console.log("O número secreto é MAIOR!");
        perguntar();
      } else if (numero > numeroSecreto) {
        console.log("O número secreto é MENOR!");
        perguntar();
      } else {
        console.log(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
        readline.close();
      }
    });
  }

  perguntar();
}

jogarAdivinhacao();