// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle =  (a, b) => {
    return a + b * 2 ;

}

rectangle(2, 3)

//створити функцію яка обчислює та повертає площу кола з радіусом r

let sircle = (r) => {
    return 3.14 * r * r;

}
sircle(10)
//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (r,h) => {
    return (2 * (3.14 * r^2)) + ((2 * 3.14) * (r * h));
}
cylinder(25, 35)

//створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
 let looper = (arr) => {
     for (const elements of arr)
         console.log(elements)
 }
 looper(users)
//створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraf = (text) => {
     document.write(`<p>${text}</p>
        <p> 

     `)
}
paragraf('hello')
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (text) => {
    document.write('<ul')
    document.write('<li>${text}</li>')
    document.write('<li>${text}</li>')
    document.write('<li>${text}</li>')
    document.write('</ul')
}
list('hi okten')
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list2 = (text, counter ) => {
    document.write('<ul')
        for (let i =  0; i < counter; i++)
            document.write('<li>${text}</li>')
    document.write('</ul')
    
}

list2('hello world', 5)
//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let listArr = (arr) => {
    document.write('<ul')
    for (const item of arr) {
        document.write('<li>${item}</li>')
    }
    document.write('<ul')
}
listArr([11,23,45,3,6,])
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objBlock = (objects) => {
    for (const item of objects) {
        document.write('<div>${item.id} ${item.name} ${item.age}</div>')

    }
}
//створити функцію яка повертає найменьше число з масиву

let minNumb = (numbers) => {

     let min =numbers[0];
     for (const number of numbers)  {
         if (min > number) {
             min = number
         }
     }
     return min;
}

minNumb([1,5,13])
//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (numbers) => {
     let basket = 0;
     for (const number of numbers) {
         basket = basket + numbers;
     }
     return basket;
}
sum([1,2,10])
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
     let v1 = arr[index1];
     let v2 = arr[index2];
     arr[index1] = v2;
     arr[index2] = v1;
     return arr;
}
swap([11,22,33,44],0,1)
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

let exchange = (uah, currencies, exitCurrency) => {
     for (const item of currencies) {
         if (item.currency === exitCurrency) {
             return uah / item.value
         }
     }

}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')