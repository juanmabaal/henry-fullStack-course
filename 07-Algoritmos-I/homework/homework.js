'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  /* 
  1. Debemos guardar los factores en un array 
  2. Debemos iniciar el array con el elemento 1
  3. Iniciamos nuestro divisor en 2
  4. Objetivo: Descomponer el número que nos pasan por parametro y entregar los factores
  5. Lo podemos hacer con un while
  6. caso base: mientras el numero sea diferente de 1 o mayor a 1.
  7. Dentro del while:
   - La division debe ser exacta o resto  0 con la condicion if
   -Si es exacta => pusheamos el factor dela rray
   Dicidimos el numero actual  con el divisor del momento
   - Si no es exacto => incrementamos el valor del divisor
   8. retornar el array
  */
  const arr = [1];
  let divisor = 2;
    while ( num != 1) {
      if(num % divisor === 0) {
        arr.push(divisor);
        num /=divisor;
      }else divisor++;   
  }
  return arr;
}
console.log(factorear(180))
//Complejidad O(N)

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const n = array.length;
  for (let i = 0; i < n -1; i++) {
      for (let j = 0; j < n - 1; j++) {
        console.log(j)
          if(array[j] > array[j + 1]){
            const temp = array[j];
            array[j] = array[j +1];
            array[j +1] = temp;
          } 
      }
  }
  return array;
}

console.log(bubbleSort([4,8,9,6,3,2,1]))


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length ; i++) {
    
    const valorActual = array[i];
    
    let j = i -1;
 
    while (j >= 0 && array[j] > valorActual) {
      array[j + 1] = array[j];
      j--;
    }
    array[j +1] = valorActual;
  }
  return array;
}

console.log(insertionSort([5, 1, 4, 2, 8]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  let auxiliar = [...array]; //operador de propagración para copiar los datos del array;

  for (let i = 0; i < array.length; i++) {
   let minimo = auxiliar.slice(i +1)
    .reduce((acum, elem, index) =>(elem < auxiliar[acum] ? index + i +1: acum), i);
    console.log(minimo)

    if(minimo != i) {
      [auxiliar[i], auxiliar[minimo]] = [auxiliar[minimo], auxiliar[i]]
    }
    
  }
  return auxiliar;
}

console.log(selectionSort([5, 1, 4, 2, 8]))
console.log([5, 1, 4, 2, 8].slice(1).reduce((acum, elem, index)=> (elem < [5, 1, 4, 2, 8][acum] ? index + 0 + 1 : acum ), 0))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
