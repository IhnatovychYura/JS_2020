console.log(22)
// Реалізувати друкарську машинку.
//     У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let txt = document.getElementById('showText')

let string = 'Hello World';
let arrString = string.split(``);

function showText(letter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (letter === ' ') {
                resolve(txt.innerHTML += `&ensp;`)
            } else if(letter){
                resolve( txt.innerText +=`${letter}`)
                return
            }
            reject("Something go wrong")
        }, Math.round(Math.random() * 1000))
    })

}

async function catchLetter(arrayOfLetters) {
   for (let i=0; i<arrayOfLetters.length; i++){
       await showText(arrayOfLetters[i])
   }
}

catchLetter(arrString);