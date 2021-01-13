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
