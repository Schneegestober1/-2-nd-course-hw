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


// ............................................................................................................

// Д.з  2.4 

// //  Задание 1 

// // a
// let x = 0;
// while (x < 2) {
//     console.log('Привет');
//     x++;
// }

// // b
// let y = 0;
// do {
//     console.log('Привет');
//     y++
// } while (y < 2);

// // c
// for (let z = 0; z < 2; z++) {
//     console.log('Привет');
    
// }

// // Задание 2

// // a
// let a = 1;
// while (a <= 5) {
//     console.log(a);
//     a+= 1;
// }

// // b 
// let b = 1;
// do {
//     console.log(b);
//     b = b + 1;
// } while (b <= 5);

// // c 
// for (c = 1; c <= 5; c++) {
//     console.log(c);
// }

// // Задание 3 

// // a 
// let d = 7;
// while (d <= 22) {
//     console.log(d);
//     d+= 1
// }

// // b 
// let e = 7;
// do {
//     console.log(e);
//     e = e + 1
// } while (e <= 22);

// // c 
// for (f = 7; f <= 22; f++) {
//     console.log(f);
// }

// //  Задание 4 
// const obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400',
// }

// for (const hillbilly in obj) {
//     if (hillbilly === 'Вася') {
//         break
//     }
//     console.log(`${hillbilly} — зарплата ${obj[hillbilly]} долларов`);  
// }

// //  Задание 5 
// // a
// let n = 1000;
// let num = 0;

// while (n >= 50 ) {
//     n = n / 2;
//     num++
//     console.log(num);
// }

// // b
// let n1 = 1000;
// let num1 = 0;

// do {
//     console.log(num1);
//     n1 /= 2;
//     num1 += 1;
// } while (n1 >= 50);

// // c
// let num2 = 0;
// for (n2 = 1000; n2 >= 50; num2 = num2 + 1 ) {
//     n2 /= 2;
//     console.log(num2);
// }

// Задание 6 
// a 
let firstFriday = 1;
let day = firstFriday;

while (day <= 31) {
    if ( day % 7 === 0) {
        console.log(`Сегодня пятница, ${day}е число. Необходимо подготовить отчет.`);
    } 
    day += 7;
}

// b
let firstFriday1 = 7;
let day1 = firstFriday1;

do {
    if ( day1 % 7 === 0) {
        console.log(`Сегодня пятница, ${day1}е число. Необходимо подготовить отчет.`);
    }
    day1 += 7;
} while (day1 <= 31); 

// c 
let firstFriday2 = 3;

for (let day2 = firstFriday2; day2 <= 31; day2 += 7) {
    console.log(`Сегодня пятница, ${day2}е число. Необходимо подготовить отчет.`);
}



