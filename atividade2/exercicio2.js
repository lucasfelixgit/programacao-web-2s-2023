const matriz = 
[
    [1, 2],
    [3, 4],
    [5, 6],
];

const linhas = matriz.length;
const colunas = matriz[0].length;
const matrizTransposta = [];


for (let j = 0; j < colunas; j++) {

    matrizTransposta[j] = [];

    for (let i = 0; i < linhas; i++) {

        matrizTransposta[j][i] = matriz[i][j];

    }
}

console.log(matrizTransposta);