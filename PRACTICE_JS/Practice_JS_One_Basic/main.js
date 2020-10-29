console.log(22);

console.log("CLASS_______________________________________________________");

console.log("task 1_____________________________________________________");
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

let string = "Привет";
let num = 22;
let flag = true;
let txt = "true"

console.log(string, num, flag, txt);

console.log("task 2_____________________________________________________");
// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;

console.log(a1, a2, a3, a4, a5);

console.log("task 3_____________________________________________________");
// Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// 2 – 3 – "53" – 2 – "75кг" – NaN
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
let a11 = 'kg' - 75; // NaN

console.log(a6, a7, a8, a9, a10, a11);

console.log("task 4_____________________________________________________");
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

let height = 23;
let width = 10;

let s = height * width;

console.log(s + 'см');

console.log("task 5_____________________________________________________");
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let Pi = 3.14;

let v = Pi * Math.pow((dC/2),2) * heightC;

console.log(v + 'м3');

console.log("task 6_____________________________________________________");
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;

let k = Math.sqrt(n**2 + m**2);

console.log(k);

console.log("task 7_____________________________________________________");
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

let str = "Hello World"

document.write("<br/>" + str);
alert(str);
console.log(str);

console.log("task 8_____________________________________________________");
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert("Ігнатович Юрій Володимирович \n25 \nКатаюсь на сноуборді");

console.log("task 9_____________________________________________________");
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//     Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = "Хто";
let str2 = "ти";
let str3 = "такий?";
let concatenation = "<br/>" + str1 + " " + str2 + " " + str3;

document.write(concatenation);

console.log("task 10_____________________________________________________");
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str4 = "20";
let a = 5;
document.write("<br/>" + str4 + a + "<br/>"); // => 205
document.write(str4 - a + "<br/>"); // => 15
document.write(str4 * "2" + "<br/>"); // => 40
document.write(str4 / 2 + "<br/>"); // => 10

console.log("task 11_____________________________________________________");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

console.log(parseInt("3.14")); // 3
console.log(parseInt("-7.875")); // -8
console.log(parseInt("435")); // 435
console.log(parseInt("Вася")); // NaN

console.log("task 12_____________________________________________________");
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

let str5 = prompt("Enter something", "ho-ho")
console.log(str5);

console.log("task 13_____________________________________________________");
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let number1 = prompt("Enter any number", "2");
let number2 = prompt("Enter any number again", "3");

alert(number1 + number2);

console.log("task 14_____________________________________________________");
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name = prompt("Enter your name", "Ivan");
let surname = prompt("Enter your surname", "Dulin");
let age = prompt("Enter your age", "69");

alert("Доброго вечера " + name + " " + surname + ", мои поздравления что вам " + age);


//.............. ДОП ...................
console.log("task 15_____________________________________________________");
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let num1 = prompt("Enter first number",'1');
let num2 = prompt("Enter second number",'2');
let num3 = prompt("Enter third number",'3');

if (num1 <= num2 && num2 <= num3) {
    document.write("<br/>" + num1 + num2 + num3)
} else if (num1 <= num3 && num3 <= num2) {
    document.write("<br/>" + num1 + num3 + num2)
} else if (num2 <= num1 && num1 <= num3) {
    document.write("<br/>" + num2 + num1 + num3)
} else if (num3 <= num1 && num1 <= num2) {
    document.write("<br/>" + num3 + num1 + num2)
} else if (num1 <= num3 && num3 <= num1){
    document.write("<br/>" + num2 + num3 + num1)
} else {
    document.write("<br/>" + num3 + num2 + num1)
}

console.log("V2_____________________________________________________");
let myArray = [num1, num2, num3];

alert(myArray.sort());

console.log("task 16_____________________________________________________");
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let light = prompt("Enter color of traffic light"); // Enter red / yellow / green / error
switch (light) {
    case "red" || "червоний" || "красный":
        action = "Stop";
        break;
    case "yellow" || "жовтий" || "жолтый":
        action = "Wait";
        break;
    case "green" || "зелений" || "зеленый":
        action = "Go";
        break;
    default:
        action = "Do whatever you want";
}
alert(action)

console.log("task 17_____________________________________________________");
// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLights = prompt("Який зараз колір світлофора?");
let isRoadClear = confirm("На дорозі є машини?");

if (
    (trafficLights === "red" || trafficLights === "червоний") &&
    isRoadClear === true
) {
    toDo = "стой все равно";
}
else if (
    (trafficLights === "red" || trafficLights === "червоний") &&
    isRoadClear === false
) {
    toDo = "стой и жди";
}
else if (
    (trafficLights === "yellow" || trafficLights === "жовтий") &&
    isRoadClear === true
) {
    toDo = "Жди";
}
else if (
    (trafficLights === "yellow" || trafficLights === "жовтий") &&
    isRoadClear === false
) {
    toDo = "всервано жди";
}
else if (
    (trafficLights === "green" || trafficLights === "зелений") &&
    isRoadClear === true
) {
    toDo = "подожди пока нарушители проедут";
}
else if (
    (trafficLights === "green" || trafficLights === "зелений") &&
    isRoadClear === false
) {
    toDo = "иди";
}
else {
    toDo = "делай что хочешь!";
}

alert(toDo)
console.log("_______________________");



















