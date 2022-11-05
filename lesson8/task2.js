//2. Найти максимальное значение числа в массиве ([3,67,15...])

let numbers = [3, 67, 15];

numbers.sort(function (a,b){
    return  b -a;
})

console.log(numbers[0]);