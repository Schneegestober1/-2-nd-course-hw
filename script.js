// // Д.з . 2.3 

// // //  Задание 1

// let password = String(prompt('Введите пароль'));

// password = password.toLowerCase();

// if (password === 'пароль') {
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
// alert(parseInt (a) + parseInt(b));
// // b
// alert(Number (a) + Number(b)); 

// // Задание 5 

// let month = String(prompt('Введите номер месяца'));

// month = month.toLowerCase(); 
// // или month = month.toLowerCase() это не надо? Я нашел, что  в switch case можно учитывать разные варианты написания месяцев

// switch (month) {
//     case '1':
//         console.log('Январь');
//         break;
//     case '2':
//         console.log('Февраль');
//         break;
//     case '3':
//         console.log('Март');
//         break;
//     case '4':
//         console.log('Апрель');
//         break;
//     case '5':
//         console.log('Май');
//         break;
//     case '6':
//         console.log('Июнь');
//         break;
//     case '7':
//         console.log('Июль');
//         break;
//     case '8':
//         console.log('Август');
//         break;
//     case '9':
//         console.log('Сентябрь');
//         break;
//     case '10':
//         console.log('Открябрь');
//         break;
//     case '11':
//         console.log('Ноябрь');
//         break;
//     case '12':
//         console.log('Декабрь');
//         break;
//     default: console.log('Все, дальше нет ничего');
//         break;
// }