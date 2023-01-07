## Busca Binária

Com a busca binária, você chuta um número intermediário e elimina metade dos números restantes a cada vez. 

De maneira geral, para uma lista de <i>n</i> números, a pesquisa binária precisa de log<sub>2</sub><i>n</i> para retornar o valor correto, enquanto a pesquisa simples precisa de <i>n</i> etapas.

```
❗ Atenção: A pesquisa binária só funciona quando a lista está ordenada.
```

### 🔢 Logaritmos

A expressão log<sub>10</sub>100 basicamente diz: "Quantos 10s conseguimos multiplicar para chegar a 100?". Resposta: 2, 10 x 10.

- 🎥&nbsp;&nbsp;[Logaritmo (Curso Completo)](https://www.youtube.com/playlist?list=PLTPg64KdGgYiyW4u-g8y-dSkT1iz2cUKA)

### 💻 Código

![Diagrama de Busca Binária](./images/binary-search.png "Busca Binária")

Código em javascript:
```
function buscaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;
  
    while (baixo <= alto) {
      let meio = Math.floor((baixo + alto) / 2);
      let chute = lista[meio];
  
      if (chute == item) {
        return meio;
      } else if (chute < item) {
        baixo = meio + 1;
      } else {
        alto = meio - 1;
      }
    }
    return null;
  }
```