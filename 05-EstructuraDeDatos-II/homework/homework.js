'use strict';

const { has } = require("markdown-it/lib/common/utils");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
/* 
 */
function LinkedList() {
    this.head = null;
    this._length = 0;

}

LinkedList.prototype.add = function(data) {
  let node = new Node(data);
  let current = this.head;

  //Si la lista está vacia
  if (current === null) {
    this.head = node;
    this._length++;
    return node;
  }
  
  //Recorrer hasta llegar al último nodo
  while(current.next){ //=> hasta que current.next sea null
    current= current.next; //sobreescribimos current para que se mueva de nodo en nodo
  }
  current.next = node;
  this._length++;
  return node;
}

LinkedList.prototype.remove = function () {

    //Si la lista está vacia
    if (this._length === 0) {
        return null
    }

    let current = this.head;
    let previous = null;

    //Si la lista tiene muchos nodos
    while(current.next) {
        previous = current;
        current = current.next;
    }

    if(!previous) {
        this.head = null;
    } else {
        previous.next = null;
    }

    this._length--;
    return current.value;
    
}

LinkedList.prototype.search = function (cb){
  let current = this.head;
  
  while (current !== null) {
    if (typeof cb !== 'function'){
      if(current.value === cb) return current.value;

      }else if (cb(current.value)) {
              return current.value
          }
      current = current.next;
      };
  
  return null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.//guarda la info
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla. //obtener la info
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) {
  let totalCodeValue = 0;
for (let i = 0; i < key.length; i++) {
   totalCodeValue += key.charCodeAt(i); //convierte cada letra de acuerdo al unicode
}
  return totalCodeValue % this.numBuckets;
};

HashTable.prototype.set = function(key, value){
  if (typeof key !== 'string'){
    throw TypeError('Keys must be strings')
  }
  let indice =this.hash(key);
  if(!this.buckets[indice]) {
    this.buckets[indice] = {};
  }
  console.log(this.buckets[indice][key] = value);
  this.buckets[indice][key] = value;

  console.log(this.buckets)
};

//Buscar el valor en el locker
HashTable.prototype.get = function(key){
  let indice = this.hash(key);

  return this.buckets[indice][key];

};
HashTable.prototype.hashKey = function(key){
 return  !!this.get(key);
};


const hashTable = new HashTable();

console.log(hashTable.hash('instructora'))

hashTable.set('foo', 'bar1')
hashTable.set('ofo', 'bar2')
console.log(hashTable.get('ofo'))
console.log(hashTable.hashKey('ofo'))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
