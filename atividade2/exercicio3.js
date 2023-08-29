const matrizA = 
[
    [1, 3],
    [2, 5],
];

const matrizB = 
[
    [2, 2],
    [0, 1],
];

const linhasA = matrizA.length;
const colunasA = matrizA[0].length;

const linhasB = matrizB.length;
const colunasB = matrizB[0].length;


if (colunasA !== linhasB) 
{
    console.log("Não é possível calcular.");
} 
else 
{
    const result = new Array(linhasA);

    for (let i = 0; i < linhasA; i++) {

        result[i] = new Array(colunasB);

        for (let j = 0; j < colunasB; j++) {

            result[i][j] = 0;

            for (let k = 0; k < colunasA; k++) {
                
                result[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    console.log(result);

}
