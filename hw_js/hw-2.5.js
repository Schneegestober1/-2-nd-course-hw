// //  Д.з 2.5 
// //  Задание 1 

// // a

// function findLess(a, b) {
//   if (a > b) {
//       return b;
//   } else {
//       return a;
//   }
// }

// console.log(findLess(6, 6));

// // b

// function findLess(a, b) {
//   return a <= b ? a : b;
// }

// console.log(findLess(8, 4));

// // c 

// function findLess(a, b) {
//   return Math.min(a, b);
// }

// console.log(findLess(10, 22));

// //  Задание 2

// // a

// function findEvenNumber(a) {
//   if (a % 2 === 0) {
//     return ' Число четное'
//   } else {
//     return 'Число нечетное'
//   }
// }

// console.log(findEvenNumber(7));

// // b

// function findEvenNumber(a) {
//   return a % 2 === 0 ? ' Число четное' : 'Число нечетное';
// }

// // // Задание 3 

// // // 3.1

// function squareOfTheNumber(b) {
//   const square = b * b;
//   console.log(square);
// }

// squareOfTheNumber(5);

// // // 3.2

// function returnSquareOfTheNumber(c) {
//   return c * c;
// }

// console.log(returnSquareOfTheNumber(7));

// // // Зажание 4 

// function greeting() {

//   let ageInput = Number(prompt("Сколько вам лет?"));

//   let age = parseInt(ageInput);

//   if (isNaN(age) || ageInput.trim() === "") {

//     console.log("Вы ввели неправильное значение или оставили поле пустым");

//     } else {
//     if (age < 0) {

//         console.log("Вы ввели неправильное значение");

//     } else if (age <= 12) {

//         console.log("Привет, друг!");

//     } else {

//         console.log("Добро пожаловать!");

//     }
//     }
// }

// greeting();

// // // Задание 5 

// function task5(a, b) {
//   if (isNaN(a) || isNaN(b) || a.trim() === '' || b.trim() === '') {
//     return 'Одно или оба значения не являются числом';
//   } else {
//     return a * b;
//   }
// }

// console.log(task5(3, 'fhfdh'));

// // // //  Задание 6 

// // function toCube() {

// //   let a = prompt('Введите число');

// //   if (isNaN(a)) {
// //     return 'Переданный параметр не является числом';
// //   } else {
// //     let cube = Number(a) ** 3;
// //     // let cube = Math.pow(Number(a), 3);
// //     return a + ' в кубе равняется ' + cube; 
// //   }
// // }

// // for ( let a = 0; a <= 10; a++) {
// //   console.log(toCube());
// // }

// // Задание 7 

// function getCircleArea() {
//   return Math.PI * this.radius ** 2;
// }

// function getCirclePerimeter () {
//   return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//   radius: 4,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// }

// const circle2 = {
//   radius: 5,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());

// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

// // Game 1 

// function game1() {

//     let numberMonth = +prompt('Введите номер месяца (от 1 до 12):');

//     // let numberMonth = parseInt(prompt('Введите номер месяца (от 1 до 12):'));

//     // let numberMonth = Number(('Введите номер месяца (от 1 до 12):'));

//     if (!isNaN(numberMonth) && numberMonth >= 1 && numberMonth <= 12) {
//         if (numberMonth >= 3 && numberMonth <= 5) {
//          alert ("Весна");
//         } else if (numberMonth>= 6 && numberMonth <= 8) {
//          alert ("Лето");
//         } else if (numberMonth >= 9 && numberMonth <= 11) {
//          alert ("Осень");
//         } else {
//          alert ("Зима");
//         }
//     } else {
//         alert ("Некорректный ввод. Введите номер месяца от 1 до 12.");
//     } 
// }

