console.log(22);

// - створити функцію яка виводить масив
console.log("Task 1 ______________________________________________________________");
let dogs = [
    'york',
    'spitz',
    'labrador',
    'huskies',
    'beagle'
];

// -------------- Variant 1 ----------------
function showDogs(dogType) {
    console.log(dogType);
}

// --------------  Variant 2 ---------------
// function showDogs(dogType) {
//     for (let i = 0; i < dogType.length; i++) {
//         console.log(dogType[i]);
//     }
// }

showDogs(dogs);

console.log("Task 2 ______________________________________________________________");
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// -------------- Variant 1 ----------------
// function rand(arg) {
//     let arr = [];
//     for (let i = 0; i < arg; i++) {
//         arr[i] = Math.round(Math.random() * 1000);
//     }
//     return arr;
// }
//
// const arr = rand(10);

// -------------- Variant 2 ----------------
function rand(arg, min, max) {
    let arr = [];
    for (let i = 0; i < arg; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min))
    }
    return arr;
}

const arr = rand(10, 1, 100);

showDogs(arr);

console.log("Task 3 ______________________________________________________________");
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// -------------------- Variant 1 ------------------------
// function minNum(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         return num1;
//     } else if (num2 < num1 && num2 < num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// --------------------- Variant 2 ------------------------
// function minNum(num1, num2, num3) {
//     let min = minNum.arguments[0];
//     for (let i = 0; i < minNum.length; i++) {
//         if (minNum.arguments[i] < min) {
//             min = minNum.arguments[i]
//         }
//     }
//     return min;
// }
//
// let minNumber = minNum(3, -9, -10);
// console.log('min number: ' + minNumber);

// --------------------- Variant 3 ------------------------
function minNum(num1, num2, num3) {
    let min = num1 < num2 ? num1 : num2;
    min = min < num3 ? min : num3;
    console.log(min);
    return min;
}

let minNumber = minNum(3, -9, -10);
console.log('min number: ' + minNumber);


console.log("Task 4 ______________________________________________________________");
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// ------------------- Variant 1 ------------------------
// function maxNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// -------------------- Variant 2 ------------------------
function maxNum(num1, num2, num3) {
    let max = maxNum.arguments[0];
    for (let i = 0; i < maxNum.length; i++) {
        if (maxNum.arguments[i] > max) {
            max = maxNum.arguments[i]
        }
    }
    return max;
}

let maxNumber = maxNum(-1, 9, 100);
console.log('max number: ' + maxNumber);

console.log("Task 5 ______________________________________________________________");

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function falseMinNum() {
    let min = arguments[0];
    let max = arguments[0];

    for (let argument of arguments) {
        if (argument < min) {
            min = argument;
        }
        if (argument > max) {
            max = argument;
        }
    }
    console.log('max', max)
    return min;
}

falseMinNum(3, -9, -10);


console.log("Task 6 ______________________________________________________________");

// - створити функцію яка виводить масив

function array() {
    let getArray = [];
    for (let i = 0; i < array.arguments.length; i++) {
        getArray.push(array.arguments[i])
    }
    console.log(getArray)
}

array(1, 'two', '3', 4, 'five');

console.log("Task 6 ______________________________________________________________");
// - створити функцію яка повертає найбільше число з масиву

let arr1 = [1, 2, 5, 8, 12, -4, 44, 32];

// ========== Стрілочна функція ====================
// let arrMax = (arrayMax)=> {
//     let max = arrayMax[0];
//     for (const item of arrayMax) {
//         if (item > max) {
//             max = item
//         }
//     }
//     return max;
// }
//
// let arrM = arrMax([1, 2, 5, 8, 12, -4, 44, 32]);
// console.log(arrM)

// ========== Декларейшн функція ====================
function arrMax(array) {
    let max = array[0];
    for (const item of array) {
        if (item > max) {
            max = item
        }
    }
    return max;
}

let arrMx = arrMax(arr1);
console.log(arrMx);

console.log("Task 7 ______________________________________________________________");

// - створити функцію яка повертає найменьше число з масиву

function arrMin(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item
        }
    }
    return min;
}

let arrMn = arrMin(arr1);
console.log(arrMn);

console.log("Task 8 ______________________________________________________________");

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function arrSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

let arrSumator = arrSum(arr1);
console.log(arrSumator);

console.log("Task 9 ______________________________________________________________");

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrAvg(array) {
    let sum = 0;
    let avg;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / array.length;
    return avg
}

let arrAverage = arrAvg(arr1);
console.log(arrAverage);

console.log("Task 10 ______________________________________________________________");
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let arr2 = [dog = {
    nickName: 'Emma',
    age: 5,
    sex: 'female',
    type: 'york',
    hasChild: true,
},
    girl = {
        name: 'Nastya',
        age: 24,
        education: 'medical',
        job: null,
        boyfriend: true,
    },
    car = {
        brand: 'BMW',
        model: '520i',
        cab: 'e39',
        color: 'silver',
        year: 1998,
    },
    home = {
        type: 'apartment',
        square: 62,
        rooms: 2,
        property: 'owner',
        price: 40000,
    }]

function arrCI(arrayOfObj) {
    return arrayOfObj.length;
}

let arrCountItems = arrCI(arr2);
console.log(arrCountItems);

console.log('10.1___________________________');

// Але якщо в масиві є ще інші типи даннних крім об'єктів тоді :

function arrSumOfObj(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            sum++;
        }
    }
    return sum
}

let arrSumOfObjects = arrSumOfObj(arr2);
console.log(arrSumOfObjects);

console.log("Task 11 ______________________________________________________________");

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function arrSumItInObj(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            sum += Object.keys(array[i]).length;
        }
    }
    return sum
}

let arrSumItemsInObject = arrSumItInObj(arr2);
console.log(arrSumItemsInObject);


// ============ Variant 2 ===================
// function arrSumItInObj(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'object') {
//             for (key in array[i])
//                 sum++
//         }
//     }
//     return sum
// }
//
// let arrSumItemsInObject = arrSumItInObj(arr2);
// console.log(arrSumItemsInObject);

console.log("Task 12 ______________________________________________________________");
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arr3 = [1, 2, 3, 4];
let arr4 = [2, 3, 4, 5];

function sumator(array1, array2) {
    let newArr = [];
    for (i = 0; i < array1.length && i < array2.length; i++) {
        newArr.push(array1[i] + array2[i]);
    }
    return newArr
}

let sumFirstIndex = sumator(arr3, arr4)
console.log(sumFirstIndex);

// Стрілочна функція
// let sumFirstIndex = ()=> {
//     let newArr = [];
//     for (i=0; i<arr3.length && i<arr4.length; i++){
//         newArr.push(arr3[i]+arr4[i]);
//     }
//     return newArr
// }
//
// console.log(sumFirstIndex())

console.log("Task 13 ______________________________________________________________");
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let arr5 = [1, 6, 3, 10, 390, -4];

function replaceElement(arr, i) {
    let array = [...arr];

    let element = array[i];
    array[i] = array[i + 1];
    array[i + 1] = element;
    return array
}

let replaceEl = replaceElement(arr5, 3);
console.log(replaceEl);

console.log("Task 14 ______________________________________________________________");
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr6 = [1, 0, 6, 0, 3];

// ============  Даний варіант не працює, не розумію чого ???????? ===============
// function replaceZero(arr) {
//     let array = [...arr];
//     for (let i = 0; i<array.length; i++){
//         if (array[i] === 0){
//             let indexElement = array[i];
//             array[i] = array[array.length-1];
//             array[array.length-1] = indexElement;
//         }
//     }
//             return array
// }
//
// let zero = replaceZero(arr6);
// console.log(zero);

// ============ Variant 2 ===================
function replaceZero(arr) {
    let zero = [];
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i])
        } else {
            numbers.push(arr[i]);
        }
    }

    return [...numbers, ...zero]
}

console.log(replaceZero(arr6));

console.log("Task 15 ______________________________________________________________");
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function greetingOne() {
    let greeting = document.createElement('div')
    greeting.innerHTML = 'Hello owu';
    document.body.appendChild(greeting);
}

greetingOne();

console.log("Task 16 ______________________________________________________________");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function greetingTwo(text, typeTag) {
    let tag = document.createElement(typeTag);
    tag.innerHTML = text || 'Hello World'; // gard operator or default
    document.body.appendChild(tag);
}

greetingTwo(null, 'div');

console.log("Task 17 ______________________________________________________________");
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// ============ Variant 1 ===================
let users = [
    {name: 'vasya', age: 31, status: false, car: 'BMW'},
    {name: 'petya', age: 30, status: true, car: 'Audi'},
    {name: 'kolya', age: 29, status: true, car: 'Toyota'},
    {name: 'olya', age: 28, status: false, car: 'VW'},
    {name: 'max', age: 30, status: true, car: 'Ferrari'}
];

let cars = [
    'BMW',
    'Audi',
    'Toyota',
    'VW',
    'Ferrari'
];

// ============ Variant 1 ===================

// function showCars(cars) {
//     for (let i=0; i<cars.length; i++){
//         let tag = document.createElement('div');
//         tag.innerHTML = [i+1] + ' ' + cars[i];
//         document.body.appendChild(tag)
//     }
// }
//
// showCars(cars);

// ============ Variant 2 ===================

// function showCars(array, idTag) {
//     const block = document.getElementById(idTag);
//     let ul = document.createElement('ul');
//     for (let i=0; i<array.length; i++){
//         const user = array[i];
//         const li = document.createElement('li');
//         li.innerHTML = `${i+1} - ${user.car}`;
//         ul.appendChild(li);
//      }
//     block.appendChild(ul)
// }
//
// showCars(users, '#');

// ============ Variant 3 ===================

function showCars(array, typeTag) {
    let carDiv = document.createElement(typeTag);
    carDiv.classList.add('list');
    document.body.appendChild(carDiv)
    let ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const user = array[i];
        const li = document.createElement('li');
        li.innerHTML = `${i + 1} - ${user.car}`;
        ul.appendChild(li);
    }
    carDiv.appendChild(ul);
}

showCars(users, 'div');

console.log("Task 18 ______________________________________________________________");
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function showUsers(array, typeTag) {
    let userDiv = document.createElement(typeTag);
    userDiv.classList.add('users');
    document.body.appendChild(userDiv);

    for (let i = 0; i < array.length; i++) {
        const user = array[i];
        let div = document.createElement('div');
        let name = document.createElement('h1');
        let age = document.createElement('h3');
        let car = document.createElement('p');

        name.innerHTML = `${user.name}`;
        age.innerHTML = `${user.age}`;
        car.innerHTML = `${user.car}`;

        div.appendChild(name);
        div.appendChild(age);
        div.appendChild(car);

        userDiv.appendChild(div);
    }
}

showUsers(users, 'div');

console.log("Task 19 ______________________________________________________________");
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},
]

function concatObj(usersArray, citiesArray) {
    let users = JSON.parse(JSON.stringify(usersArray));
    let cities = JSON.parse(JSON.stringify(citiesArray));

    for (let i = 0; i < users.length; i++) {
        for (let m = 0; m < cities.length; m++) {
            if (users[i].id === cities[m].user_id) {
                users[i].address = cities[m];
            }
        }
    }
    return users
}

console.log(usersWithId); // перевіряємо чи не мутувало вихідний масив
console.log(concatObj(usersWithId, citiesWithId));

console.log("Task 20 ______________________________________________________________");
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function showRules(arrayOfRules) {
    let wrapDiv = document.createElement('div');
    wrapDiv.classList.add('wrap');
    document.body.appendChild(wrapDiv);

    for (let i = 0; i < arrayOfRules.length; i++) {
        const rules = arrayOfRules[i];
        let div = document.createElement('div');
        let number = document.createElement('div');
        let title = document.createElement('h1');
        let text = document.createElement('p');

        number.innerHTML = `${i + 1}`;
        title.innerHTML = `${rules.title}`;
        text.innerHTML = rules.body;

        number.style.width = '5%';
        number.style.height = '100px';
        number.style.float = 'left';
        number.style.clear = 'both';

        title.style.width = '65%';
        title.style.float = 'left';
        title.style.height = '100px';
        title.style.margin = '0'

        text.style.width = '30%';
        text.style.float = 'left';
        text.style.height = '100px';
        text.style.margin = '0'

        div.style.border = '1px solid black'
        div.style.height = '100px';

        div.appendChild(number);
        div.appendChild(title);
        div.appendChild(text);

        wrapDiv.appendChild(div);
    }
}

showRules(rules);

// ===========додаткове від віктора========
console.log("Task 21 ______________________________________________________________");
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// ============ Variant 1 (підглянув в інтернеті) ===================
// let num = +prompt('Enter number', 2);
//
// function power(number) {
//     if (typeof number !== 'number')
//         return 'Not a number';
//
//     if (number && (number & (number - 1)) === 0)
//         return 'YES'
//
//     else
//         return 'NO'
// }
//
// let result = power(num);
// console.log(result)

// ============ Variant 2 (підглянув в інтернеті) ===================
let num = +prompt('Enter any number and I will say if it`s a power of two', 2);

function power(number) {
    while (number >= 1) {
        if (number === 1){
            result = 'YES';
        } else {
            result = 'NO'
        }
        number /= 2;
    }
    return result
}

console.log(power(num));

let smth = num & (num - 1)
console.log(smth)

console.log("Task 22 ______________________________________________________________");
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

console.log("Task 23 ______________________________________________________________");
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

let array7 = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
console.log(array7.flat(2));
// ===========додаткове========
