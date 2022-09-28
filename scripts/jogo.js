let taboleiro = ['', '', '', '', '', '', '', '', ''];

let vezJogador = 0;

let simbolos = ['o', 'x'];

let gameOver = false;
let winsStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let jogador0 = "Preto";
let jogador1 = "Branco";

function colocarSimbolo(posicao) {
    if (gameOver) {
        return
    }

    if (taboleiro[posicao] == '') {
   
        taboleiro[posicao] = simbolos[vezJogador];
        gameOver = isWin();

        if (gameOver == false) {
            
            vezJogador = (vezJogador == 0) ? 1 : 0;
        }
    }
    return gameOver;
}

function isWin() {

    for (let i = 0; i < winsStates.length; i++) {
        let sequencia = winsStates[i];
        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];
        if (taboleiro[pos1] == taboleiro[pos2] &&
            taboleiro[pos1] == taboleiro[pos3] &&
            taboleiro[pos1] != '') {
            return true;
        }
    }
    return false;
}