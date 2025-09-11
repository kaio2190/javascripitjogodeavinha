let numeroSecreto;
let tentativas;
const maxTentativas = 5;

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número entre 1 e 100
  tentativas = 0;
  document.getElementById('mensagem').textContent = "Tente adivinhar um número entre 1 e 100!";
  document.getElementById('inputNumero').value = "";
}

function verificarPalpite() {
  const palpite = Number(document.getElementById('inputNumero').value);
  tentativas++;
  if (palpite === numeroSecreto) {
    document.getElementById('mensagem').textContent = `Parabéns! Você acertou em ${tentativas} tentativas. O jogo será reiniciado.`;
    setTimeout(iniciarJogo, 2000); // Reset automático
  } else if (tentativas >= maxTentativas) {
    document.getElementById('mensagem').textContent = `Você perdeu! O número era ${numeroSecreto}. O jogo será reiniciado.`;
    setTimeout(iniciarJogo, 2000); // Reset automático
  } else if (palpite < numeroSecreto) {
    document.getElementById('mensagem').textContent = "O número secreto é maior!";
  } else {
    document.getElementById('mensagem').textContent = "O número secreto é menor!";
  }
  document.getElementById('inputNumero').value = "";
}

// Chama iniciarJogo ao carregar a página
window.onload = iniciarJogo;
