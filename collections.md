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
### splice method in JavaScript

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
### write a function to concatenate two arrays
```
var arr1=[1,2,3]
var arr2=[10,20,30]
function mergeArray(arr1,arr2=arr1){
  return [...arr1,...arr2]
}
var array=mergeArray(arr1,arr2)
array
```
```
var arr1=[1,2,3]
var arr2=[10,20,30]
function mergeArray(arr1,arr2=arr1){
  return arr1.concat(arr2)
}
var array=mergeArray(arr1,arr2)
array
```
```
var arr1=[1,2,3]
var arr2=[10,20,30]
function mergeArray(arr1,arr2=arr1){
 arr1.push(arr2)
 return arr1
}
var array=mergeArray(arr1,arr2)
array
```
### show how array can act like stack
```
var arr1=[1,2,3]
arr1.push(11)
arr1.pop()
arr1
```
### show how array can act like queue
```
var arr1=[1,2,3]
arr1.push(11)
arr1.shift()
arr1
```
### sort array in ascending order
```
var arr1=[1,2,3]
arr1.sort((a,b)=>a-b)
arr1
```
### sort array in descending order
```
var arr1=[1,2,3]
arr1.sort((a,b)=>b-a)
arr1
```
### show the use of filter and map functions
```
var arr1=[-1,-2,1,2,3,4,5,6]
const filteredArray=arr1.filter(val=>val>0)
const squaredArray=filteredArray.map(val=>val * val)
squaredArray
```
### Shuffle array
```
function generateArray(start=1,end=0){
  const arr=[]
  for(let i=start;i<end;i++){
    arr.push(i)
  }
  return arr
}
const arr=generateArray(1,10);
arr.sort(()=>0.5-Math.random())
arr
```
### create an array by removing holes in an array
holes are undefined values in an array
```
const arrayWithoutHoles=arr.filter(value=>true)
```
filter does not iterate over undefined
###  reduce method in JavaScript
``
const arr=[10,20,30]
const sum=arr.reduce((acc,val)=>acc+val,0)
sum
``
