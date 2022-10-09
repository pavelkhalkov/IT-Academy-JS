//2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

let finish = new Date(Date.UTC(2000, 0, 1)); 
let start = new Date();

let count=0;

while (finish < start) {
    if (start.getDay() == 5) {
        start.setDate(start.getDate() - 7)
        if (start.getDate()==13)
        {
            count++
        }

    } else
    {
        start.setDate(start.getDate() - 1)
    }

}
console.log("Пятниц 13-ого с 01/01/2000 до сегодня = "+count)