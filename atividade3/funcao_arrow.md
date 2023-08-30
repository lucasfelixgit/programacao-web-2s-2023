# Arrow Functions <h1>

As Arrow Functions, também conhecidas como "funções de seta", são uma sintaxe empregada para criar funções em Javascript de maneira mais concisa.

Sua sintaxe pode ser observada no exemplo a seguir: 

**variável = (parâmetros) => { /* … */ };**

Códigos com um objetivo idêntico podem ser construídos utilizando expressões de funções tradicionais ou funções de seta (arrow functions). Exemplo: 

### Função Tradicional<h3>

const incrementa = function(n){return n + 1}

### Arrow Function <h3>

const incrementa_arrowf = (n) => {return n+1}

Perceba que a sintaxe das Arrow Functions é mais simples e enxuta que a das funções tradicionais. Além disso, podemos simplificar ainda mais o código. 

Por exemplo, quando lidamos com um único parâmetro, não é necessário utilizar parênteses:

x = n => {return n+1}

Para chamar a função, utiliza-se x(valor).

No exemplo anterior, a função armazenada em "x" se assemelha ao código do exemplo de incremento fornecido anteriormente. No entanto, podemos simplificar ainda mais. Quando o código contém apenas uma linha, não é necessário usar chaves {}. Além disso, se a função simplesmente retorna um valor específico, a palavra-chave "return" se torna dispensável. Portanto, o seguinte código realiza as mesmas operações dos exemplos anteriores:

y = n => n+1

ENTRADA -> y(100) 

SAÍDA <- 101

Uma função de soma utilizando Arrow Function seria:

const soma = (a,b) => a+b

console.log(soma(2,8));

SAÍDA: 10

### FONTE: https://diegomariano.com/arrow-functions/#:~:text=O%20que%20%C3%A9%20arrow%20function,fun%C3%A7%C3%B5es%20de%20forma%20mais%20condensada. <h3>
