//1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом
  
interface IUser1 {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const user1: IUser1 = {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    car: "VW"
};

const user2: IUser1 = {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
    children: 2
};

const users: IUser1[] = [user1, user2];
console.log(users);