// Exemplo de JavaScript para mudar o tema do site
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'Mudar Tema';
button.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
document.body.appendChild(button);
}

let zoomLevel = 1;

function zoomIn() {
  zoomLevel += 0.1;
  applyZoom();
}

function zoomOut() {
  if (zoomLevel > 1) {
    zoomLevel -= 0.1;
    applyZoom();
  }
}

function applyZoom() {
  const zoomTarget = document.getElementById('zoom-target');
  zoomTarget.style.transform = scale(${zoomLevel});
}
