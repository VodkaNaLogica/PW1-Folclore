const topImg = document.getElementById('top');
const bottomImg = document.getElementById('bottom');
const direito = document.getElementById('direito');
const esquerdo = document.getElementById('esquerdo');

function monitorarDistancia() {

	const rectTop = topImg.getBoundingClientRect();
	const rectBottom = bottomImg.getBoundingClientRect();

	const distancia = rectBottom.top - rectTop.bottom;
	const distancia_medida = distancia + 400
	const escalax = distancia_medida / 30

	console.log(`Distância atual: ${distancia_medida.toFixed(2)}px\nEscala Y: ${escalax.toFixed(2)}`);

	esquerdo.style.transform = `scaleY(${escalax})`
	direito.style.transform = `scaleY(${escalax})`;

	requestAnimationFrame(monitorarDistancia);
}
requestAnimationFrame(monitorarDistancia);
