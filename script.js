const topImg = document.getElementById('top');
const bottomImg = document.getElementById('bottom');
const direito = document.getElementById('direito');
const esquerdo = document.getElementById('esquerdo');

let escalaAtual = 1;
let escalaDestino = 1;

const SUAVIDADE = 0.5;

function monitorarDistancia() {
    // Pega as coordenadas geométricas exatas e atuais de ambos os elementos na tela
    const rectTop = topImg.getBoundingClientRect();
    const rectBottom = bottomImg.getBoundingClientRect();

    // Calcula a distância entre a base do #top e o topo do #bottom
    const distancia = rectBottom.top - rectTop.bottom;
    const distancia_medida = distancia + 400
    const x = distancia_medida / 30

    // Exibe o valor no console em tempo real (substitua pelo seu uso prático
    console.log(`Distância atual: ${distancia_medida.toFixed(2)}px`);

    //escalaDestino = Math.max(0, Math.min(1, distancia_medida));
    //escalaAtual += (escalaDestino - escalaAtual) * SUAVIDADE;

    // 4. Aplica no elemento mantendo o translate se necessário
    // Se não quiser manter o translate, use apenas: `scaleY(${fatorEscala})`
    //esquerdo.style.transform = `scaleY(${escalaAtual})`
    esquerdo.style.transform = `scaleY(${x})`
    //direito.style.transform = `scaleY(${escalaAtual})`;
    direito.style.transform = `scaleY(${x})`;

    // Mantém a função rodando em loop sincronizado com os frames da tela
    requestAnimationFrame(monitorarDistancia);
}

// Inicia o monitoramento contínuo assim que a página carrega
requestAnimationFrame(monitorarDistancia);
