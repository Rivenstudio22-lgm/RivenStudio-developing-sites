// =======================================================
// LÓGICA DE JANELAS (PAINÉIS DE OVERLAY)
// =======================================================
const panelVIP = document.getElementById('panelVIP');
const panelPatrocinadores = document.getElementById('panelPatrocinadores');

document.getElementById('btnAbrirVIP').addEventListener('click', () => {
    panelVIP.style.display = 'flex';
});

document.getElementById('btnAbrirPatrocinadores').addEventListener('click', () => {
    panelPatrocinadores.style.display = 'flex';
});

function fecharTudo() {
    panelVIP.style.display = 'none';
    panelPatrocinadores.style.display = 'none';
}

// =======================================================
// LÓGICA DO SISTEMA DE ESTRELAS INTERATIVAS
// =======================================================
const stars = document.querySelectorAll('.star');
let vlrClassificacaoSelecionado = 0;

stars.forEach(star => {
    // Efeito visual ao passar o rato por cima
    star.addEventListener('mouseover', () => {
        destacarEstrelas(star.getAttribute('data-value'));
    });

    // Remove o efeito ao tirar o rato (mantém apenas as selecionadas fixas)
    star.addEventListener('mouseout', () => {
        destacarEstrelas(vlrClassificacaoSelecionado);
    });

    // Fixa a escolha quando o utilizador clica
    star.addEventListener('click', () => {
        vlrClassificacaoSelecionado = star.getAttribute('data-value');
        destacarEstrelas(vlrClassificacaoSelecionado);
    });
});

// Função auxiliar para pintar as estrelas selecionadas
function destacarEstrelas(valor) {
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= parseInt(valor)) {
            star.classList.add('hover');
        } else {
            star.classList.remove('hover');
        }
    });
}

// =======================================================
// PROCESSAMENTO DO FORMULÁRIO DE AVALIAÇÃO
// =======================================================
function enviarClassificacao(event) {
    event.preventDefault(); // Impede que a página recarregue
    
    const email = document.getElementById('userEmail').value;
    
    // Alerta caso tentem submeter sem escolher nenhuma estrela
    if (vlrClassificacaoSelecionado === 0) {
        alert('Por favor, escolha uma quantidade de estrelas antes de submeter.');
        return;
    }

    // Esconde os campos do formulário e ativa a caixa de sucesso
    document.getElementById('ratingForm').style.display = 'none';
    const caixaSucesso = document.getElementById('successMessage');
    const resumoTexto = document.getElementById('feedbackSummary');
    
    caixaSucesso.style.display = 'block';
    resumoTexto.innerHTML = `O utilizador <strong>${email}</strong> avaliou o site que recebeu com <strong>${vlrClassificacaoSelecionado} estrelas</strong>!`;
}
