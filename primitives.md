# 1.typeof operator
 console.log(typeof 50); <br />
 console.log(typeof null); <br />
console.log(typeof undefined); <br />
console.log(typeof "text"); <br />
console.log(typeof Nan); <br />
console.log(typeof {}); <br />
console.log(typeof [1,2]); <br />
console.log(typeof Symbol());  <br />

# 2.Number and String
1. '1'+ 2    // 12
2.  1+ 2+ '3   //33
3.  1 +'2'  //12

# 3.swap two nos
let no1=10;
let no2=20;
[no1,no2]=[no2,no1];
 ### op
  20 10 
 
 # 4.No to string
 const no = 12; 
no.toString();  //"12"
String(no);      //"12"
no+''            //"12"

# 5.String to number
const str="12";
Number(str);    //12
parseInt(str)   //12

# 6.BigInt
const BigInt=123456785493738n;
typeof BigInt;                      //bigint

# 7.Usage of || && ?? !!
false || true    //true
true && false    //false
undefined ?? 10; //10 returns rhs if lhs is undefined or null
null ?? 10;      //10
!!10        //true converts to boolean primitive
!!0         //false
 
