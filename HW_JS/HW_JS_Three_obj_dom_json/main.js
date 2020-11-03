console.log(22);

console.log("Task 1 ______________________________________________________________");
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
let dog = {
    nickName: 'Emma',
    age: 5,
    sex: 'female',
    type: 'york',
    hasChild: true,
};

// - людину
let girl = {
    name: 'Nastya',
    age: 24,
    education: 'medical',
    job: null,
    boyfriend: true,
};

// - автомобіль
let car = {
    brand: 'BMW',
    model: '520i',
    cab: 'e39',
    color: 'silver',
    year: 1998,
};

// - квартиру
let home = {
    type: 'apartment',
    square: 62,
    rooms: 2,
    property: 'owner',
    price: 40000,
};

// - книгу
let book = {
    name: 'Harry Potter',
    chapter: 1,
    author: 'Joan Rowling',
    pages: 549,
    year: 1997,
};

console.log("Task 2 ______________________________________________________________");
// -- Створити масив та вивести його в консоль:
// - з 5 собак
let dogs = [
    'york',
    'spitz',
    'labrador',
    'huskies',
    'beagle'
];

// - 3 5 людей
let people = [
    'Max',
    'Stas',
    'Peter',
    'Harry',
    'Lucy'
];

// - з 5 автомобілів
let cars = [
    'BMW',
    'Audi',
    'Toyota',
    'VW',
    'Ferrari'
];

console.log("Task 3 ______________________________________________________________");
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
let house = {
    type: 'private',
    square: 262,
    floors: 4,
    owners: ['Stas', 'Max', 'Lucy', 'Harry'],
    garden: {
        hasPool: true,
        hasDog: true,
        hasAppleTree: false,
        square: 50,
    }
};

// - водій
let driver = {
    name: 'Yura',
    experience: 7,
    car: {
        brand: 'BMW',
        model: '520i',
        cab: 'e39',
        color: 'silver',
        year: 1998,
    },
    prevCars: [
        'KIA',
        'Lada',
        'DEO',
    ],
    licence: true,

}
// - іграшку
let toy = {
    type: 'Play Station 5',
    color: 'white',
    games: [
        'FIFA',
        'GTA 5',
        'Call of Duty',
    ],
    price: 16799,
    characteristics: {
        CPU: 'x86-64-AMD Ryzen Zen 8 Cores / 16 Threads at 3.5GHz',
        GPU: 'AMD Radeon RDNA 2-based graphics engine',
        Memory: '16GB GDDR6/256-bit'
    }
}

// - стіл
let table = {
    material: 'wood',
    year: 1998,
    colors: [
        'brown',
        'black',
        'yellow',
    ],
    characteristics: {
        h: 1.05,
        w: 1.6,
        l: 0.4,
    },
    legs: 4,
}

// - сумка
let bag = {
    brand: 'oBag',
    type: 'constructor',
    color: 'pink',
    consists: [
        'handles',
        'plastic base',
        'textile cover'
    ],
    shopPrice: {
        oBag: 2500,
        Intertop: 2000,
        Internet: 600,
    }
}

console.log("Task 4 ______________________________________________________________");
// Дан массив:
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
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

// V - 1
console.log(users[7].status);

// V - 2
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'andrey'){
        console.log(users[i].status)
    }
}

// - статус Максима
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'max') {
        console.log(users[i].status)
    }
}

// - ім'я передостаннього об'єкту
console.log(users[users.length - 2].name);

// - ім'я третього об'єкта
console.log(users[2].name);

// - вік Олега
console.log(users[7].age);

// - вік Олі
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'olya') {
        console.log(users[i].age)
    }
}

// - вік + ім'я 5го об'єкта
console.log(users[5].age, users[5].name);

// - вік + сатус Анни
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'anya') {
        console.log(users[i].age, users[i].status)
    }
}
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

console.log("Task 5 ______________________________________________________________");
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content);

// - отримує текст з блоку з id "rules"
let ruls = document.getElementById('rules');
console.log(ruls);

let rules = document.getElementsByTagName('div');
console.log(rules);

// - замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'NEW CONTENT';

// - замініть текст параграфа з id 'rules' на будь-який інший
ruls.innerText = 'NEW RULES';

// - змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
ruls.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій
content.style.color = 'blue';
ruls.style.color = 'blue';

let qwe = document.getElementsByClassName('fc_rules');
qwe.style.color = 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
