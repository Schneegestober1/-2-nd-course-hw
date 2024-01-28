// // Задание 1.

// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];

// // а
// // function res(a, b) {
// //   return a.age - b.age
// // }

// // б
// // const res = (a, b) => a.age - b.age

// // с
// console.log(people.sort((a, b) => a.age - b.age));


// // Задание 2 

// const people = [
//   {name: 'Глеб', gender: 'male'},
//   {name: 'Анна', gender: 'female'},
//   {name: 'Олег', gender: 'male'},
//   {name: 'Оксана', gender: 'female'}
// ];

// function isPositive(number) {
//   return number > 0;
// }

// function isMale(per) {
//   return per.gender === 'male';
// }

// function filter (arr, cb) {
  
//   const result = [];

//   for (i = 0; i < arr.length; i++) {
    
//     if (cb(arr[i])) {
//       result.push(arr[i]);
//     }

//   }

//   return result;

// }

// console.log(filter([3, -4, 1, 9], isPositive));
// console.log(filter(people, isMale));



// // Задание 3 

// let cat = setInterval(() => console.log(new Date()), 3000);
// setTimeout(() => { clearInterval(cat); console.log('30 секунд прошло'); }, 30000);


// // Задание 4 

// function delayForSecond(callback) {
//   setTimeout(callback, 1000)
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })


// Задание 5 

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	сb(); }
  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));


