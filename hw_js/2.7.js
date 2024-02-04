Дз 2.7



Задание 1 

let str = 'outskirts of town';

console.log(str.toLocaleUpperCase());



//  Задание 2 

function findWord() {

  let words = ['Кошка', 'Кит', 'Комар', 'Носорог'];

  let searchWord = 'ко';

  words.forEach((word) => {
    if (word.toLocaleLowerCase().startsWith(searchWord.toLocaleLowerCase())) {
      console.log(word);
    }
  });
}

findWord();

// +

function sringsFilter(arr, str) {
    return arr.filter(item => item.toLocaleLowerCase().startsWith(str.toLocaleLowerCase()));
}
le
console.log(sringsFilter([]));


Задание 3 

// а)

1

let number = 32.58884;

let floorNumber = Math.floor(number);

console.log(floorNumber);

// 2

let number2 = 32.58885;

console.log(Math.floor(number2));


// b)

// 1

let number = 32.58884;

let floorNumber = Math.ceil(number);

console.log(floorNumber);

// 2

let number2 = 32.58885;

console.log(Math.ceil(number2));


// c)

// // 1

let number = 32.69884;

let floorNumber = Math.round(number);

console.log(floorNumber);

// 2

let number2 = 32.32123;

console.log(Math.round(number2));



// Задание 4 

// a)

const minMaxNumber = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...minMaxNumber);

let maxNumber = Math.max(...minMaxNumber);

console.log(minNumber);
console.log(maxNumber);


// b)

const minMaxNumber2 = [52, 53, 49, 77, 21, 32]; 

console.log(`Минимальное число ${Math.min(... minMaxNumber2)} и максимальное число ${Math.max(...minMaxNumber2)}`);



// Задание 5 

function getRandomNumber() {

  let randomNumber = Math.round((Math.random() * 10) + 1);

  console.log(randomNumber);
}

getRandomNumber();



// Задание 6 

function generateRandomArray (num) {

    const arrayLength = Math.round(num / 2);

    const randomArray = [];

    for (a = 0; a < arrayLength; a++) {
        const randomNumber = Math.round(Math.random() * num + 1);
        randomArray.push(randomNumber);
    } 
    return(randomArray);  
}

console.log(generateRandomArray(30));

// +

function getRandomNumber(num) {
    const result = [];
    for (i = 0; i < Math.floor(num / 2); i++)

}



// Задание 7 

function geneRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

console.log(geneRandomNumber(2,8));



// Задание 8 

// a) 

let currentDate = new Date();
console.log(currentDate);

console.log(new Date());


// b)

let myDate = new Date(1706040707464)
console.log(myDate);


// c)

const currentDate2 = new Date();

const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const day = daysOfWeek[currentDate2.getDay()];

const date = currentDate2.getDate();

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
const month = months[currentDate2.getMonth() + 1];

const year = currentDate2.getFullYear();
const hour = currentDate2.getHours();
const min = currentDate2.getMinutes();
const sec = currentDate2.getSeconds();

console.log(`${day}, ${date}-${month}-${year} ${hour}:${min}:${sec}`);

d

const currentDate3 = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(currentDate.toLocaleDateString('ru', options));



// Задание 9 

// а

let currentDate4 = new Date();
currentDate4.setDate(currentDate4.getDate() + 73);
console.log(currentDate4);

// b

let myDate = new Date();

console.log(+myDate);

let days73 = 73 * 24 * 60 * 60 * 1000;

let searchDate = new Date (myDate.getTime() + days73);

console.log(searchDate);

let currentDate = new Date();
let after73days = +currentDate + (73 * 24 * 60 * 60 * 1000);
console.log(new Date(after73days));


// Задание 10 

function formatedDateAndTime(inputDate) {

    const daysOfWeeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dayOfTheWeek = daysOfWeeks[inputDate.getDay()];

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = months[inputDate.getMonth() + 1];


    const year = inputDate.getFullYear();
    const day = inputDate.getDay();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const seconds = inputDate.getSeconds();

    const formatedDate = `Дата: ${day} ${month} ${year}, ${dayOfTheWeek}`;
    const formatedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formatedDate}\n${formatedTime}`;
}

console.log(formatedDateAndTime(new Date()));







