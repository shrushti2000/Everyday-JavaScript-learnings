###  setTimeout function 
```
setTimeout(function(param1,param2){
  console.log(param1,param2)
},3000,"hello","world")
``` 
```
setTimeout(()=>{
  console.log("hello")
},3000)
```
OP:hello world

### write a function which takes a function and executes it after 3 sec
```
function exefn(func){
  if(typeof func==="function"){
  setTimeout(()=>{func()},3000)}
}
function func(){
  console.log("hello")
}
exefn(func)
```
OP:hello

### write a function to print nos from 1 to 10 with a delay of 1 sec between each value 
```
for(let i=1;i<10;i++){
setTimeout(()=>console.log(i),i*1000)
}
```

