const gN = document.getElementById("g25912")
const gCO = document.getElementById("g27744")
const gNE = document.getElementById("g27790")
const gSE = document.getElementById("g27734")
const gS = document.getElementById("g28356")

const pathS = document.querySelectorAll(".pathS");
const pathSE = document.querySelectorAll(".pathSE")
const pathNE = document.querySelectorAll(".pathNE")
const pathCO = document.querySelectorAll(".pathCO")
const pathN = document.querySelectorAll(".pathN")

const hover = "blue"
const colorBase = 'green'

document.documentElement.style.setProperty('--colorBase', colorBase)

function 

gN.addEventListener("mouseenter", () => {
    gN.parentNode.appendChild(gN)
})

gCO.addEventListener("mouseenter", () => {
    gCO.parentNode.appendChild(gCO)
})

gNE.addEventListener("mouseenter", () => {
    gNE.parentNode.appendChild(gNE)
})

gSE.addEventListener("mouseenter", () => {
    gSE.parentNode.appendChild(gSE)
})

gS.addEventListener("mouseenter", () => {
    gS.parentNode.appendChild(gS)
})

pathS.forEach(el => {
    el.addEventListener("mouseenter", () => {
        pathS.forEach(outro => {
            outro.style.fill = `${hover}`;
        });
	});

    el.addEventListener("mouseleave", () => {
        pathS.forEach(outro => {
            outro.style.fill = `${colorBase}`;
        });
	});
});

pathSE.forEach(el => {
    el.addEventListener("mouseenter", () => {
        pathSE.forEach(outro => {
            outro.style.fill = `${hover}`;
        });
	});

    el.addEventListener("mouseleave", () => {
        pathSE.forEach(outro => {
            outro.style.fill = `${colorBase}`;
        });
	});

    el.addEventListener("mouseup", () => {
        setTimeout(() => {
		    window.location.href = "regioes/sudeste/indexSE.html";
		}, 300)
    })
});

pathNE.forEach(el => {
    el.addEventListener("mouseenter", () => {
        pathNE.forEach(outro => {
            outro.style.fill = `${hover}`;
        });
	});

    el.addEventListener("mouseleave", () => {
        pathNE.forEach(outro => {
            outro.style.fill = `${colorBase}`;
        });
	});
});

pathCO.forEach(el => {
    el.addEventListener("mouseenter", () => {
        pathCO.forEach(outro => {
            outro.style.fill = `${hover}`;
        });
	});

    el.addEventListener("mouseleave", () => {
        pathCO.forEach(outro => {
            outro.style.fill = `${colorBase}`;
        });
	});
});

pathN.forEach(el => {
    el.addEventListener("mouseenter", () => {
        pathN.forEach(outro => {
            outro.style.fill = `${hover}`;
        });
	});

    el.addEventListener("mouseleave", () => {
        pathN.forEach(outro => {
            outro.style.fill = `${colorBase}`;
        });
	});
});