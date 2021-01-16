### Literal form
```
const arr=[1,2,3];
```
### constructor form
```  
const arr=new Array(1,2,3,4)

```
### predefined slots
```
const arr=new Array(10)
```
 
### iterate over array
```
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
```
```
for(let index in arr){
  console.log(arr[index])
}
```
```
for(let value of arr){
  console.log(value)
}
```
```
arr.forEach(val=>console.log(val))
```
### append,prepend elements in an array
```
arr.push(5)
arr.unshift(0)
arr.push(6,7)
arr.unshift(-2,-1)
arr.pop()
arr.shift()
```
```
const arr=new Array(1,2,3,4)
const arr1=new Array(10,20)
arr.push(...arr1)
arr.unshift(...arr1)
```
### splice method

```
const arr=new Array(1,2,3,4)
arr.splice(2,1)
arr
```
op:[1,2,4]
splice method can remove elements and also add elements at specified position
```
const arr=new Array(1,2,3,4)
arr.splice(2,0,10,20,30)
arr
```
op:[
   1, 2, 10, 20,
  30, 3,  4
]

### different ways to empty an array
```
arr=[]
```
```
arr.length=0
```
```
while(arr.length>0){
  arr.pop()
}
```
```
arr.splice(0,arr.length)
```
### check if given input is an array
```
Array.isArray(arr)
```
```
Object.prototype.toString.call(arr)==='[object Array]'
```
