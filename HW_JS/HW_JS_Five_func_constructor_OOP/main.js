console.log(22)

console.log("Task 1 ______________________________________________________________");
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

// ================= ФУНКЦІЯ КОНСТРУКТОР / Шаблон =======================
function InfoTag(titleOfTag, action, attributes) {
    this.titleOfTag = titleOfTag || 'No title';
    this.action = action || 'No action';
    this.attributes = attributes || 'No attributes';
}

// =========== Variant 1 ==============
let a = new InfoTag(
    '<a>',
    'Тег a является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег a устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',
    [
        {
            'titleOfAttribute': 'accesskey',
            'actionOfAttribute': 'Атрибут accesskey позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки буквой или цифрой. Браузеры при этом используют различные комбинации клавиш. Например, для accesskey="s" работают следующие сочетания.'
        },
        {
            'titleOfAttribute': 'coords',
            'actionOfAttribute': 'Атрибут coords применяется к ссылкам, которые располагаются внутри контейнера object. Совместно с атрибутом shape создает «горячую область», которая служит ссылкой. По своему действию похож на тег area.'
        },
        {
            'titleOfAttribute': 'download',
            'actionOfAttribute': 'При наличии атрибута download браузер не переходит по ссылке, а предложит скачать документ, указанный в адресе ссылки.'
        }
    ]);

console.log(a);
console.log("_______________________________");

// =========== Variant 2 ==============
let titleOfTag = '<div>';
let action = 'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let attributes = [
    {titleOfAttribute: 'align', actionOfAttribute: 'Задает выравнивание содержимого тега div.'},
    {titleOfAttribute: 'title', actionOfAttribute: 'Добавляет всплывающую подсказку к содержимому.'},
];

let div = new InfoTag(titleOfTag, action, attributes);

console.log(div);
console.log("_______________________________");

// =========== Variant 3 ==============
let objTitleOfTag = {
    h1: '<h1>',
    span: '<span>',
    input: '<input>',
    form: '<form>',
};

let objAction = {
    h1: 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег h1 представляет собой наиболее важный заголовок первого уровня, а тег h6 служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги h1,...,h6 относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.',
    span: 'Тег span предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как table, p или div, с помощью тега span можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега p) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег span и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    input: 'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом input предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент input не требуется помещать внутрь контейнера form, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать form обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',
    form: 'Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.'
};

let objAttributes = {
    h1: [
        {titleOfAttribute: 'align', actionOfAttribute: 'Определяет выравнивание заголовка.'},
    ],
    span: null,
    input: [
        {
            titleOfAttribute: 'accept',
            actionOfAttribute: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
        },
        {titleOfAttribute: 'accesskey', actionOfAttribute: 'Переход к элементу с помощью комбинации клавиш.'},
        {titleOfAttribute: 'align', actionOfAttribute: 'Определяет выравнивание изображения.'},
    ],
    form: [
        {
            titleOfAttribute: 'accept-charset',
            actionOfAttribute: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
        },
        {
            titleOfAttribute: 'action',
            actionOfAttribute: 'Адрес программы или документа, который обрабатывает данные формы.'
        },
        {titleOfAttribute: 'autocomplete', actionOfAttribute: 'Включает автозаполнение полей формы.'},
    ]
};

let h1 = new InfoTag(objTitleOfTag.h1, objAction.h1, objAttributes.h1);
let span = new InfoTag(objTitleOfTag.span, objAction.span, objAttributes.span);
let input = new InfoTag(objTitleOfTag.input, objAction.input, objAttributes.input);

console.log(h1);
console.log(span);
console.log(input);
console.log("_______________________________");


console.log("Task 2 ______________________________________________________________");
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

// =================  Класи (але синтаксичний цукор - бо це та сама ф-ія конструктор) / Шаблон =======================
class Tag {
    constructor(titleOfTag, action = 'No action', attributes) {
        this.titleOfTag = titleOfTag || 'No title';
        this.action = action;
        this.attributes = attributes || 'No attributes';
    }
}

let form = new Tag(objTitleOfTag.form, objAction.form, objAttributes.form)
console.log(form);

console.log("Task 3 ______________________________________________________________");
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
    model: '520i',
    producer: 'BMW',
    year: 1998,
    maxSpeed: 280,
    capacity: 2.0,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
        // console.log('їдемо зі швидкістю ' + this.maxSpeed + ' km на годину');
    },
    info: function () {
        document.write('<h3>This is info about my car: </h3>' +
            'model: ' + this.model + '</br>' +
            'brand: ' + this.producer + '</br>' +
            'year: ' + this.year + '</br>' +
            'max speed: ' + this.maxSpeed + '</br>' +
            'engine capacity: ' + this.capacity + '</br>')
    },
    increaseMaxSpeed: function (newSpeed) {
        console.log(this.maxSpeed += newSpeed);
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function (driver) {
        car.driver = driver;
    }
};

car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2000);
let driver = {
    name: 'Yura',
    experience: 7,
    prevCars: [
        'KIA',
        'Lada',
        'DEO',
    ],
    licence: true,
}
car.addDriver(driver);

console.log(car);

console.log("Task 4 ______________________________________________________________");
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function CarConstructorByFunc (model, producer, year, maxSpeed, capacity) {
    this.model = model || 'unknown';
    this.producer = producer || 'unknown';
    this.year = year || 'unknown';
    this.maxSpeed = maxSpeed || 'unknown';
    this.capacity = capacity || 'unknown';

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
    };
    this.info = function () {
        document.write('<h3>This is info about my car from Func Constructor: </h3>' +
            'model: ' + this.model + '</br>' +
            'brand: ' + this.producer + '</br>' +
            'year: ' + this.year + '</br>' +
            'max speed: ' + this.maxSpeed + '</br>' +
            'engine capacity: ' + this.capacity + '</br>')
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed += newSpeed);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let bmw = new CarConstructorByFunc('520i', 'BMW', 1998, 280, 2.0)

bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(20);
bmw.changeYear(2000);
bmw.addDriver(driver);

console.log(bmw);

console.log("Task 5 ______________________________________________________________");
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class CarConstructorByClass {
    constructor(model, producer, year, maxSpeed, capacity) {
        this.model = model || 'unknown';
        this.producer = producer || 'unknown';
        this.year = year || 'unknown';
        this.maxSpeed = maxSpeed || 'unknown';
        this.capacity = capacity || 'unknown';
    }

        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
        }
        info() {
            document.write('<h3>This is info about my car from Class Constructor: </h3>' +
                'model: ' + this.model + '</br>' +
                'brand: ' + this.producer + '</br>' +
                'year: ' + this.year + '</br>' +
                'max speed: ' + this.maxSpeed + '</br>' +
                'engine capacity: ' + this.capacity + '</br>')
        };
        increaseMaxSpeed(newSpeed) {
            console.log(this.maxSpeed += newSpeed);
        };
        changeYear(newValue) {
            this.year = newValue;
        };
        addDriver(driver) {
            this.driver = driver;
        }
}

let carBmw = new CarConstructorByClass('520i', 'BMW', 1998, 280, 2.0)

carBmw.drive();
carBmw.info();
carBmw.increaseMaxSpeed(20);
carBmw.changeYear(2000);
carBmw.addDriver(driver);

console.log(carBmw);

console.log("Task 6 ______________________________________________________________");
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

class Popelushka{
    constructor(name, age, footSize) {
        this.name = name || 'No name';
        this.age = age;
        this.footSize = footSize;
    }
}

let Anna = new Popelushka('Anna',20, 38);
let Katia = new Popelushka('Katia',21, 36.5);
let Marta = new Popelushka('Marta',25, 37.5);
let Nastia = new Popelushka('Nastia',18, 36);
let Liza = new Popelushka('Liza',19, 37);
let Dana = new Popelushka('Dana',16, 34);
let Zina = new Popelushka('Zina',69, 41);

let arrayOfPopelushkas = [Anna, Katia, Marta, Nastia, Liza, Dana, Zina]
console.log(arrayOfPopelushkas);

class Prince{
    constructor(name, age, shoeSize) {
        this.name = name || 'No name';
        this.age = age;
        this.shoeSize = shoeSize;
    }

    findPopelushka(arrayOfPopelushkas){
        for (let i=0; i<arrayOfPopelushkas.length; i++ ){
            if (arrayOfPopelushkas[i].footSize === prince.shoeSize){
                console.log(`Prince ${prince.name} was looking for popelushka ${arrayOfPopelushkas[i].name}`)
            }
        }
    }
}

let prince = new Prince('Yura', 19, 36)
console.log(prince);
prince.findPopelushka(arrayOfPopelushkas)