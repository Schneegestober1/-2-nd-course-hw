// Д.з . 2.3 

// //  Задание 1

let password = String(prompt('Введите пароль'));

password = password.toLowerCase();

if (password === 'пароль') {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// // Задание 2 

let c = Number(prompt('Введите число'));

if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3 

let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4 
// a
let a = '2';
let b = '3';
alert(parseInt (a) + parseInt(b));
// b
alert(Number (a) + Number(b)); 

// Задание 5 

let month = String(prompt('Введите номер месяца'));

month = month.toLowerCase(); 
// или month = month.toLowerCase() это не надо? Я нашел, что  в switch case можно учитывать разные варианты написания месяцев

switch (month) {
    case '1':
        console.log('Январь');
        break;
    case '2':
        console.log('Февраль');
        break;
    case '3':
        console.log('Март');
        break;
    case '4':
        console.log('Апрель');
        break;
    case '5':
        console.log('Май');
        break;
    case '6':
        console.log('Июнь');
        break;
    case '7':
        console.log('Июль');
        break;
    case '8':
        console.log('Август');
        break;
    case '9':
        console.log('Сентябрь');
        break;
    case '10':
        console.log('Открябрь');
        break;
    case '11':
        console.log('Ноябрь');
        break;
    case '12':
        console.log('Декабрь');
        break;
    default: console.log('Все, дальше нет ничего');
        break;
}

// Задание 7 

let inputNumber = prompt('Ввидите любое число');

if (isNaN(inputNumber)) {
    console.log('Это не число');
} else {
    if (inputNumber % 2 === 0) {
        console.log('Это число четное');
    } else {
        console.log('Это число нечетное');
    }
}

// Задание 8 
// a
let clientOS = String(prompt('Укажите Ваше OS'));

clientOS = clientOS.toLowerCase();

if (clientOS === 'ios' || clientOS === 'айос') {
    console.log("Установите версию приложения для iOS по ссылке");
} else {
    console.log("Установите версию приложения для Android по ссылке");
}
// // b 
let clientOS1 = String(prompt('Вы используете iOS?'));

clientOS1 = clientOS1.toLowerCase();

if (clientOS1 == 'да') {
    console.log("Установите версию приложения для iOS по ссылке");
} else {
    console.log("Установите версию приложения для Android по ссылке");
}

// Задание 9 

let clientOS2 = String(prompt('Укажите Ваше OS'));

let yearDivice = Number(prompt('Укажите год выпуска Вашего дивайса'));

clientOS2 = clientOS2.toLowerCase();

if (clientOS2 === 'ios' || clientOS2 === 'айос') {
    if (yearDivice >= 2015) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
} else {
    if (yearDivice >= 2015) {
        console.log('Установите приложение для Android по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
}