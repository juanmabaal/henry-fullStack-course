'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left= null;
   this.right = null;
}

BinarySearchTree.prototype.size = function (){
   let counter = 1; 
    if(this.left) {
       counter += this.left.size();
    }
    if(this.right) {
        counter += this.right.size();
     }
    return counter;
};

BinarySearchTree.prototype.insert = function (value){
   if(value < this.value) {
      if(this.left === null) {
         const newTree = new BinarySearchTree(value);
         this.left = newTree
      }else {
         this.left.insert(value);
      }
   }else if(value >= this.value) {
      if(!this.right) {
         const newTree = new BinarySearchTree(value);
         this.right = newTree;
      }else {
         this.right.insert(value);
      }
   }
};
BinarySearchTree.prototype.contains = function (value){
   if (value === this.value) return true;
   if (value < this.value) {
      if(!this.left) {
         return false
      }
      return this.left.contains(value);
   };
   if(value >this.value){
      if(!this.right) return false;
      return this.right.contains(value);
   }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
   if (order === undefined || order === 'in-order' ) {
      this.left && this.left.breadthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.breadthFirstForEach(cb, order);
   }
   if ( order === 'pre-order') {//nodo padre -nodo izq -nodo derecho
      cb(this.value);
      this.left && this.left.breadthFirstForEach(cb, order);
      this.right && this.right.breadthFirstForEach(cb, order);
   }
   if (order === 'post-order') {
      this.left && this.left.breadthFirstForEach(cb, order);
      this.right && this.right.breadthFirstForEach(cb, order);
      cb(this.value);
    }

}

// BinarySearchTree.prototype.inOrder= function (node ,array){
//     if(!node) return;
//     this.inOrder(cb, node.left);
//     array.push(node.value);
//     this.inOrder(cb, node.right);
// }

// BinarySearchTree.prototype.preOrder = function (node, array){
//     if(!node) return;
//     array.push(node.value);
//     this.preOrder(node.left, array);
//     this.preOrder(node.right, array);
// }
// BinarySearchTree.prototype.postOrder = function (node, array){
//     if(!node) return;
//     this.postOrder(node.left, array);
//     this.postOrder(node.right, array);
//     array.push(node.value);
// }
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []){

   cb(this.value);
   this.left && arr.push(this.left);
   this.right && arr.push(this.right);
   console.log(arr)

   arr.length && arr.shift().breadthFirstForEach(cb, arr);


};

const tree = new BinarySearchTree(20);

const valuesToInsert = [ 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34];

valuesToInsert.forEach( value =>{
   tree.insert(value)
});

console.log(tree);
const breadth = []
tree.breadthFirstForEach(function(value) {
   breadth.push(value);
})

console.log(breadth)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
