function nFactorial(n) {
    if (n === 0 || n === 1){ 
    return 1;
    } else if(n < 0){
        throw Error('Introduce solo números naturales') //clase Error o type Error
      }
    const nextNum = n - 1; 

    return n * nFactorial(nextNum);
   /*  primera recursión */
    //n:  5
    // next Num:  4
    /*  Segunda recursión */
    // n:  4
    // next Num:  3
    /*  tercera recursión */
    // n:  3
    // next Num:  2
    /*  cuarta recursión */
    // n:  2
    // next Num:  1

}

function nFactorial2(n) { //con bucle
    if (n === 0 || n === 1){ 
    return 1;
    } else if(n < 0){
        throw Error('Introduce solo números naturales') //clase Error o type Error
      }
    let auxiliar = n;
   
      while(n !== 1 && n !== 0) {
        auxiliar *= (n -1);

        n --;
      }
    return auxiliar;
    }



console.log(nFactorial2(-5));

// nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
// Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

// Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

function nFibonacci(n, array = [0,1]) {
    if (n === 0 || n === 1) {
        return n;
    } else if (n === 1) {
        return n;
    } else {
    const sumaPos = array[array.length -1 ] + array[array.length -2] ;
    array.push(sumaPos);
    const nextNum = n -1;

    return  nFibonacci(nextNum, initialArray);
    }
    
}
console.log(nFibonacci(7)[7]);

//Forma iteratica

function nFibonacci2(n) {
    if(n < 0) return 'Solo números Naturales';
    if (n < 2) {
        return n;
    } 
    
    let auxiliar = [];
    auxiliar[0] = 0;
    auxiliar[1] = 1;

    for (let i = 2; i <= n; i++) {
        auxiliar[i] = auxiliar[i - 1] + auxiliar[i - 2]; 
        
    }
    return auxiliar[n];
    
  }
  console.log(nFibonacci2(8))


  //
   function Queue() {
    this.queue = [];
   }

   Queue.prototype.enqueue = function (value){
        return this.queue.push(value);
   }
   Queue.prototype.dequeue = function (){
    return this.queue.shift();
   }
   Queue.prototype.size = function () {
    return this.queue.length;
   }

const fila = new Queue();

console.log(fila.dequeue());

