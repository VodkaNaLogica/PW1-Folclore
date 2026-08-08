let i = 1;

document.addEventListener('DOMContentLoaded', () => {
    console.log(i)
});

const botaoLD = document.getElementById('BotaoP');

botaoLD.addEventListener('click', () => {
    if (i == 1) {i = 0} else {i = 1}
    console.log(i)
    botaoLD.classList.toggle('vermelho');
});