

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
  
  let arr = [1, 3, 5, 7, 9];
  
  console.log(buscaBinaria(arr, 3));
  console.log(buscaBinaria(arr, -1));
