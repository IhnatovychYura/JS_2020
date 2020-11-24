console.log(22);
console.log("Task 1 ______________________________________________________________");
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let div = document.createElement('div');
div.id = 'text';
div.innerText = 'Divka which can delete herself';
div.style.backgroundColor = 'lightgreen';

let btn = document.createElement('button');
btn.innerText = 'DELETE ME';

div.appendChild(btn);
document.body.appendChild(div);

btn.onclick = (ev)=>{
    console.log(ev.target.parentElement);
    ev.target.parentElement.style.display = 'none'
}

console.log("Task 2 ______________________________________________________________");
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let divTwo = document.createElement('div');
divTwo.innerText = 'Divka which can delete own btn';
divTwo.style.backgroundColor = 'lightyellow';

let btnTwo = document.createElement('button');
btnTwo.innerText = 'DELETE ME, real me';

divTwo.appendChild(btnTwo);
document.body.appendChild(divTwo);

// =================== VARIANT 1 =========================
btnTwo.onclick = ()=>{btnTwo.style.display = 'none'}

// =================== VARIANT 2 =========================
// btnTwo.onclick = (ev)=>{ev.target.style.display = 'none'}

console.log("Task 3______________________________________________________________");
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let divThree = document.createElement('div');
divThree.innerText = 'Enter your age: ';
divThree.style.backgroundColor = 'lightblue';

let input = document.createElement('input');
input.value ='18';

let confirm = document.createElement('button');
confirm.innerText = 'confirm';

divThree.appendChild(input);
divThree.appendChild(confirm);
document.body.appendChild(divThree);

confirm.onclick = () => {
    console.log(input.value)
    input.value >= 18 ? alert('Вітаю, Ви повнолітній') : alert('Шкода, Ви неповнолітній, тому геть з нашого сайту')
}

console.log("Task 4______________________________________________________________");
// - Создайте меню, которое раскрывается/сворачивается при клике
// =================== VARIANT 1 =========================

let divFour = document.createElement('div');

let menu = document.createElement('button');
menu.innerText = 'МЕНЮ';

let divFive = document.createElement('div');
divFive.style.backgroundColor = 'gold';
divFive.style.width = '150px';
divFive.hidden = true;

let linkOne = document.createElement('a');
linkOne.innerText = 'Закуски';
linkOne.href = '#';
linkOne.style.display = 'block';
let linkTwo = document.createElement('a');
linkTwo.innerText = 'Салати';
linkTwo.href = '#';
linkTwo.style.display = 'block';
let linkThree = document.createElement('a');
linkThree.innerText = 'Основні страви';
linkThree.href = '#';
linkThree.style.display = 'block';
let linkFour = document.createElement('a');
linkFour.innerText = 'Десерти';
linkFour.href = '#';
linkFour.style.display = 'block';

menu.onclick = (ev) => {
    divFive.hidden ? divFive.hidden = false : divFive.hidden = true
}

divFour.appendChild(menu);
divFour.appendChild(divFive);
divFive.appendChild(linkOne);
divFive.appendChild(linkTwo);
divFive.appendChild(linkThree);
divFive.appendChild(linkFour);

document.body.appendChild(divFour);

// =================== VARIANT 2 =========================
let a1 = document.getElementById('a1')
let subMenu = document.getElementById('subMenu')
subMenu.style.display = 'none'

let flag = true;

a1.onclick = (ev) =>{
    if (flag) {
        subMenu.style.display = 'block';
        flag = false
    } else {
        subMenu.style.display = 'none';
        flag = true
    }
}

console.log("Task 5______________________________________________________________");
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'breakfast', body:'morning meal'},
    {title : 'lunch', body:'short meal in the middle of the day'},
    {title : 'supper', body:'last meal in the day'},
    {title : 'dessert', body:'something sweet'},
]

function drowComments() {
    comments.forEach(comment => {
        let div = document.createElement('div')
        div.innerText = `Title: ${comment.title}; Body: ${comment.body}`;
        div.style.backgroundColor = 'pink';

        const btn = document.createElement('button');
        btn.innerText = 'REMOVE';

        btn.onclick = (ev) => {
            ev.target.parentElement.style.display = 'none'
            console.log('REMOVE');
        }

        div.appendChild(btn);

        document.body.appendChild(div);
    })
}

drowComments();

console.log("Task 6______________________________________________________________");
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let formOne = document.createElement('form');
let formTwo = document.createElement('form');
let inputOneOne = document.createElement('input');
let inputOneTwo = document.createElement('input');
let inputTwoOne = document.createElement('input');
let inputTwoTwo = document.createElement('input');
let h3Name = document.createElement('h3');
let h3Surname = document.createElement('h3');
let pAge = document.createElement('p');
let pGender = document.createElement('p');
let btnThree = document.createElement('button');

h3Name.innerText = 'Enter your name:';
h3Surname.innerText = 'Enter your surname:';
pAge.innerText = 'Enter your age:';
pGender.innerText = 'Enter your gender:';
btnThree.innerText = 'CONFIRM ALL INFO';

formOne.attributes.name = 'pipForm';
formTwo.attributes.name = 'ageForm';
input.attributes.name = 'clientText';

formOne.appendChild(h3Name);
formOne.appendChild(inputOneOne);
formOne.appendChild(h3Surname);
formOne.appendChild(inputOneTwo);
formTwo.appendChild(pAge);
formTwo.appendChild(inputTwoOne);
formTwo.appendChild(pGender);
formTwo.appendChild(inputTwoTwo);

document.body.appendChild(formOne);
document.body.appendChild(formTwo);
document.body.appendChild(btnThree);

btnThree.onclick = (ev) => {
    console.log(`
    NAME: ${inputOneOne.value}, 
    SURNAME: ${inputOneTwo.value}, 
    AGE: ${inputTwoOne.value}, 
    GENDER: ${inputTwoTwo.value}`);
}

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан