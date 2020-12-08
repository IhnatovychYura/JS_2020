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

function userCard(number) {
    let _balance = 100
    let _transactionLimit = 100
    let _historyLogs = []
    let _key = number <= 3 ? number : 'key not valid'

    function getCardOptions() {
        return {
            balance: _balance,
            transactionLimit: _transactionLimit,
            historyLogs: _historyLogs,
            key: _key,
        }
    }

    function putCredits(money) {
        _balance += money;
        _balance = _balance.toFixed(2);
        console.log(`Ваш баланс на рахунку ${_balance} грн`)

        let operationTime = new Date()
        let operation = {
            operationType: 'Received credits',
            credits: money,
            operationTime: `${operationTime.getDay()}/${operationTime.getMonth()}/${operationTime.getFullYear()}, ${operationTime.getHours()}:${operationTime.getMinutes()}:${operationTime.getSeconds()}`
        }

        _historyLogs.push(operation)
    }

    function takeCredits(money) {
        if (money <= _transactionLimit && _balance >= money) {
            _balance -= money;
            _balance = _balance.toFixed(2);
            console.log(`Ваш баланс на рахунку ${_balance} грн`)
        } else if (money >= _transactionLimit) {
            console.error(`ПОМИЛКА, Ви бажаєте зняти кошти сумою яка більша за Ваш кредитний ліміт ${_transactionLimit} грн`)
        } else if (_balance <= money) {
            console.error(`ПОМИЛКА, У Вас недостатньо коштів на рахунку ${_balance} грн`)
        }

        let operationTime = new Date()
        let date = operationTime.toLocaleDateString();
        let time = operationTime.toLocaleTimeString();

        let operation = {
            operationType: 'Withdraw of credits',
            credits: money,
            operationTime: `${date}, ${time}`
        }

        _historyLogs.push(operation)
    }

    function setTransactionLimit(limit) {
        _transactionLimit = limit;
        console.log(`Ваш кредитний ліміт ${_transactionLimit} грн`)

        let operationTime = new Date()
        let date = operationTime.toLocaleDateString();
        let time = operationTime.toLocaleTimeString();

        let operation = {
            operationType: 'Transaction limit change',
            credits: limit,
            operationTime: `${date}, ${time}`
        }

        _historyLogs.push(operation)
    }

    function transferCredits(money, recipient) {
        let tax = (money * 0.5) / 100
        if (money + tax <= _transactionLimit && _balance >= money + tax) {
            _balance -= money + tax;
            _balance = _balance.toFixed(2);
            recipient.putCredits(money);
            console.log(`Транзакція пройшла успішно! Комісія за транзакцію склала ${tax}. Ваш баланс на рахунку ${_balance} грн`)
        } else if (money >= _transactionLimit) {
            console.error(`ПОМИЛКА, Ви бажаєте перерахувати кошти сумою більшою за Ваш кредитний ліміт ${_transactionLimit} грн`)
        } else if (_balance <= money) {
            console.error(`ПОМИЛКА, У Вас недостатньо коштів на рахунку ${_balance} грн`)
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits,
    }
}

// const card2 = new userCard(2);
// const card3 = new userCard(3);
//
// card3.putCredits(300);
// card3.setTransactionLimit(200);
// console.log(card3.getCardOptions());
// card3.takeCredits(50);
// console.log(card3.getCardOptions());
// card3.transferCredits(40, card2);
// console.log(card2.getCardOptions());
// card3.takeCredits(50);
// console.log(card3.getCardOptions());

console.log("Task 3______________________________________________________________");

class UserAccount {
    constructor(name, cards) {
        this.name = name || 'No name';
        this.cards = [] || 'No cards';
        this.number = 0;
    }

    ///////////////////// VARIANT 1 /////////////////////////////
    addCard() {
        this.number += 1
        if (this.number <= 3) {
            this.cards.push(new userCard(this.number))
            console.log(this.cards)
        } else {
            console.error('ПОМИЛКА! У Вас не може бути більше ніж 3 карток')
        }
    }

    getCardByKey(number) {
        for (let i = 0; i < this.cards.length; i++) {
            if (number === this.cards[i].getCardOptions().key) {
                return this.cards[i]
            }
        }
    }

}

///////////////////// VARIANT 2 /////////////////////////////
///////////////////// Методи записати через Прототипи  /////////////////////////////
    // UserAccount.prototype.addCard = function() {
    //     if (this.cards.length < 3){
    //         this.cards.push(new userCard(this.cards.length+1))
    //     } else {
    //         console.log('cards limit over')
    //     }
    // }
    //
    // UserAccount.prototype.getCardByKey = function(number) {
    // return this.cards.find(value => value.getCardOptions().key === number)
    // }

const bob = new UserAccount('Bob')

bob.addCard()
bob.addCard()
bob.addCard()
bob.addCard()
let bobCard1 = bob.getCardByKey(1);
let bobCard2 = bob.getCardByKey(2);
console.log(bobCard1);
console.log(bobCard2);

bobCard1.putCredits(400);
bobCard1.transferCredits(50, bobCard2)

console.log(bobCard1.getCardOptions());
console.log(bobCard2.getCardOptions());













