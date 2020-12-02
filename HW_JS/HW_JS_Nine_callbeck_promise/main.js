// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.
//
//     #task

function wakeUp(morningHour, userMood) {
    console.log('_______________________________________')
    console.log('It`s night. User is still sleeping');

    setTimeout(() => {
        console.log('RING-RING-RING!!! It`s time to wake up.')
        if (morningHour < 6) {
            userMood('GO AWAY', null)
        } else if (morningHour < 7) {
            userMood(null, 'Oh nooooo, why did I go to bed so late yesterday')
        } else if (morningHour < 8) {
            userMood(null, 'Goood morning family, such a nice day')
        } else {
            userMood(null, 'Oh damn, I`m late')
        }
    }, Math.round(Math.random() * (10000 - 1000) + 1000)) // але в ідеалі я б писав timeout 3000, бо 1сек = 1год
}

function timeForBreakfast(arrayProducts) {
    console.log('_______________________________________')
    console.log("It's time for breakfast")
    console.log("Let's look what we have in our fridge")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arrayProducts.indexOf('eggs' && 'bread' && 'bacon') === 2) {
                resolve('Eggs benedict')
            } else if (arrayProducts.indexOf('eggs' && 'bread' && 'bacon') !== 2 &&
                arrayProducts.length !== 0) {
                let products = arrayProducts.toString();
                resolve(`something to cook from these products: ${products}`)
                return
            }
            reject("User: BREAKFAST is canceled for me, I don't have products ")
        }, Math.round(Math.random() * (5000 - 1000) + 1000))
    })
}

function brushYourTeeth(percentageOfToothpaste, countOfUsedToothbrush) {
    console.log('_______________________________________')
    console.log("It's time to clean yourself")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (percentageOfToothpaste > 10 && countOfUsedToothbrush < 60) {
                resolve('shine, bright like a diamond');
                return
            }

            if (percentageOfToothpaste <= 10 && countOfUsedToothbrush >= 60) {
                reject(`User: My teeth are still dirty, cause my toothpaste and toothbrushis out`)
            } else if (percentageOfToothpaste <= 10) {
                reject(`User: My teeth are still dirty, cause my toothpaste is running out, just ${percentageOfToothpaste}% left`)
            } else if (countOfUsedToothbrush >= 60) {
                reject(`User: My teeth are still dirty, cause my toothbrush is almost broken, I have used it for ${countOfUsedToothbrush / 2} days`)
            }

        }, Math.round(Math.random() * (5000 - 1000) + 1000))
    })
}

function wearClothes(holeOnPents){
    console.log('_______________________________________')
    console.log("It's time to wear something")
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (holeOnPents){
                reject('FUCK, I am late and I have a big hole on my last pants')
            }
            resolve('my last work suit, it`s my lucky day because previous one I have tore up')

        }, Math.round(Math.random() * (5000 - 1000) + 1000))
    })
}








wakeUp(7, (err, response) => {
    if (err) {
        console.log(`It's too early! User: ${err}`);
        return  // early return pattern - щоб дальше не прописувати else
    }
    console.log(`User: ${response}`);

    ///////////////////////////////////////////////////// ця ф-ція як call-back hell, просто вкладена в минулий колл-бек
    timeForBreakfast(['eggs', 'bread', 'bacon', 'tomato', 'coffee'])
        .then((breakfast) => {
            console.log(`User: Today I will have on breakfast${breakfast}`);
            ///////////////////////////////////////////////////////////////////// наступні ф-ій будуть вже через promise
            return brushYourTeeth(50, 30)
        })
        .then((cleanTeeth) => {
            console.log(`User: My teeth are ${cleanTeeth}`);
            return wearClothes(false)
        })
        .then((inClothes)=> {
            console.log(`User: I put on me ${inClothes}`)
        })
        .catch(err => {
            console.log('____________________________');
            console.log(err);
            console.log('____________________________');
        })
        .finally(()=> {
            console.log('END OF A DAY. GOOD NIGHT')
        })
})
