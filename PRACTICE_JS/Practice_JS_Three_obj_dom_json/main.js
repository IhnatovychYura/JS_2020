console.log(22);

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
console.log("Task 1 ______________________________________________________________");
let txtColor = document.getElementById('main_header')
txtColor.style.color = 'red';

console.log("Task 2 ______________________________________________________________");
// -- робить шириниу елементу ul 400 пікселів
let width = document.getElementsByTagName('ul');

for (let i = 0; i < width.length; i++) {
    width[i].style.border = 'solid'
    width[i].style.width = '400px'
    console.log(width[i]);
}

console.log("Task 3 ______________________________________________________________");
// -- робить шириниу всіх елементів з класом linkList шириною 50%
let links = document.getElementsByClassName('linkList');
for (let i = 0; i < links.length; i++) {
    links[i].style.width = '50%';
}

console.log("Task 4 ______________________________________________________________");
// -- отримує текст який зберігається в елементі з класом listElement2
let liTwo = document.getElementsByClassName('listElement2');
for (let i = 0; i < liTwo.length; i++) {
    console.log(liTwo[i].innerText);
    // liTwo[i].innerText += 'click me';
    // let txt = document.createElement('p')
    // txt.innerText = 'click me';
    // liTwo[i].appendChild(txt);
}

console.log("Task 5 ______________________________________________________________");
// -- отримує всі елементи li та змінює ім колір фону на сірий
for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = 'grey';
}

console.log("Task 6 ______________________________________________________________");
// -- отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');

for (let i = 0; i < a.length; i++) {
    a[i].classList.add('anchor');
}

console.log("Task 7 ______________________________________________________________");
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let i = 0; i < a.length; i++) {
    if (a[i].innerText === 'link3') {
        a[i].style.fontSize = '40px';
    }
}

console.log("Task 8 ______________________________________________________________");
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let i = 0; i < a.length; i++) {
    a[i].classList.add(`element_${a[i].innerText}`);
}

console.log("Task 9 ______________________________________________________________");
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let bgColor = document.getElementsByClassName('sub-header');
let favBgColor = prompt('Enter your favourite background color', 'white');

for (let i = 0; i < bgColor.length; i++) {
    bgColor[i].style.backgroundColor = favBgColor;
}

console.log("Task 10 ______________________________________________________________");
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let favTxtColor = prompt('Enter your favourite text color', 'black');

for (let i = 0; i < bgColor.length; i++) {
    if (bgColor[i].innerText === 'content 2 segment'){
        bgColor[i].style.color = favTxtColor;
    }
}

console.log("Task 11 ______________________________________________________________");
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let txt = document.getElementsByClassName('content_1');
let favTxt = prompt('Enter your favourite expression', 'Hello World')

for (let i = 0; i < txt.length; i++) {
  txt[i].innerText = favTxt;
}

console.log("Task 12 ______________________________________________________________");
// -- отримати елементи p та змінити їм paddin на довільне значення
let tagP = document.getElementsByTagName('p');

for (let i = 0; i < tagP.length; i++) {
    tagP[i].style.padding = '50px 50px';
}

console.log("Task 12 ______________________________________________________________");
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let newText = document.getElementsByClassName('text2')

for (let i = 0; i < newText.length; i++) {
    newText[i].innerText = 'NEW TEXT';
}