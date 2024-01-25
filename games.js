// Game 1 

function game1() {

    let numberMonth = +prompt('Введите номер месяца (от 1 до 12):');

    // let numberMonth = Number(('Введите номер месяца (от 1 до 12):'));

    if (!isNaN(numberMonth) && numberMonth >= 1 && numberMonth <= 12) {
        if (numberMonth >= 3 && numberMonth <= 5) {
            alert("Весна");
        } else if (numberMonth >= 6 && numberMonth <= 8) {
            alert("Лето");
        } else if (numberMonth >= 9 && numberMonth <= 11) {
            alert("Осень");
        } else {
            alert("Зима");
        }
    } else {
        alert("Некорректный ввод. Введите номер месяца от 1 до 12.");
    }
}

// Game 2 

function game2() {

    let originalArr = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];

    let shuffledArr = originalArr.sort((() => Math.random() - 0.5));

    alert(shuffledArr.join(', '));

    let firstGuess = prompt('Чему равнялся первый элемент массива?');

    let secondGuess = prompt("Чему равнялся последний элемент массива?");

    if (firstGuess.toLocaleLowerCase() === shuffledArr[0] && secondGuess === shuffledArr[shuffledArr.length - 1]) {
        alert('Поздравляем! Вы угадали оба слова!');
    } else if (firstGuess.toLocaleLowerCase() === shuffledArr[0] || secondGuess === shuffledArr[shuffledArr.length - 1]) {
        alert('Вы были близки к победе!')
    } else {
        alert('Вы ответили неверно. Попробуйте еще раз!');
    }
}
