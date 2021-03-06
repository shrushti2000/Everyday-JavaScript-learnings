### Write a simple function in JavaScript and call it
```js
function displayHello(){
  console.log("hello")
}
displayHello();
```
op:
hello

### Write a function expression
```js
var functexpr=function(){
  console.log("hello")
}
functexpr();
```
op:
hello
### Write a function that returns another function and executes it after calling.

```js  
function higherOrderFunction(){
  function display(){
    console.log("hello")
  }
 return  display;
}
var hof=higherOrderFunction();
hof();
```
op:
hello
### Write a fn that executes another function received as argument
```js
function f1(argfn){
  if(typeof argfn==="function"){
    argfn();
  }
  
}
function argfn(){
  console.log("hello")
}
f1(argfn);
```
op: hello
a function's execution context gives two objects by default 1. this keyword 2. arguments object

### Write a function that takes variable number of arguments and prints them
```js
function varArgs(...args){
  for(let key in args){
    console.log(arguments[key])
  }
}
f1("hi","hello",1,6,7)
``` 
op:
hi hello 1 6 7
arrow functions cannot take variable arguments!

###  demonstrate hoisting
```
displayHello();
function displayHello(){
  console.log("hello")
}
```
op:hello
Variables and function declared with var keyword are put into the memory in the creation phase , that's why those variables functions can be accessed even before they are declared.

### IIFE
```
(function displayHello(){
  console.log("hello world")
})();
```
op: hello world
```
(function displayHello(){
  console.log("hello world")
}());
```
### function that returns multiple values
```
function returnMultipleValues(){
  const a=10,b=20;
  return [a,b];
}
[x,y]=returnMultipleValues();
```
op: [10 20]

### generator functions
```
function* generatorFunction(){
  const a=5,b=10;
  yield a;
  yield b;
}
const iterator=generatorFunction();
const x=iterator.next().value;
const y=iterator.next().value;
console.log(x,y)
```
op:5 10
