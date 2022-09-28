//1. Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

console.log('23'+ true)              //23true
console.log("currentYear"+ 2022)     //currentYear2022
console.log(25 + false)              //25

//2. Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

console.log('currentMonth:' * true)     //NaN
console.log("currentYear:" * 2022)      //NaN
console.log(25 * false)                 //0

//3. Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log('currentMonth:' / true)       //NaN
console.log("currentYear:" / 2022)        //NaN
console.log(25 / false)                   //Infinity

//4. Выполнить явное преобразование(number, string, boolean)

//4.1. Преобразование в number

let value = Number('324')           //324
let value = Number('15'+'10')       //1510
let value = parseInt("55$")         //55
let value = 30 - '5'                //25
let value = true + 10               //11

//4.2.Преобразование в string

let value = String(10)           //10  
let value = String(10+40)        //50
let value = (40).toString()      //40
let value = 30 + 'str'           //30str
          
//4.3 Преобразование в boolean

let value = Boolean('')           //false
let value = Boolean(0)            //false
let value = Boolean(null)         //false 
let value = Boolean(undefined)    //false
let value = Boolean(NaN)          //false

let value = Boolean(' ')          //true
let value = Boolean('hello')      //true 
let value = Boolean(342)          //true
let value = Boolean({})           //true
let value = Boolean([])           //true