# Promises <h1>

As Promises em JavaScript são objetos que viabilizam a realização de operações assíncronas no seu código. Elas funcionam como contêineres que armazenam valores, permitindo que você os utilize posteriormente, enquanto prossegue com outras atividades. Isso possibilita a execução de processamentos de forma assíncrona no código.

A Promise representa uma ação que ocorrerá em algum momento futuro do código, podendo adotar diversas situações. Assim, ela pode ser concluída com sucesso (resolvida) ou resultar em um erro (rejeitada). Nesse contexto, a função "then" será empregada para examinar se a execução do código teve êxito ou resultou em erro. Quando bem-sucedida, a Promise retornará o método "resolve"; em casos de erro, retornará o método "reject".

Segue exemplo do fluxo do código: 

![fluxo](https://miro.medium.com/v2/resize:fit:720/format:webp/1*g1EZpcctuSoa6Jcwp68SUQ.png)

# Por que utilizar Promises <h3>

Na arquitetura de um código, a formulação de funções assíncronas desempenha um papel crucial na fluidez do fluxo de operações. Por exemplo, essas funções podem ser empregadas ao processar imagens em um programa.

Nessa perspectiva, estabelecer uma uniformidade no código é de extrema importância para preservar a estrutura, especialmente quando se trata de projetos colaborativos envolvendo múltiplos indivíduos. A clareza do código se torna essencial nessas implementações, garantindo que a legibilidade seja mantida.

# Sintaxe <h3>

**new Promise((resolve: Function, reject: Function) => void)**

# 4 principais estados de uma Promise <h3>

# Estado Pending <h4>

Assim como o termo sugere, o estado da Promise permanece em um estado pendente. Isso ocorre quando a Promise ainda não passou pelo processo de ser cumprida (fulfilled) com sucesso ou rejeitada (rejected).

# Estado fulfilled <h4>

Também é referida como "resolved", indicando que a Promise foi concluída com êxito.

# Estado rejected <h4>

A Promise é rejeitada, indicando que a operação não foi bem-sucedida.

# Estado settled <h4>

Este é o estágio final da Promise, pois nele testemunhamos a conclusão e obtemos a informação se ela foi resolvida (completada com sucesso) ou rejeitada (não teve êxito).

# FONTE: https://blog.betrybe.com/javascript/promises-javascript/#2 <h3>
