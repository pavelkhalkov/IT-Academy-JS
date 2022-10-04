// 1. Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

additionStringAndBoolean('100', true);
additionStringAndNumber('5', 5);
additionNumberAndBoolean(2, true);

let additionStringAndBoolean = function (string, boolean) {
    let result;
    result = string + boolean;
    console.log(
        `При сложении '${string}' и ${boolean} в Javascript получаем '${result}'`
    );
};

let additionStringAndNumber = function (string, number) {
    let result;
    result = string + number;
    console.log(
        `При сложении '${string}' и ${number} в Javascript получаем '${result}'`
    );
};

let additionNumberAndBoolean = function (number, boolean) {
    let result;
    result = number + boolean;
    console.log(
        `При сложении ${number} и ${boolean} в Javascript получаем ${result}`
    );
};

// 2. Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

multiplicationStringAndBoolean('6', false);
multiplicationStringAndNumber('3', 5);
multiplicationNumberAndBoolean(2, true);

let multiplicationStringAndBoolean = function (string, boolean) {
    let result;
    result = string * boolean;
    console.log(
        `При умножении "${string}" на ${boolean} в Javascript получаем ${result}`
    );
};

let multiplicationStringAndNumber = function (string, number) {
    let result;
    result = string * number;
    console.log(
        `При умножении "${string}" на ${number} в Javascript получаем ${result}`
    );
};

let multiplicationNumberAndBoolean = function (number, boolean) {
    let result;
    result = number * boolean;
    console.log(
        `При умножении ${number} на ${boolean} в Javascript получаем ${result}`
    );
};

//3. Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

divisionStringAndBoolean('9', true);
divisionStringAndNumber('10', 2);
divisionNumberAndBoolean(9, true);

let divisionStringAndBoolean = function (string, boolean) {
    let result;
    result = string / boolean;
    console.log(
        `При делении "${string}" на ${boolean} в Javascript получаем ${result}`
    );
};

let divisionStringAndNumber = function (string, number) {
    let result;
    result = string / number;
    console.log(
        `При делении "${string}" на ${number} в Javascript получаем ${result}`
    );
};

let divisionNumberAndBoolean = function (number, boolean) {
    let result;
    result = number / boolean;
    console.log(
        `При делении ${number} на ${boolean} в Javascript получаем ${result}`
    );
};

//4. Выполнить явное преобразование(number, string, boolean)

transformationNumber('1');
transformationString(2);
transformationBoolean(0);

let transformationNumber = function (argument) {
    let result;
    result = Number(argument);
    console.log(`При преобразовании "${argument}" в Number получили ${result}`);
};

let transformationString = function (argument) {
    let result;
    result = String(argument);
    console.log(`При преобразовании ${argument} в String получили "${result}"`);
};

let transformationBoolean = function (argument) {
    let result;
    result = Boolean(argument);
    console.log(`При преобразовании ${argument} в Boolean получили ${result}`);
};