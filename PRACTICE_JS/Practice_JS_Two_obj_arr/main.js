console.log(22);

console.log("Task 1 ___________________________________________________________________")
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arr = ['a', 'b', 'c'];

for (let i = 1; i <= 3; i++) {
    arr.push(i);
}
console.log(arr);

console.log("Task 2 ___________________________________________________________________")
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arr2 = [1, 2, 3];
let reverse = [];

// Variant 1
// reverse = arr2.reverse();

// Variant 2
for (let i = arr2.length - 1; i >= 0; i--) {
    reverse.push(arr2[i])
}

console.log(reverse);

console.log("Task 3 ___________________________________________________________________")
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arr3 = [1, 2, 3];
arr3.push(4, 5, 6);

console.log(arr3);

console.log("Task 4 ___________________________________________________________________")
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
arr3.unshift(4, 5, 6);

console.log(arr3);

console.log("Task 5 ___________________________________________________________________")
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let progLeng = ['js', 'css', 'jq'];

let delStart = progLeng.shift();
document.write(delStart);

console.log("Task 6 ___________________________________________________________________")
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let delEnd = progLeng.pop();

document.write("<br/>");
document.write(delEnd);

console.log("Task 7 ___________________________________________________________________")
// - Дан масив . За допомогою методу/функції slice перетворіть масив в [4, 5].

let arr4 = [1, 2, 3, 4, 5];

console.log(arr4.slice(3));

console.log("Task 8 ___________________________________________________________________")
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

console.log(arr4.slice(0, -3));

console.log("Task 9 ___________________________________________________________________")
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

let arr5 = [1, 2, 3, 4, 5];
arr5.splice(0, 3, 1)
console.log(arr5);

console.log("Task 10 ___________________________________________________________________")
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(3, 1, ...['a', 'b', 'c']);

console.log(arr6);

console.log("Task 11 ___________________________________________________________________")
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 0, ...['a', 'b']);
arr7.splice(6, 0, 'c');
arr7.splice(8, 0, 'e');

console.log(arr7);

console.log("Task 12 ___________________________________________________________________")
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= arr8.length; i++) {
    if (arr8[i] % 2 === 0) {
        console.log(arr8[i])
    }
}

console.log("Task 13 ___________________________________________________________________")
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let arr9 = [];
for (let i = 0; i <= arr8.length - 1; i++) {
    arr9.push(arr8[i]);
}

console.log(arr9);

console.log("Task 14 ___________________________________________________________________")
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr10 = [];
for (let i = 0; i <= arr8.length - 1; i++) {
    arr10[i] = arr8[i];
}

console.log(arr10);

console.log("Task 14 ___________________________________________________________________")
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let arr11 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < arr11.length) {
    console.log(arr11[i]);
    i++;
}

console.log("Task 15 ___________________________________________________________________")

for (let i = 0; i < arr11.length; i++) {
    console.log(arr11[i]);
}

console.log("Task 16 ___________________________________________________________________")
let n = 1;
while (n < arr11.length) {
    console.log(arr11[n]);
    n += 2;
}

console.log("Task 17 ___________________________________________________________________")
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < arr11.length; i += 2) {
    console.log(arr11[i]);
}

console.log("Task 17 ___________________________________________________________________")
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let m = 1;
while (m < arr11.length) {
    if (arr11[m] % 2 === 0) {
        console.log(arr11[m]);
    }
    m++;
}

console.log("Task 18 ___________________________________________________________________")
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 1; i < arr11.length; i++) {
    if (arr11[i] % 2 === 0) {
        console.log(arr11[i]);
    }
}

console.log("Task 19 ___________________________________________________________________")
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 1; i < arr11.length; i++) {
    if (arr11[i] % 3 === 0) {
        arr11[i] = "okten";
    }
}
console.log(arr11);

console.log("Task 20 ___________________________________________________________________")
// 8. вивести масив в зворотньому порядку.

// let rev = [];
// Variant 1
// rev = arr11.reverse();
// console.log(rev);

// Variant 2
for (let i = arr11.length - 1; i >= 0; i--) {
    console.log(arr11[i]);
}

console.log("Task 21 ___________________________________________________________________")
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// ?????

console.log("Task 22 ___________________________________________________________________")
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
let arr12 = [];
arr12.length = 50;

for (let i = 0; i < arr12.length; i += 2) {
    arr12.push(i);
}

console.log(arr12);

////////////////// чому в консольці індекс елементу з масиву починає рахувати від 50 ??

let arr13 = [];
arr13.length = 50;

for (let i = 1; i < arr13.length; i += 2) {
    arr13.push(i);
}

console.log(arr13);


console.log("Task 23 ___________________________________________________________________")
// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// таке саме як попереднє

// 2. заповнити його 50 непарними числами за допомоги циклу.
// таке саме як попереднє

console.log("Task 24 ___________________________________________________________________")
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let arr14 = [];
arr14.length = 10;

for (let i = 0; i < arr14.length; i++) {
    arr14[i] = Math.round(Math.random() * 100);
}

console.log(arr14);

console.log("Task 25 ___________________________________________________________________")
// 2. вывести на консоль  каждый третий елемент
for (let i = 2; i < arr14.length; i += 3) {
    console.log(arr14[i]);
}

console.log("Task 26 ___________________________________________________________________")
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

for (let i = 2; i < arr14.length; i += 3) {
    if (arr14[i] % 2 === 0) {
        console.log(arr14[i]);
    }
}

console.log("Task 27 ___________________________________________________________________")
// 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
// записать их в другой массив.
let arr15 = [];
for (let i = 2; i < arr14.length; i += 3) {
    if (arr14[i] % 2 === 0) {
        arr15.push(arr14[i]);
    }
}
console.log(arr15);

console.log("Task 27 ___________________________________________________________________")
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
console.log(arr11);
for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] % 2 === 0) {
        console.log(arr11[i - 1]);
    }
}

console.log("Task 28 ___________________________________________________________________")
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

let arr16 = [100,250,50,168,120,345,188];
let result = 0;

for (let i = 0; i < arr16.length; i++) {
    result = result + arr16[i];
}
result = result/arr16.length;

console.log(result);

console.log("Task 29 ___________________________________________________________________")
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr17 = [];
arr17.length = 10;

for (let i = 0; i < arr17.length; i++) {
    arr17[i] = Math.round(Math.random() * 5);
}

console.log(arr17);

console.log("Task 30 ___________________________________________________________________")
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

let arr18 = [
    1,
    "two",
    true,
    "four",
    "5",
    6,
    false,
    "eight",
    9,
    false,
];

for (let i = 0; i < arr18.length; i++) {
    if (typeof arr18[i] == 'number') {
        console.log(arr18[i])
    }
}