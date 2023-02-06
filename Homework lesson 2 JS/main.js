//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

    let array = [1, 3, 'five', true, 10, false, 'ten', 11, 12, 13]
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
    console.log(array[4]);
    console.log(array[5]);
    console.log(array[6]);
    console.log(array[7]);
    console.log(array[8]);
    console.log(array[9]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
    let bukvar = {
        title: 'letters',
        pageCount: 50,
        genre: 'educational',
    }
    let stories = {
        title: 'story title',
        pageCount: 100,
        genre: 'fantastic',
    }
    let eatTheFrog = {
        title: 'discipline',
        pageCount: 130,
        genre: 'self-development',
    }
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bukvarr = {
    title: 'letters',
    pageCount: 50,
    genre: 'educational',
    authors: [
        {name: 'Moskalenko Evheniy'},
        {age: 29},
    ]


}
let storiess = {
    title: 'story title',
    pageCount: 100,
    genre: 'fantastic',
    authors: [
        {name: 'Kovalchuk Nadiya'},
        {age: 33},
    ]
}
let eatTheFrogg = {
    title: 'discipline',
    pageCount: 130,
    genre: 'self-development',
    authors: [
        {name: 'Brayan Traice'},
        {age: 70},
    ]
}
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasya', username: 'vasya1', password: 1111},
    {name: 'kolya', username: 'kolya2', password: 2222},
    {name: 'stepan', username: 'stepan3', password: 3333},
    {name: 'igor', username: 'igor4', password: 4444},
    {name: 'ralf', username: 'ralf5', password: 5555},
    {name: 'olya', username: 'olya6', password: 6666},
    {name: 'anna', username: 'anna7', password: 7777},
    {name: 'angelina', username: 'angelina8', password: 8888},
    {name: 'oleg', username: 'oleg9', password: 9999},
    {name: 'tanya', username: 'tanya10', password: 1010},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//Логічні розгалуження:

//   - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !== 0) {
    console.log('Вірно');
}else {
    console.log('Невірно')
}

let a = 0;
if (a !== 0) {
    console.log('Вірно');
}else {
    console.log('Невірно')
}
let b = -3;
if (b !== 0) {
    console.log('Вірно');
}else {
    console.log('Невірно')
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 47;
if (time <= 15) {
    console.log('Перша частина')
}
else if (time > 15 && time <= 30) {
    console.log('Друга частина')
}
 else if (time > 30 && time <= 45) {
    console.log('Третя частина')
}
else if (time > 45 && time <= 59) {
    console.log('Четверта частина')
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 28;
if (day >= 1 && day <= 10) {
    console.log('Перша декада')
}
else if (day >= 11 && day <= 20) {
    console.log('Друга декада')
}
else if (day >= 21 && day <= 31) {
    console.log('Третя декада')
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numDay = 3;
switch (numDay) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
}
//   - Користувач вводить або має два числа.
//      Потрібно знайти та вивести максимальне число з тих двох .
//    Також потрібно врахувати коли введені рівні числа.
let c =3;
let v = 3;
if (c > v) {
    console.log(c)
}
else if (c < v) {
    console.log(v)
}
else if (c == v){
    console.log(c, v)
}

//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 //       за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
???

//    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5 ){
console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5 ){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5 ){

    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5 ){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5 ){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5 ){
    console.log('Супер')
}
