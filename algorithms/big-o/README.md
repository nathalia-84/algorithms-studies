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
|O(log *n*)|Logaritmica|Pesquisa Binária|+Rápido|
|O(*n*)|Linear|Pesquisa Simples||
|O(*n* * log *n*)||Quick sort||
|O(*n*<sup>2</sup>)|Quadrática|Selection sort||
|O(*n*!)|Fatorial|Caixeiro-viajante|+Lento|

### Referências

- 🌐&nbsp;&nbsp;[Big O Cheat Sheet](https://www.bigocheatsheet.com/)