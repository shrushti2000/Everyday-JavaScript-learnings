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

