'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /* 
    1. elegir un valor de pivote
    2. caso base
    3. definir un array para los elementos menores (izquierda)
    4. Definir un array para los elementos mayores al pivote (derecha)
    5. recorremos el arreglo
    6. Hacemos la condición para preguntar en donde estamos iterando, si el valor es menor al pivote
    7. Si cumple la condición, pusheamos al array menor(izquiera)
    8. Si no la cumple pusheamos al array mayor(derecha)
    9. Llamamos la recursión
  */

 
 if(array.length < 2) return array;
 let pivote = array[0]; //el pivote pivote puede ser cualquiera
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
      if(array[i] < pivote){ 
        left.push(array[i]);
      }else right.push(array[i]); 
    }
    return quickSort(left).concat(pivote).concat(quickSort(right));
}

console.log(quickSort([4,7,10,2,1,20]))

function merge(array1, array2) {
  let i = 0;
  let j = 0;

  let arrayOrdered = [];

  while (i < array1.length && j< array2.length) {
    if(array1[i] < array2[j]){
      arrayOrdered.push(array1[i]);
      i++
    }else {
      arrayOrdered.push(array2[j]);
      j++;
    }
  }
  return arrayOrdered.concat(array1.slice(i)).concat(array2.slice(j));
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
/*  
  1. Dividir el array a  la mitad.
  2. caso base, que es cuando tengamos un elemento en el array
  3. recursion
*/

if(array.length === 1) return array;

let mitadArray = Math.floor(array.length / 2);//redondearlo hacia abajo

let left = array.slice(0, mitadArray);
let right = array.slice(mitadArray);

return merge(mergeSort((left), mergeSort(right)));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
