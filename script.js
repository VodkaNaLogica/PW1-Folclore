const topImg = document.getElementById('top');
const bottomImg = document.getElementById('bottom');

function monitorarDistancia() {
    // Pega as coordenadas geométricas exatas e atuais de ambos os elementos na tela
    const rectTop = topImg.getBoundingClientRect();
    const rectBottom = bottomImg.getBoundingClientRect();

    // Calcula a distância entre a base do #top e o topo do #bottom
    const distancia = rectBottom.top - rectTop.bottom;
    const distancia_medida = distancia + 400

    // Exibe o valor no console em tempo real (substitua pelo seu uso prático)
    console.log(`Distância atual: ${distancia_medida.toFixed(2)}px`);

    // Mantém a função rodando em loop sincronizado com os frames da tela
    requestAnimationFrame(monitorarDistancia);
}

// Inicia o monitoramento contínuo assim que a página carrega
requestAnimationFrame(monitorarDistancia);
