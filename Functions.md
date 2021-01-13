# Write a function that returns another function and executes it after calling.

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
### op
hello
