const topImg = document.getElementById('top');
const bottomImg = document.getElementById('bottom');
const direito = document.getElementById('direito');
const esquerdo = document.getElementById('esquerdo');

const svgButton = document.getElementById("svg1")
const svgPathA = document.querySelectorAll(".PathA")

const g1 = document.getElementById("g1")
const g = document.getElementById("g")

function monitorarDistancia() {

	const rectTop = g.getBoundingClientRect();
	const rectBottom = g1.getBoundingClientRect();

	const distancia = rectBottom.top - rectTop.bottom;
	const escalax = (distancia + 124.43) / 25

	console.log(`Escala Y: ${escalax.toFixed(2)}`);

	esquerdo.style.transform = `scaleY(${escalax})`
	direito.style.transform = `scaleY(${escalax})`;

	requestAnimationFrame(monitorarDistancia);
}
requestAnimationFrame(monitorarDistancia);

svgPathA.forEach(svgPathA => {
	svgPathA.addEventListener("mousedown", () => {
			svgButton.style.transform = `perspective(600px) rotateX(44deg) rotateY(0deg) rotateZ(0deg) translate(0px, -10px)`;
			//setTimeout(() => {
			//	window.location.href = "regioes/sudeste/indexSE.html";
			//}, 300)
	})

	svgPathA.addEventListener("mouseup",  () => {
		svgButton.style.transform = `perspective(600px) rotateX(44deg) rotateY(0deg) rotateZ(0deg) translate(0px, -30px)`;
	})

	svgPathA.addEventListener("mouseenter", () => {
			svgButton.style.transform = `perspective(600px) rotateX(44deg) rotateY(0deg) rotateZ(0deg) translate(0px, -30px)`;

	})

	svgPathA.addEventListener("mouseleave",  () => {
		svgButton.style.transform = `perspective(600px) rotateX(44deg) rotateY(0deg) rotateZ(0deg) translate(0px, 0px)`;
	})
})

