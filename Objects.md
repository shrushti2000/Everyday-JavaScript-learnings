### Create an object using Object constructor
```
const obj=Object.create({"name":"shrushti"})
```
### Object literal
```
const obj={
  "name":"shrushti"
}
```
### using new keyword on constructor function
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
### create object with no prototype attached to it
```
const obj=Object.create(null);
obj```
