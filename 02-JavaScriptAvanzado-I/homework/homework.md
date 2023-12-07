# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //no se declaro la variable => implicitamente JS le coloca el var, creandolo en el contexto global
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //10
   console.log(a); 
   var f = function (a, b, c) {
      b = a; // a=8, b=8
      console.log(b); //10
      b = c; //b=10, c = 10
      var x = 5;
   };//aca termina este scope de f
   f(a, b, c);
   console.log(b); //9
};
c(8, 9, 10); //x = 10, a = 9, b = 9, b = 10
console.log(b); // 10
console.log(x); //1
```

```javascript
console.log(bar);// undefined => hace uso del hoisting, sin embargo solo trae la variable más no el valor
console.log(baz); // error => baz is not defined //se detiene la ejecución pq' cuando JS se topa con un error para la ejecución
foo(); //hola => hoisting aunque es una mala practica
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2; //JS lo interpreta como una asignación, no como una declaración de variable
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//'Franco' => las dos var viven en un contexto global
```

```javascript
var instructor = 'Tony';
console.log(instructor); //''Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();//=> autoinvocación de la función, la función es anónima 
console.log(instructor);//'Tony' => contexto de ejecución
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); //'The Flash'
   console.log(pm); //'Reverse Flash'
}
console.log(instructor); //'The flash'
console.log(pm); //'Franco'
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
console.log(4 + 5 + "px") //9px => evalúa la asociatividad JS suma de izquierda a derecha, concatenación de JS
"$" + 4 + 5 //$45 => empieza con un string, los demás los toma con un string
"4" - 2 //2 
"4px" - 2 //NaN => JS "4px" no es un número, JS intenta hacer la operación  =>Not a Number
7 / 0 // Infinity => Todo número dividido por 0 es una indeterminación => Infinity
{}[0] //Undefined => El entorno de NodeJS y el navegador lo interpretan diferente, en el navegador da [0]
parseInt("09") //9 => 
5 && 2 // 2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23
3>2>1 //false 3>2 => true , true > 1 => false
console.log([] == ![]) //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); //undefined , 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); //undefined => problema por usar la var, con let = snack = 'Friskies', el resultado detornaría 'Meow Mix'
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
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

console.log(test()); //undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
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
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
