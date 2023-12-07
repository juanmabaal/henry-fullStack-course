x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); 
   console.log(a); 
   var f = function (a, b, c) {
      b = a;
      console.log(b); 
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); 
};
c(8, 9, 10); //x = 10, a = 8, b = 8, b = 9
console.log(b); // 10
console.log(x); //1

//-----------------------

console.log(bar);// undefined => hace uso del hoisting, sin imbargo solo trae la variable más no el valor
// console.log(baz); //error => baz is not defined
foo(); //hola => hoisting aunque es una mala practica
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2; //JS lo interpreta como una asignación, no como una declaración de variable

//-----------------

var instructor = 'Tony';
if (true) {
    var instructor = 'Franco';
}
console.log(instructor); //Franco

//---------------------
var instructor = 'Tony';
console.log(instructor); //''Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //'Franco'
   }
})(); //=> autoinvocación de la función, la función es anónima 
console.log(instructor);//'Tony' => contexto de ejecución

//--------------
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); //'The Flash'
   console.log(pm); //'Reverse Flash'
}
console.log(instructor); //'The Flash'
console.log(pm); //'Franco'


//-------------------
// ### Coerción de Datos

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

// ```javascript
console.log(6 / "3")//2 => Toma 6, convierne el string en número y hace la operación, implícito
console.log("2" * "3") // 6 => JS los convierte a number
console.log(4 + 5 + "px") //9px => evalúa la asociatividad JS suma de izquierda a derecha
console.log("$" + 4 + 5) //$45 => empieza con un string, los demás los toma con un string
console.log("4" - 2) //2
console.log("2" * "3") //6
console.log("4px" - 2) //NaN
console.log(7 / 0) // Infinity
console.log({}[0]) //Undefined
console.log(parseInt("09")) //9
console.log(parseInt("abc09"))//NaN toma de primero los caracteres
console.log(parseInt("09abc"))//9 => toma el nueve y lo parsea
console.log(Number("09abc")) //Nan pq number identifica letra y no saca el número
console.log(Number('09')) //0
console.log(5 && 2 ) // 2 => toma el último valor verdadero
console.log(2 && 5) //5
console.log(0 && 5) //0 pq 0 hace parte de los falsy
console.log(5 || 0) //5 
console.log(0 || 5) //5
console.log(0 || 0) //0
console.log([3]+[3]-[10]) //23
console.log(['3']+['3']-[10]) //23
console.log(3>2>1) //false 3>2 => true , true > 1 => false
console.log([] == ![]) //true => [] === negacion = false; [] es 0 => que es false
console.log([] == [])  //false


//-------------------
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   
   return snack;
}

console.log(getFood(false));


//-------------------
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test); //undefined

//-----------------
function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing(); //1. console.log(1), 2.  console.log(4);, después el setTimeout con 0 seg y después el setTimeout con 1000 milisegundos