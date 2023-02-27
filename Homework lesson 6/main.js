//- Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


//- Перевести до великого регістру наступні стрінгові значення
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string  ';
console.log(str.substring(1, 13));

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str7 = 'Ревуть воли як ясла повні';
let stringToarray = str7.split(' ')
console.log(stringToarray)

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
let map = arrNum.map (value => {
    return value.toString()
    }
)
console.log(map)

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];
let sortNums = nums.sort((a, b) => a - b)
console.log(sortNums)

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
})
console.log(sortMonthDuration)
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filter)
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map1 = coursesAndDurationArray.map((value, index) => {
    return { id : index +1, title : value, monthDuration : value}
})
console.log(map1)