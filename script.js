// SELEÇÃO DOS ELEMENTOS DOS PAINÉIS
const pPatroc = document.getElementById('painelPatrocinadores');
const pVIP = document.getElementById('painelVIP');

// EVENTO PARA ABRIR O PAINEL DE PATROCINADORES
document.getElementById('btnAbrirPatrocinadores').onclick = () => {
  pPatroc.classList.add('active');
  document.body.style.overflow = 'hidden'; // Remove o scroll do fundo
};

// EVENTO PARA ABRIR O PAINEL VIP
document.getElementById('btnAbrirVIP').onclick = () => {
  pVIP.classList.add('active');
  document.body.style.overflow = 'hidden'; // Remove o scroll do fundo
};

// FUNÇÃO GLOBAL PARA FECHAR TODOS OS PAINÉIS (CHAMADA NOS BOTÕES DE VOLTAR)
function fecharTudo() {
  pPatroc.classList.remove('active');
  pVIP.classList.remove('active');
  document.body.style.overflow = 'auto'; // Devolve o scroll ao fundo
}
