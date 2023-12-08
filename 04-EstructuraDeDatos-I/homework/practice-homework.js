function nFactorial(n) {
    if (n === 0 || n === 1){ 
    return 1;
    } else if(n < 0){
        return console.log(`${n} es un valor negativo, no se puede hacer factorial para negativos!`);
    }
    const nextNum = n - 1; 

    return n * nFactorial(nextNum);
}

console.log(nFactorial(-3))

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



