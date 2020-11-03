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

for (let i=0; i<width.length; i++ ){
    width[i].style.border = 'solid'
    width[i].style.width = '400px'
    console.log(width[i]);
}

console.log("Task 3 ______________________________________________________________");
// -- робить шириниу всіх елементів з класом linkList шириною 50%
let links = document.getElementsByClassName('linkList');
for (let i=0; i<links.length; i++ ) {
    links[i].style.width = '50%';
}

console.log("Task 4 ______________________________________________________________");
// -- отримує текст який зберігається в елементі з класом listElement2
let liTwo = document.getElementsByClassName('listElement2');
for (let i=0; i<liTwo.length; i++ ) {
    liTwo.innerText = '<p>click me</p>';
}





// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення