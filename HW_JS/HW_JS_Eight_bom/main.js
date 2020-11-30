console.log(22);
console.log("Task 1 ______________________________________________________________");
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let response = document.getElementById('response')
response.oninput = () => {
    let txt = response.value;
    localStorage.setItem('clientResponse', txt);
}

let item = localStorage.getItem('clientResponse');
response.innerText = `${item}`;

console.log("Task 2 ______________________________________________________________");
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
let form = document.getElementById('authorization')

form.onchange = () => {
    for (let i = 0; i < form.elements.length; i++) {
        let elem = form.elements[i]
        if (elem.type === 'checkbox' || elem.type === 'radio') {
            elem.checked ? elem.value = true : elem.value = false
        }
        localStorage.setItem(elem.id, elem.value)
    }
}

for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.hasOwnProperty(form.elements[i].id)) {
        form.elements[i].value = localStorage.getItem(form.elements[i].id);
        if (form.elements[i].value === 'true') {
            form.elements[i].setAttribute('checked', 'checked')
        }
    }
}

console.log("Task 3 ______________________________________________________________");
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let saveBtn = document.getElementById('saveBtn');
let text = document.getElementById('text');
let lBtn = document.getElementById('left');
let rBtn = document.getElementById('right');

let i = 0;
saveBtn.onclick = () => {
    i += 1
    let txt = text.value
    localStorage.setItem(`text ${i}`, txt)
}

text.value = localStorage.getItem(`text ${localStorage.length}`)


let j = localStorage.length
lBtn.onclick = () => {
    if (j > 0) {
        j -= 1
        text.value = localStorage.getItem(`text ${j}`)
    }
}

rBtn.onclick = () => {
    if (j < localStorage.length) {
        j += 1
        text.value = localStorage.getItem(`text ${j}`)
    }
}
console.log("Task 4 ______________________________________________________________");
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// =========================== VARIANT 1 ==============================
// let formTwo = document.forms.addressBookForm;
// let content = document.getElementById('addressBook')
// let arrayOfAbonents = 'Array_of_Abonents';
// let tempUser = {};
//
// formTwo.submit.onclick = (ev) => {
//     ev.preventDefault();  // не розумію що це
//     let abonent = {};
//     for (let i = 0; i < formTwo.length; i++) {
//         const formTwoElement = formTwo.elements[i];
//         if (formTwoElement.type !== 'submit'){
//         abonent[`${formTwoElement.id}`] = formTwoElement.value
//         }
//     }
//     abonent.id = ++i
//     localStorage.setItem(`Abonent${abonent.id}`, JSON.stringify(abonent))
//
//     showAbonent()
// }
//
// function showAbonent() {
//         let abon = JSON.parse(localStorage.getItem(`Abonent${localStorage.length}`));
//         let div = document.createElement('div');
//         let btnEdit = document.createElement('button')
//         let btnDelete = document.createElement('button')
//
//         div.style = 'width: 300px; float: left; border: red 1px solid;'
//         btnEdit.innerText = 'EDIT';
//         btnDelete.innerText = 'DELETE';
//
//         for (let key in abon) {
//             let p = document.createElement('p')
//             p.innerText = key + ':' + abon[key];
//             div.appendChild(p);
//         }
//
//         div.appendChild(btnEdit);
//         div.appendChild(btnDelete);
//         content.appendChild(div);
//     }

// =========================== VARIANT 2 ==============================
let formTwo = document.forms.addressBookForm;
let content = document.getElementById('addressBook')
let ARRAY_USERS = 'ARRAY_USERS';
let tempUser = {};

formTwo.submit.onclick = (ev) => {
    ev.preventDefault();  // не розумію що це
    let abonent = {};
    for (let i = 0; i < formTwo.length; i++) {
        const formTwoElement = formTwo.elements[i];
        if (formTwoElement.type !== 'submit') {
            abonent[`${formTwoElement.id}`] = formTwoElement.value
        }
    }
    abonent.id = new Date().getTime();
    saveUser(abonent);
}

function saveUser(user) {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        let arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        let find = arrayUsers.find(value => value.id === user.id);
        if (find) {
            let filter = arrayUsers.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter))
        } else {
            arrayUsers.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers))
        }

    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]))
    }

}










