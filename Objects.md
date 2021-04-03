### Create an object using Object constructor in JavaScript.
```
const obj=Object.create({"name":"shrushti"})
```
### Object  literal
```
const obj={
  "name":"shrushti"
}
```
### Using new keyword on constructor function
```function obj(key,value){
  this[key]=value
}
const obj1=new obj("name","shrushti")
console.log(obj1)
```
### create object using class
```
class Object{
  constructor(key,value){
    this[key]=value
  }
}
const obj=new Object("name","shrushti")
console.log(obj)
```
### Create an object with no prototype attached to it.
```
const obj=Object.create(null);
obj
```
### create obj from array using fromEntries
```
const arr=[['a',1],['b',2]];
const obj=Object.fromEntries(arr)
obj
```
Op:
{'a':1,'b':2}
