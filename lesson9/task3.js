//3. Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.

    function getNum1() {
    return new Promise(resolve =>
    setTimeout(
    () => resolve(getRandomNum(1, 5)), 
    3000)
    )
    }

    function getNum2() {
    return new Promise(resolve =>
    setTimeout(
    () => resolve(getRandomNum(6, 10)), 
    5000)
    )
    } 

    async function getNumbers() {
    let num1 = await getNum1();
    let num2 = await getNum2();    
    console.log(num1);
    console.log(num2);
    
    console.log(num1 + num2);
    }
        
    function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    getNumbers();