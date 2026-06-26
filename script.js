// CONTROLE DA JANELA MODAL DE DEMONSTRAÇÃO COM LINK E IMAGEM
const modalDemo = document.getElementById('modalDemo');
const imgDemo = document.getElementById('imgDemo');
const modalTitle = document.getElementById('modalTitle');
const linkDemoSite = document.getElementById('linkDemoSite');

function abrirDemo(urlSite, nomeImagem, nomePlano) {
  modalTitle.innerText = "Demonstração: " + nomePlano;
  linkDemoSite.href = urlSite;   // Configura o link do site online
  imgDemo.src = nomeImagem;      // Configura o caminho do print
  modalDemo.style.display = "flex";
  document.body.style.overflow = "hidden"; // Bloqueia o scroll de fundo
}

function fecharDemo() {
  modalDemo.style.display = "none";
  if(pPatroc.style.display !== 'flex' && pVIP.style.display !== 'flex') {
     document.body.style.overflow = "auto";
  }
}

window.onclick = function(event) {
  if (event.target == modalDemo) {
    fecharDemo();
  }
}
