// Д.з . 2.3 

// //  Задание 1

// let UserPassword = prompt('Введите пароль');
// let password = 'пароль';

// UserPassword = UserPassword.toLowerCase();

// if (UserPassword === password.toLowerCase()) {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен неправильно');
// }

// // // Задание 2 

// let c = Number(prompt('Введите число'));

// if (c >= 0 && c <= 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// // Задание 3 

// let d = Number(prompt('Введите первое число'));
// let e = Number(prompt('Введите второе число'));

// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// // Задание 4 
// // a
// let a = '2';
// let b = '3';
// alert(Number (a) + Number(b)); 
// // b
// alert(+a + +b);

// // Задание 5 

// let month = prompt('Введите номер месяца');

// if (month !== null && !isNaN(month)) {
//     switch (month) {
//         case '1':
//             console.log('Январь');
//             break;
//         case '2':
//             console.log('Февраль');
//             break;
//         case '3':
//             console.log('Март');
//             break;
//         case '4':
//             console.log('Апрель');
//             break;
//         case '5':
//             console.log('Май');
//             break;
//         case '6':
//             console.log('Июнь');
//             break;
//         case '7':
//             console.log('Июль');
//             break;
//         case '8':
//             console.log('Август');
//             break;
//         case '9':
//             console.log('Сентябрь');
//             break;
//         case '10':
//             console.log('Открябрь');
//             break;
//         case '11':
//             console.log('Ноябрь');
//             break;
//         case '12':
//             console.log('Декабрь');
//             break;
//         default: console.log('Введено некорректное число');
//             break;
//     }
    
// } else {
//     console.log('Ввод отменен или введено не число');
// }


// // Задание 7 

// let inputNumber = prompt('Ввидите любое число');

// if (isNaN(inputNumber)) {
//     console.log('Это не число');
// } else {
//     if (inputNumber % 2 === 0) {
//         console.log('Это число четное');
//     } else {
//         console.log('Это число нечетное');
//     }
// }

// // Задание 8 
// let clientOS = Number(prompt('Введите 0, если вы используете iOS, или 1, если вы используете Android'));

// if (clientOS === 0) {
//     console.log('Установите версию приложения для iOS по ссылке');
// } else if (clientOS === 1){
//     console.log('Установите версию приложения для Android по ссылке');
// } else {
//     console.log('Некорректное значение. Введите 0 для iOS или 1 для Android.');
// }

// // Задание 9 

// let clientOS = Number(prompt('Введите 0, если вы используете iOS, или 1, если вы используете Android'));
// let yearDivice = Number(prompt('Укажите год выпуска Вашего дивайса'));

// if (clientOS === 0) {
//     if (yearDivice >= 2015) {
//         console.log('Установите версию приложения для iOS по ссылке');
//     } else {
//         console.log('Установите облегченную версию приложения для iOS по ссылке');
//     }
// } else {
//     if (yearDivice >= 2015) {
//         console.log('Установите приложение для Android по ссылке');
//     } else {
//         console.log('Установите облегченную версию приложения для Android по ссылке');
//     }
// }