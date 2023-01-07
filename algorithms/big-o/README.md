## Notação Bio O

A notação *Big O* é uma notação especial que diz o quão rápido é um algoritmo.

Tempos de execução crescem com velocidades diferentes:

|   | Pesquisa Simples | Pesquisa Binária |
| --- | --- | --- |
| 100 elementos | 100ms | 7ms |
| 10000 elementos | 10 segundos | 14ms |
| 1000000000 elementos | 11 dias | 32ms |

A notação Big O informa o quão rápido é um algoritmo. Por exemplo, imagine que você tem uma lista de tamanho *n*. O tempo de execução na notação Big O é O(*n*). Onde estão os segundos? Eles não existem - a notação Big O não fornece o tempo em segundos. A notação Big O *permite que você compare o número de operações*. Ela informa o queão rapidamente um algoritmo cresce.

#### 🛑 A notação Big O estabelece o tempo de execução para a pior hipótese

### Alguns exemplos comuns de tempo de execução Big O 

|Big O Notation|Tipo|Algoritmo|Tempo|
|---|---|---|---|
|O($\log_{2} n$)|Logaritmica|Pesquisa Binária|+Rápido|
|O($n$)|Linear|Pesquisa Simples||
|O($n * $\log_{2} n$)||Quick sort||
|O($n^2$)|Quadrática|Selection sort||
|O($n!$)|Fatorial|Caixeiro-viajante|+Lento|

### Exercícios

1.3 Você tem um nome e deseja encontrar o número de telefone da pessoa na lista telefônica.

Resposta: O($\log_{} n$)

1.4 Você tem um número de telefone e deseja localizar o nome da pessoa na lista telefônica. (Dica: você terá que pesquisar em todo o livro!)

Resposta: O($n$)

1.5 Você deseja ler os números de cada pessoa na lista telefônica.

Resposta: O($n$)

1.6 Você quer ler os números apenas do As.

Resposta: O($n$)


### Referências

- 🌐&nbsp;&nbsp;[Big O Cheat Sheet](https://www.bigocheatsheet.com/)