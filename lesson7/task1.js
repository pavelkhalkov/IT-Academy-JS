//1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

let arr = [6, 5, 3, 2, 1, 4] 

let randomNumber1 = Math.floor((Math.random() * 6) + 1); // generates number between 1-6
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let randomNumber3 = Math.floor((Math.random() * 6) + 1);
let randomNumber4 = Math.floor((Math.random() * 6) + 1); 
let randomNumber5 = Math.floor((Math.random() * 6) + 1);
let randomNumber6 = Math.floor((Math.random() * 6) + 1);    

if((randomNumber1 + randomNumber3 + randomNumber5) > (randomNumber2+randomNumber4+randomNumber6)){
    console.log('Player 1 Wins!');
}
else if ((randomNumber2+randomNumber4+randomNumber6) > (randomNumber1+randomNumber3+randomNumber5)) {
console.log('Player 2 Wins!');
}
else {
console.log('Draw!');
}            

