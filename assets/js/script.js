function changeImg (imagem) {
    document.querySelector('.pepsi').src = imagem;
}

function changeBgColor (color) {
    const changeBg = document.querySelector('.secao');
    changeBg.style.backgroundColor = color;
}

function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navegacao = document.querySelector('.navegacao');
    toggleMenu.classList.toggle('active');
    navegacao.classList.toggle('active');
}