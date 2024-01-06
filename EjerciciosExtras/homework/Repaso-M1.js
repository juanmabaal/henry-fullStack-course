const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
   /* 
    1. sumar valores del arreglo
    2. me puedo topar con un arreglo
    3. tomar dos caminos
        - que hacemos si me encuentro otro arreglo- aplico recursion
        - que hacemos si me encuento un numero => sumo
   */

        let suma = 0;

        for (let i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])) suma += countArray(array[i])
            else suma += array[i];
        }
        return suma;
}

console.log(countArray([1, [2, [3,4]], [5,6], 7]))


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    /* 
        LOS OBJETOS LOS PODEMOS RECORRER ? FOR IN
        1. VAMOS A NECESITAR UN CONTADOR QUE CUENTE LAS PROPIEDADES
        2. RECORRER LOS OBJETOS
        3. SI ES UNA PROPIEDAD, SUMARLA A NUESTRO CONTADOR
        4. PREGUNTAR SI LA PROPIEDAD ES UN OBJETO Y DIFERENTE A UN ARRAY... APLICAMOS RECURSION
        5. SI LA PROPIEDAD ES UN OBJETO, SUMARLA Y APLICAMOS RECURSIÓN
        6. RETORNAMOS EL CONTADOR
    */
        let counter = 0;

        for (const prop in obj) {
            counter++;

            if( typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
                counter += countProps(obj[prop])
            }
        }
        return counter;
}

var obj = {
  a: {
    a1: 10,
    a2: 'Franco',
    a3: {f: 'r', a: 'n', c: {o: true}}
  },
  b: 2,
  c: [1, {a: 1}, 'Franco']
}

console.log(countProps(obj))


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    /* 
        CASTEAR -> COHERSIÓN E DATOS
        METODO => isNaN
        1. RECORRER LA LISTA
        2. CHEQUEANDO QUE EL VALOR DEL NODO NO SEA UN NUMERO(isNan)
        3. si no es un numero, cambio el valor a kiricocho
        4. GUARDO LOS CAMBIOS REALIZADOS (CONTARLOS)
    */

        let cambios = 0;

        let current = this.head;

        while (current) {
            if(isNaN(Number(current.value))) {
                current.value = 'kiricocho';
                cambios++
            }
            current = current.next;
        }

        return cambios;
}

console.log(isNaN(Number(false)))

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    //FIFO => FIRST IN LAST OUT
    /* 
        1. DEBEMOS UTILIZAR LOS MÉTODOS DE LA CLASE QUEUE
        2. NO SON ARREGLOS => OBJ INSTANCIADOS DE LA CLASE QUEUE
        3. FIJARNOS EN LOS TAMAÑOS DE LAS QUEUES QUE RECIBIMOS POR PARAMETRO
        4. OBJETIVO: COMBINAR LAS QUEUES => CON LAS QUEUES ALTERNADAS
        5. SACAR CADA ITEM DE CADA QUEUE Y UNIRLO A LA NUEVA QUEUE

        6. RETORNAR UNA QUEUE (INSTANCIA DE QUEUE)
    */

        const newQueue = new Queue();

        while(queueOne.size()  || queueTwo.size()) {

            if(queueOne.size()) newQueue.enqueue(queueOne.dequeue());
            if(queueTwo.size()) newQueue.enqueue(queueOne.dequeue());
        }

        return newQueue;

}

console.log(mergeQueues([7,3,5],[2,4,6]))


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function (num) {
        return multiplier * num;
    }
}

const multiplyByFour = closureMult(4);
console.log(multiplyByFour(8));

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    /* 
        1. DEBEMOS SUMAR LOS VALORES DE CADA NODO DEL ARBOL
        2. SI ESTA VACIO DEBE RETORNAR 0.
        3. NO NOS OLVIDEMOS QUE LOS ARBOLES SON RECURSIVOS
        4. ACUMULANDO EN UNA VARIABLE A LA QUE VAMOS SUMANDO
        5. SUMANDO SI TENEMOS IZQUIERDA Y / O DERECHA

    */

        let suma = 0;

            suma += this.value;
            if(this.left) {
                suma +=  this.left.sum()
            }
            if(this.right) {
                suma +=  this.right.sum()
            }

        return suma;
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}