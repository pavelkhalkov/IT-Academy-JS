//1. Поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

let arr = [1, 2, 3, 4, 5, 6],
    inverse;

inverse = arr.reduce(function (carrier, element) {
    carrier.unshift(element);
    return carrier;
}, []);

console.log(inverse);