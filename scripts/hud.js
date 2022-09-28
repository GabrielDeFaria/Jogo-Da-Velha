document.addEventListener('DOMContentLoaded', () => {
    let posicoes = document.querySelectorAll(".posicoes");
    posicoes.forEach((posicao) => {
        posicao.addEventListener('click', selecionarQaudrado);
    })
});

function selecionarQaudrado(evento) {
    let posicoes = evento.target;
    posicao = posicoes.id;
    if (colocarSimbolo(posicao)) {
        setTimeout(() => {
            var resultado = document.getElementById('vencedor');
            if (vezJogador == 0) {
                resultado.innerHTML = `<div id='vencedor'>o vencedor foi o jogador ${jogador0}</div>`
            } else {
                resultado.innerHTML = `<div id='vencedor'>o vencedor foi o jogador ${jogador1}</div>`
            }
        }, 10);
    }
    updateSimbolos(posicao);
}
function updateSimbolos(posicao) {
    let posicoes = document.getElementById(posicao.toString());
    let simbolo = taboleiro[posicao];
    posicoes.innerHTML = `<div class = '${simbolo}'></div>`
}