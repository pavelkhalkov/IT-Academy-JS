//5. сортировка массива по возрастанию/убыванию

let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers)

let numbers1 = [4, 2, 5, 1, 3];
numbers1.sort(function(a, b) {
  return b - a;
});
console.log(numbers1)