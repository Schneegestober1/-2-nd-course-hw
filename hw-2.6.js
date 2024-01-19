// //  Задание 1 

// let arr1 = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
//     if (arr1[i] === 10) {
//         break;
//     }
// }


// // Задание 2 

// let arr2 = [1, 5, 4, 10, 0, 3];

// let index = arr2.indexOf(4);

// console.log(index);


// // Задание 3 

// let arr3 = [1, 3, 5, 10, 20];

// arr3 = arr3.join(' ');

// console.log(arr3);


// // // Задание 4 

// // a)

// let arr4 = [];

// for (let i = 0; i < 3; i++) {
//     let pushArray = [1, 1, 1];
//     arr4.push(pushArray);
// }

// console.log(arr4);

// // b)

// let clock = [];

// for (let i = 0; i < 3; i++) {
//     let bush = [];
//     for (let k = 0; k < 3; k++) {
//         bush.push(1);
//     }
//     clock.push(bush);
// }

// console.log(clock);


// //  Задание 5

// let arr5 = [1, 1, 1];

// arr5.push(2, 2, 2);

// console.log(arr5);


// // Задание 6

// // a)

// let arr6 = [9, 8, 7, 'a', 6, 5];

// arr6 = arr6.slice(0, 3).concat(arr6.slice(4));

// arr6.sort();

// console.log(arr6);

// // b)

// let arr6 = [9, 8, 7, 'a', 6, 5];

// arr6 = arr6.filter(item => item !== 'a');

// arr6.sort();

// console.log(arr6);


// // Задание 7

// function guessNumber() {

//     let arr7 = [9, 8, 7, 6, 5];

//     let numberInput = Number(prompt('Угадайте число:'));

//     let number = parseInt(numberInput);

//     if (isNaN(number)) {
//         alert('Вы ввели неправильное значение или оставили поле пустым');
//     } else {
//         if (arr7.includes(number)) {
//             alert ('Угадал!');
//         } else {
//             alert('Не угадал.');
//         }
//     }

// }

// guessNumber();


// // Задание 8

// let arr8 = 'abcdef';

// let reverseArr8 = arr8.split('').reverse().join('');

// console.log(reverseArr8);


// // Задание 9

// let arr9 = [
//     [1, 2, 3,],
//     [4, 5, 6],
// ];

// let lineArray = [].concat(... arr9);

// console.log(lineArray);

// // Задание 10

// let arr10 = [9, 8, 7, 6, 5];

// for (let i = 0; i < arr10.length - 1; i++ ) {
//     let sumArr10 = arr10[i] + arr10[i + 1];
//     console.log(`Сумма текущего элемента равна ${arr10[i]} и следуещего эелемента ${arr10[i + 1]} = ${sumArr10}`);
// }

// // Задание 11

// function squareOfTheNumbers() {

//     let numbers = [2, 3, 4, 5, 6]

//     let result = numbers.map(item => (item ** 2));

//     console.log(result);
// }

// squareOfTheNumbers();


// // Задание 12

// function getLengthWords() {

//     let words = ['слово', '', 'слог', 'длинное предложение', 'буква'];

//     let result = words.map(item => item.length);

//     console.log(result);
// }

// getLengthWords()


// // Задание 13

// function filterPositive() {

//     const array11 = [-1, 0, 5, -10, 56];

//     const array112 = [-25, 25, 0, -1000, -2];

//     const negativeNumbers = array11.filter(item => item < 0);

//     const negativeNumbers2 = array112.filter(el => el < 0);

//     console.log(negativeNumbers);

//     console.log(negativeNumbers2);
// }

// filterPositive()


// // Задание 14

// -

// // Задание 15

// -





