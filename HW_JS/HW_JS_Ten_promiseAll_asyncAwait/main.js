console.log(22)
console.log("Task 1______________________________________________________________");
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
            } else if (letter) {
                resolve(txt.innerText += `${letter}`)
                return
            }
            reject("Something go wrong")
        }, Math.round(Math.random() * 1000))
    })

}

async function catchLetter(arrayOfLetters) {
    for (let i = 0; i < arrayOfLetters.length; i++) {
        await showText(arrayOfLetters[i])
    }
}

catchLetter(arrString);
console.log("Task 2______________________________________________________________");

// function userCard(number) {
//
//     return {
//         balance: 100,
//         transactionLimit: 100,
//         historyLogs: [],
//         key: number,
//     }
// }

function userCard(number) {
    let _balance = 100
    let _transactionLimit = 100
    let _historyLogs = []
    let _key = number

   function getCardOptions(){
       return {
        balance: _balance,
        transactionLimit: _transactionLimit,
        historyLogs: _historyLogs,
        key: _key,
        }
   }

   function putCredits(money) {
        _balance += money;
   }

    function takeCredits(money) {
        if (money <= _transactionLimit && _balance >= money){
            _balance -= money;
        } else if (money >= _transactionLimit) {
            console.error(`ПОМИЛКА, Ви бажаєте зняти кошти сумою яка більша за Ваш кредитний ліміт ${_transactionLimit} грн`)
        } else if (_balance <= money) {
            console.error(`ПОМИЛКА, У Вас недостатньо коштів на рахунку ${_balance} грн`)
        }
    }

    function setTransactionLimit(limit) {
        _transactionLimit = limit;
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
    }
}

const card2 = new userCard(2);
const card3 = new userCard(3);












