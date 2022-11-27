//2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерфейс Person, который будет соответствовать массиву

interface User {
    name: string,
    age: number,
    occupation: string,  
    role?: string
};

interface Admin {
    name: string,
    age: number,
    occupation?: string,  
    role: string
};

type Person = User | Admin; 

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

console.log(persons);