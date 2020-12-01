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
    console.log('It`s night. User is still sleeping');

    setTimeout(()=>{
        console.log('RING-RING-RING!!! It`s time to wake up.')

          if (morningHour < 6){
            userMood('GO AWAY', null)
        } else if (morningHour < 7){
            userMood(null, 'Oh nooooo, why did I go to bed so late yesterday')
        } else if (morningHour < 8){
            userMood(null, 'Goood morning family, such a nice day')
          } else{
            userMood(null, 'Oh damn, I`m late')
        }
    }, Math.round(Math.random()*(10000-1000)+1000)) // але в ідеалі я б писав timeout 3000, бо 1сек = 1год
}

wakeUp(5, (err, response) => {
    if (err){
        console.log(`It's too early! User: ${err}`);
        return  // early return - щоб дальше не прописувати else
    }

    console.log(`User: ${response}`)
})
