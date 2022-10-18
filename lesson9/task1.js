//1. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран. 

let array = [    
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),
    getRand(5) * 1000)
    }),
    new Promise((resolve, reject) => {
    setTimeout( () => resolve(2), 
    getRand(5) * 1000)
    }),
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(3),
    getRand(5) * 1000)
    }),
    ];
    
    Promise.race(array).then(result => console.log(result));
  
    function getRand(num) {
    return Math.floor(Math.random() * num);
    }