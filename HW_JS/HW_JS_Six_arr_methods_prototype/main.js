console.log(22);

console.log("Task 1 ______________________________________________________________");
// - создать массив с 20 числами.
let numbers = [2, 5, 90, -3, 1, 10, 11, -5, 555, 1010, 0, 2020, 9.0, 69, 25, 50, 100, -65, 3434, 3.14,]

// -- при помощи метода sort и колбека  отсортировать массив.
// ================== Variant 1 =======================
let sortNumOne = numbers.sort((a, b) => {
    if (a > b) {
        return -1; // зміна відбувається коли від'ємне значення
    }
});
console.log(sortNumOne);

// ================== Variant 2 =======================
let sortNumTwo = numbers.sort((a, b) => {
    return b - a; // -якесь число
});
console.log(sortNumTwo);

console.log("Task 2 ______________________________________________________________");
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let sortNumThree = numbers.sort((a, b) => {
    return a - b;
});
console.log(sortNumThree);

console.log("Task 3 ______________________________________________________________");
// -- при помощи filter получить числа кратные 3

let filtNumOne = numbers.filter(value => value % 3 === 0 && value !== 0)

console.log(filtNumOne);

console.log("Task 4 ______________________________________________________________");
// -- при помощи filter получить числа кратные 10
let filtNumTwo = numbers.filter(value => value % 10 === 0 && value !== 0)

console.log(filtNumTwo);

console.log("Task 5 ______________________________________________________________");
// -- перебрать (проитерировать) массив при помощи foreach()

numbers.forEach(value => console.log(value))
console.log('____________')
numbers.forEach((value, index) => console.log(index + 1 + ': ' + value))

console.log("Task 6 ______________________________________________________________");
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let mapNum = numbers.map(value => value * 3) // тепер mapNum - це новий масив

console.log(mapNum);

console.log("Task 7 ______________________________________________________________");
// - создать массив со словами на 15-20 элементов.
let dogs = [
    'york',
    'spitz',
    'labrador',
    'huskies',
    'beagle',
    'taxa',
    'bulldog',
    'dalmatian',
    'caress',
    'chihuahua',
    'shepherd',
    'rottweiler'
];

// -- отсортировать его по алфавиту в восходящем порядке.
let sortDogsOne = dogs.sort((a, b) => {
    if (b > a)
        return -1
})
console.log(sortDogsOne);

console.log("Task 8 ______________________________________________________________");
// -- отсортировать его по алфавиту  в нисходящем порядке.

let sortDogsTwo = dogs.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase())
        return -1
})
console.log(sortDogsTwo);

console.log("Task 9 ______________________________________________________________");
// -- отфильтровать слова длиной менее 4х символов
let filtDogs = dogs.filter(value => value.length === 4)

console.log(filtDogs);

console.log("Task 10 ______________________________________________________________");
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapDogs = dogs.map(value => value + '!')
console.log(mapDogs);

console.log("Task 11 ______________________________________________________________");
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
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
    {name: 'max', age: 31, status: true}];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
let sortUsersOne = users.sort((a,b) => {
    return a.age-b.age
})
console.log(sortUsersOne);

let sortUsersTwo = users.sort((a,b) => {
    return b.age - a.age
})
console.log(sortUsersTwo);

console.log("Task 12 ______________________________________________________________");
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sortUsersThree = users.sort((a,b) => {
    return a.name.length - b.name.length
})
console.log(sortUsersThree);

console.log("Task 13 ______________________________________________________________");
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let mapUsers = users.map((value, index) =>{
//     value.index = index;
//
//     return value
// })
//
// console.log(users);
// console.log(mapUsers);

let redUsers = JSON.parse(JSON.stringify(users));

    redUsers.reduce((acc, value,)=>{

    value.id = Math.round(Math.random()*(10-1) +1)
    acc.push(value)

    return acc
}, [])

console.log(users);
console.log(redUsers);

console.log("Task 14 ______________________________________________________________");
// - відсортувати його за індентифікатором
redUsers.sort((a, b)=>{
    return a.id - b.id
})

console.log(redUsers);

console.log("Task 15 ______________________________________________________________");
// -- наисать функцию калькулятора с 2мя числами и колбеком

console.log("Task 16 ______________________________________________________________");
// -- наисать функцию калькулятора с 3мя числами и колбеком