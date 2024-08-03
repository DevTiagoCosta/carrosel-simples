const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {
    if (imagemAtual === imagens.length - 1) {
        return; 
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    setaMostrarEsconder();

})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagemAberta();
    mostrarImagem();
    setaMostrarEsconder();
})

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}

function setaMostrarEsconder() {
    const naoPrimeiraImagem = imagemAtual !== 0;

    if (naoPrimeiraImagem) {
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add('opacidade');
    }

    const ultimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;

    if (ultimaImagem) {
        setaAvancar.classList.add('opacidade');
    } else {
        setaAvancar.classList.remove('opacidade');
    }
}