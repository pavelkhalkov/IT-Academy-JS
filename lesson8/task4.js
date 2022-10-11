//4. Даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

let arr1 = [1, 1, 4, 2];
let arr2 = [5, 1, 2, 1];
let a = 0;
let b = 0;

function f1 (element, index, array)
{
    arr2.forEach(function(item, i, arr) {
       if (element==item){
           a++
           if(i==index){
               b++
           }
       }
    })
}

arr1.forEach(f1);
console.log("Количество повторов = "+a+"  совпадает позиций = "+b+" ");