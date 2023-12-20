// Задание 1 

let a = 10;

alert (a);

// Задание 2 

let iphone = 2007;

alert (iphone);

// Задание 3 

let creatorJavaScript = "Brendan Eich";

alert (creatorJavaScript);

// Задание 4 

let aDigit = 10;

let bDigit = 2; 

// a
// 1)
let result1 = aDigit + bDigit;
alert (result1);
// 2)
alert (aDigit + bDigit);

// b  
// 1
let result2 = aDigit - bDigit;
alert (result2)
// 2
alert (aDigit - bDigit);

// c
//1
let result4 = aDigit * bDigit;
alert(result4)
// 2
alert (aDigit * bDigit);

// d 
// 1
let result3 = aDigit / bDigit;
alert(result3)
// 2
alert (aDigit / bDigit);


// Задание 5
// a
let cDigit = 2;
let result5 = cDigit ** 5;
alert(result5);
// b
let dDigit = 2;
alert (dDigit ** 5);

// Задание 6 
// a
let letterA = 9;
let letterB = 2;
let result6 = letterA % letterB;
alert (result6);
// b
let letterC = 9;
let letterD = 2;
alert (letterC % letterD);

// Задание 7 

let num = 1;

num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;

alert(num);


//  Задание 8

let age = Number(prompt('Сколько Вам лет'));
alert(age);

//  Задание 9.0 

const user = {
    name: 'Bill',
    age: 109,
    isAdmin: true
}

// Задание 9.1
// a
user.CityOfResidence = 'Boston';
// b
user['city of residence'] = 'Boston';

// Задание 9.2 
user.age = 55; 

//  Задание 9.3
// a
delete user.CityOfResidence;
// b
delete user['city of residence'];

// Задание 9.4 
let info = prompt ('Что Вы хотите узнать о пользователе?', "user");
alert (`Привет, ${info}!`);

// Задание 10

let nameUser = prompt ('Как Вас зовут?');
alert (`Привет, ${nameUser}!`);


