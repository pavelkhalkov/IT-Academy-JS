//3. Записать в массив ряд фибоначчи начиная с N члена с длинной массива M

let n = 10;
let fibonacci = [0,1];

for(i = 2; i < n; i++){
fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

console.log(fibonacci.slice(0, n));