console.log(22);
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
let cars =
    [{
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    }, {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    }, {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    }, {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    }, {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    }, {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    }, {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    }, {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    }, {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    }, {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    }, {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    }, {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    }, {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
console.log("Task 1 ______________________________________________________________");
let fltr3lCars = cars.filter(value => value.volume >= 3)
console.log(fltr3lCars);

console.log("Task 2 ______________________________________________________________");
// - двигун = 2л
let fltr2lCars = cars.filter(value => value.volume >= 2)
console.log(fltr2lCars);

console.log("Task 3 ______________________________________________________________");
// - виробник мерс
let fltrMercCars = cars.filter(value => value.producer === 'mercedes')
console.log(fltrMercCars);

console.log("Task 4 ______________________________________________________________");
// - двигун більше 3х літрів + виробник мерседес
let fltrMerc3lCars = cars.filter(value => value.producer === 'mercedes' && value.volume >= 3)
console.log(fltrMerc3lCars);

console.log("Task 5 ______________________________________________________________");
// - двигун більше 3х літрів + виробник субару
let fltrSub3lCars = cars.filter(value => value.producer === 'subaru' && value.volume >= 3)
console.log(fltrSub3lCars);

console.log("Task 6 ______________________________________________________________");
// - сили більше ніж 300
let fltrPow300Cars = cars.filter(value => value.power >= 300)
console.log(fltrPow300Cars);

console.log("Task 7 ______________________________________________________________");
// - сили більше ніж 300 + виробник субару
let fltrSub300Cars = cars.filter(value => value.producer === 'subaru' && value.power >= 300)
console.log(fltrSub300Cars);

console.log("Task 8 ______________________________________________________________");
// - мотор серіі ej
let fltrEjCars = cars.filter(value => value.engine.startsWith('ej'))
console.log(fltrEjCars);

console.log("Task 9 ______________________________________________________________");
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let fltrSubEj300Cars = cars.filter(value =>
    value.engine.startsWith('ej') &&
    value.producer === 'subaru' &&
    value.power >= 300)
console.log(fltrSubEj300Cars);

console.log("Task 10 ______________________________________________________________");
// - двигун меньше 3х літрів + виробник мерседес
let fltrMercLess3lCars = cars.filter(value =>
    value.producer === 'mercedes' &&
    value.volume <= 3)
console.log(fltrMercLess3lCars);

console.log("Task 11 ______________________________________________________________");
// - двигун більше 2л + сили більше 250
let fltr2l250Cars = cars.filter(value =>
    value.power >= 250 &&
    value.volume >= 2)
console.log(fltr2l250Cars);

console.log("Task 12 ______________________________________________________________");
// - сили більше 250  + виробник бмв
let fltrBmw250Cars = cars.filter(value =>
    value.power >= 250 &&
    value.producer === 'bmw')
console.log(fltrBmw250Cars);

// - взять слдующий массив
let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    }, {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    }, {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }, {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    }, {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    }, {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    }, {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    }, {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    }, {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    }, {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    }, {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

console.log("Task 13 ______________________________________________________________");
// -- отсортировать его по id пользователей
let sortUsersOne = usersWithAddress.sort((a, b) => {
    return a.id - b.id
})
console.log(sortUsersOne);

console.log("Task 14 ______________________________________________________________");
// -- отсортировать его по id пользователей в обратном опрядке
let sortUsersTwo = usersWithAddress.sort((a, b) => {
    return b.id - a.id
})
console.log(sortUsersTwo);

console.log("Task 15 ______________________________________________________________");
// -- отсортировать его по возрасту пользователей
let sortUsersThree = usersWithAddress.sort((a, b) => {
    return a.age - b.age
})
console.log(sortUsersThree);

console.log("Task 16 ______________________________________________________________");
// -- отсортировать его по возрасту пользователей в обратном порядке
let sortUsersFour = usersWithAddress.sort((a, b) => {
    return b.age - a.age
})
console.log(sortUsersFour);

console.log("Task 17 ______________________________________________________________");
// -- отсортировать его по имени пользователей
let sortUsersFive = usersWithAddress.sort((a, b) => {
    if (b.name > a.name) {
        return -1
    }
})
console.log(sortUsersFive);

console.log("Task 18 ______________________________________________________________");
// -- отсортировать его по имени пользователей в обратном порядке
let sortUsersSix = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return -1
    }
})
console.log(sortUsersSix);

console.log("Task 19 ______________________________________________________________");
// -- отсортировать его по названию улицы  в алфавитном порядке
let sortUsersSeven = usersWithAddress.sort((a, b) => {
    if (b.address.street > a.address.street) {
        return -1
    }
})
console.log(sortUsersSeven);

console.log("Task 20 ______________________________________________________________");
// -- отсортировать его по номеру дома по возрастанию
let sortUsersEight = usersWithAddress.sort((a, b) => {
    if (b.address.number > a.address.number) {
        return -1
    }
})
console.log(sortUsersEight);

console.log("Task 21 ______________________________________________________________");
// -- отфильтровать (оставить) тех кто младше 30
let fltrOne = usersWithAddress.filter(value => {
    if (value.age <= 30) {
        return value
    }
})
console.log(fltrOne);

console.log("Task 22 ______________________________________________________________");
// -- отфильтровать (оставить) тех у кого отрицательный статус
let fltrTwo = usersWithAddress.filter(value => value.status === false)
console.log(fltrTwo);

console.log("Task 23 ______________________________________________________________");
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let fltrThree = usersWithAddress.filter(value => value.status === false && value.age <= 30)
console.log(fltrThree);

console.log("Task 24 ______________________________________________________________");
// -- отфильтровать (оставить) тех у кого номер дома четный
let fltrFour = usersWithAddress.filter(value => value.address.number % 2 === 0)
console.log(fltrFour);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.


let carOne = {
    producer: 'bmw',
    power: 230,
    owner: {name: 'Max', age: 30, experience: 17},
    price: 25000,
    year: 2017
}
let carTwo = {
    producer: 'mercedes',
    power: 160,
    owner: {name: 'Yura', age: 25, experience: 7},
    price: 5000,
    year: 1998
}
let carThree = {
    producer: 'mercedes',
    power: 400,
    owner: {name: 'Zhora', age: 33, experience: 4},
    price: 35000,
    year: 2017
}
let carFour = {
    producer: 'bmw',
    power: 180,
    owner: {name: 'Ded', age: 78, experience: 50},
    price: 10000,
    year: 2012
}
let carFive = {
    producer: 'subaru',
    power: 190,
    owner: {name: 'Shumaher', age: 35, experience: 30},
    price: 4000,
    year: 1990
}

let carSix = {
    producer: 'honda',
    power: 100,
    owner: {name: 'Zenyk', age: 44, experience: 30},
    price: 1000,
    year: 1989
}

let carSeven = {
    producer: 'lexus',
    power: 200,
    owner: {name: 'Mazhor', age: 50, experience: 30},
    price: 55000,
    year: 2019
}

let carEight = {
    producer: 'Ferrari',
    power: 100500,
    owner: {name: 'Portniagin', age: 39, experience: 20},
    price: 155000,
    year: 2018
}

let carNine = {
    producer: 'subaru',
    power: 199,
    owner: {name: 'Stepan', age: 32, experience: 15},
    price: 15000,
    year: 2010
}

let carTen = {
    producer: 'lanus',
    power: 60,
    owner: {name: 'Myron', age: 40, experience: 20},
    price: 100,
    year: 1998
}

let avtopark = [carOne, carTwo, carThree, carFour, carFive, carSix, carSeven, carEight, carNine, carTen]

console.log("Task 25 ______________________________________________________________");
//Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// for (let i=0; i<avtopark.length; i=+2 ){
//     avtopark[i].power *= 1.1
// }

let tuningCars = JSON.parse(JSON.stringify(avtopark));
tuningCars.map((value, index) => {
    if (index % 2 === 0) {
        value.power *= 1.1
        value.owner.name = 'New Owner'
        value.price *= 1.05
    }
})

console.log('avtopark: ', avtopark);
console.log('tuningCars: ', tuningCars);

console.log("Task 26 ______________________________________________________________");
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Вже зробив

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Вже зробив

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
tuningCars.reduce((acc, value) => {
    if (value.owner.experience <= 5 && value.owner.age >= 25) {
        value.owner.experience += 1
    }
}, [])

console.log(tuningCars);

console.log("Task 27 ______________________________________________________________");
//Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let sumPrice = 0
for (let i = 0; i < tuningCars.length; i++) {
    sumPrice += tuningCars[i].price
}
console.log('Summary price of all cars: '+ sumPrice);

console.log("Task 28 ______________________________________________________________");
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// ============= Variant 1 ==================
function showIndex(array, key) {
    let min = null;
    let max = null;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === key){
            // if(!min) - це як тільки min стане true  йому присвоється і вже дальше перезаписуватись не буде
            if (!min){
                min = i;
            }
            // a max буде перезаписуватись поки не знайде останній подібний елемент
            max = i;
        }
    }

    console.log(`MinIndex = ${min}, MaxIndex = ${max}.`)
}

// ============= Variant 2 ==================
// function showIndex(array, key) {
//     let min = array.indexOf(key);
//     let max = array.lastIndexOf(key);
//
//     console.log(`MinIndex = ${min}, MaxIndex = ${max}.`)
// }

showIndex(arr, 4)