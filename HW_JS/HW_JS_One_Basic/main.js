console.log(22);

console.log("task 1_____________________________________________________")
// присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

// string
let greeting = "Hello";
let university = "owu";
let domen = "com"
let lang = "ua";

// number
let number = 1;

//boolean
let bool = true;

console.log(greeting);
console.log(number);
console.log(bool);

alert("university");

document.write(domen + " " + lang);

console.log("task 2_____________________________________________________")
// переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

greeting = "Hi";
number = -999;
bool = false;

console.log(greeting);
alert(number);
document.write(" " + bool);

console.log("task 3_____________________________________________________")
// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const Pi = 3.14;
const SMinM = 100;
const pplTemp = 36.6;

const SM = 'сантиметр';
const M = 'метр';
const KM = 'кілометр';

console.log(Pi, SMinM, pplTemp);
alert(SM);
document.write("<br/>" + SM + " " + M + " " + KM)

console.log("task 4_____________________________________________________")
// при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let name = prompt("Enter your name");
let surname = prompt("Enter your surname");
let fathername = prompt("enter your futhername");

console.log(name);
console.log(surname);
console.log(fathername);

console.log("task 5_____________________________________________________")
// Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = name + " " + surname + " " + fathername;
console.log(person);

console.log("task 6_____________________________________________________")
// Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

console.log("task 7_____________________________________________________")
//при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let num1 = prompt("Enter any number", 1);
let num2 = prompt("Enter any number again", 2);
let num3 = prompt("Enter any number one more time", 3);

console.log(+num1, +num2, +num3);

console.log("task 8_____________________________________________________")
// при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
 let num4 = prompt("Sorry, but you have to enter number at last", 4);
 let result = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);

console.log(result);

console.log("task 9_____________________________________________________")
// при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let num5 = prompt("Enter any fractional number", 1.1);
let num6 = prompt("Enter any fractional number", 2.2);
let num7 = prompt("Enter any fractional number", 3.3);

let result2 = parseFloat(num5) + parseFloat(num6) + parseFloat(num7);

console.log(result2);

console.log("task 10_____________________________________________________")
// при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let result3 = Math.round(+num5) + Math.round(+num6) + Math.round(+num7);

console.log(result3);

console.log("task 11_____________________________________________________")
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let result4 = Math.pow(+num1, +num2);

console.log(result4);

console.log("task 12_____________________________________________________")
//При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль

let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log(typeof a, b, c, d);

console.log("task 12_____________________________________________________")
//Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную

let result5 = 10 !== 10;
console.log(result5);

// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 === 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 !== 10 -> false
// 10 < 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// _________________ ДОП ___________________________
console.log("task 13_____________________________________________________")
// Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль

console.log(132 > 100 && 45 < 12 ); // F
console.log(34 > 33 && 23 < 90 ); // T
console.log(99 > 100 && 45 > 12 ); // F
console.log(132 > 100 || 45 < 12 ); // T
console.log(111 > 11 || 45 < 111 ); // T
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // T
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // T
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // F
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // T
console.log(!!'-1'); // T
console.log(!!-1); // T
console.log(!!'0'); // T
console.log(!!'null'); // T
console.log(!!'undefined'); // T
console.log(!!(3/'owu')); // F
console.log((111 > 11 || 45 < 111) ||  !!'0'); // T
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // F

