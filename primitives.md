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
1. no.toString();  //"12"
2. String(no);      //"12"
3. no+''            //"12"

# 5.String to number
1. const str="12";
2. Number(str);    //12
3. parseInt(str)   //12

# 6.BigInt
const BigInt=123456785493738n;
typeof BigInt;                      //bigint

# 7.Usage of || && ?? !!
1. false || true    //true
2. true && false    //false
3. undefined ?? 10; //10 returns rhs if lhs is undefined or null
4. null ?? 10;      //10
5. !!10        //true converts to boolean primitive
6. !!0         //false
 
 # 8.Methods available on Number
 1. Number.isInteger(12)    //true
2. Number.isInteger(-12)    //true
3. Number.parseInt(3.28)    //3
4. Number.parseFloat('3.455')  //3.455
5. 34.234.toFixed(2)          //34.23
6. 34.234.toPrecision(3)       //34.23

# 9.Methods available on Math Object
 1.  Math.abs(-5);       //5
2. Math.floor(1.6)       //1
3. Math.ceil(2.4)        //3
4. Math.round(3.5)       //3
5. Math.max(1,3,-4)      //3
6. Math.min(1,3,-4)      //-4
7. Math.sqrt(64)         //8
8. Math.pow(2,4)         //16
9. Math.trunc(-6.3)      //-6

 
