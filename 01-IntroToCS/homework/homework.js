'use strict';

function BinarioADecimal(num) {
     let arrayNum;
      if (num === String){
           arrayNum = num.split('').map( item => Number(item)); 
      }else {
          arrayNum = num.toString().split('').map( item => Number(item)); 
      }
     let count = -1;
  
     const multiplyByPower = arrayNum.map(num =>{
         count ++;
          return num * 2 **(arrayNum.length - 1 - count);
     } );
     const decimal = multiplyByPower.reduce((sum, element)=> sum + element,0);
     return decimal;
  };
  
  function DecimalABinario(num) {
     let number;
      if (num === String) {
           number = num.split('').map( item => Number(item)).join('');
      }else {
           number = num.toString().split('').map( item => Number(item)).join('');
      }
      
     let remainders = [];
     var num = number;
    while (num > 0) {
      remainders.push (Math.round(num % 2));
      num = Math.floor(num /2);
    }
    const binary = remainders.reverse().join('');
     return binary.toString();
  };

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
