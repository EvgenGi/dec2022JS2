//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrUsers = [
    new User (3, 'Igor', 'Pilipchuk', 'igor@i.ua', 380971234567),
    new User (1, 'Stas', 'Kuchma', 'stasikchanel@i.ua', 380951558401),
    new User (2, 'Anna', 'Fokina', 'anna@i.ua', 380961321735),
    new User (6,'Karina', 'Martova', 'karina@gmail.com', 380961331226),
    new User (4,'Olga', 'Subotina', 'olga@mail.com', 3800998887766),
    new User (5, 'Katya', 'Shashlikova', 'katya@i.ua', 3800671613254),
    new User (9,'Oleg', 'Smartov', 'olgsmartov@i.ua', 3800507665432),
    new User (7,'Uriy', 'Shevchenko', 'uriy2gmail.com', 3800665554477),
    new User (8,'Inga', 'Moskalenko', 'inga@i.ua', 3800509998743),
    new User (10,'Max', 'Slavko', 'maximkatrue@i.ua', 3800731228765)
]
console.log(arrUsers)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
arrUsers.filter(u => {
    if (u.id % 2 === 0) {
        console.log(u)
    }
})

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = arrUsers.sort ((a, b) => {
    a.id - b.id;
    }
    )
console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor( id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email= email;
    this.phone = phone;
    this.order = order;
    }

}
let arrClients = [
    new Client(1,'Igor', 'Pilipchu', 'igor@i.ua',380971234567, ['milk','juise','tomato', 'potato','apple', 'lemon'] ),
    new Client(2,'Stas', 'Kuchma', 'stasikchanel@i.ua', 380951558401,['milk'] ),
    new Client(3,'Anna', 'Fokina', 'anna@i.ua',380961321735,['milk', 'juise', 'potato','tomato'] ),
    new Client(4,'Karina', 'Martova', 'karina@gmail.com',380961331226, ['juise', 'tomato','milk']),
    new Client(5,'Olga', 'Subotina', 'olga@mail.com',3800998887766, ['juise','apple'] ),
    new Client(6,'Katya', 'Shashlikova', 'katya@i.ua', 3800671613254, ['potato', 'milk', 'juise', 'tomato','apple'] ),
    new Client(7, 'Oleg','Smartov','olgsmartov@i.ua', 3800507665432, ['potato', 'milk', 'juise', 'tomato', 'apple','lemon','pear'] ),
    new Client(8, 'Uriy','Shevchenko', 'uriy@gmail.com', 3800665554477, ['milk','potato','juise', 'tomato','apple','lemon','pear','candy'] ),
    new Client(9, 'Inga','Moskalenko', 'inga@i.ua',  3800509998743, ['apple','soup','cake','apple','milk','lemon','pear','tomato', 'potato']),
    new Client(10, 'Max','Slavko', 'maximkatrue@i.ua', 3800731228765, ['apple','soup','cake','apple','milk','lemon','pear','tomato', 'potato','candy'] )



]
console.log(arrClients)

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = arrClients.sort((a,b) => {
    if (a.order.length < b.order.length) {
        return -1;
    }
    if (a.order.length < b.order.length) {
        return 1;
    }
    if (a.order.length === b.order.length) {
        return 0;
    }
    }
)
console.log(sort1)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer,yearOfIssue, maxSpeed,engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfIssue = yearOfIssue;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log('їдемо зі швидкістю ${maxSpeed}  на годину')
    }
    this.info = function () {

    }
}
let car1 = new Car(11,11,11,11,11,)
console.log(car1)

console.log(car1.drive());
