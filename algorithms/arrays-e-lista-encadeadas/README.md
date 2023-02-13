### Arrays e Listas Encadeadas
## Listas encadeadas

Cada item armazena o endereço do próximo item da lista. Um monte de endereços aleatórios de memória estão ligados. Adicionar um item a uma lista encadeada é fácil: você o coloca em qualquer lugar da memória e armazena o endereço do item anterior. Com as listas encadeadas vocÊ nunca precisa mover os seus itens.

## Arrays

Suponha que você queira ler o último item de uma lista encadeada. Você não pode fazer isso porque não sabe o endereço dele. Em vez disso, precisa ir ao item #1 para pegar o endereço do item #2. Então, é necessário ir ao item #2 para encontrar o endereço do item #3, e assim por diante, até conseguir o endereço do último item. Listas encadeadas são ótimas se você quiser ler todos os itens, um de cada vez: você pode ler um item, seguir para o endereço do próximo item e fazer isso até o fim da lista. Mas se você quiser pular de um item para outro, as listas encadeadas são terríveis.

Com arrays é diferente. Você sabe o endereço de cada item. Por exemplo, suponha que seu array tenha cinco itens e que você saiba que o primeiro está no endereço 0. Qual o endereço do item #5? A matemática lhe dá a resposta: está no endereço 4. Arrays são ótimos se você deseja ler elementos aleatórios, pois pode encontrar qualquer elemento instantaneamente em um array.

Aqui está o tempo de execução para operações comuns de arrays e listas:

|   |Arrays|Listas|
|---|---|---|
|Leitura|$O(1)$|$O(n)$|
|Inserção|$O(n)$|$O(1)$|

$O(n)$ = tempo de execução linear <br>
$O(1)$ = tempo de execução constante

## Exercícios 
2.1 <br>
Resposta: Uma lista.

