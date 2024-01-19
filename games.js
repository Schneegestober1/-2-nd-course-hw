// Game 1 

function game1() {

    let numberMonth = +prompt('Введите номер месяца (от 1 до 12):');
    
    // let numberMonth = Number(('Введите номер месяца (от 1 до 12):'));

    if (!isNaN(numberMonth) && numberMonth >= 1 && numberMonth <= 12) {
        if (numberMonth >= 3 && numberMonth <= 5) {
         alert ("Весна");
        } else if (numberMonth>= 6 && numberMonth <= 8) {
         alert ("Лето");
        } else if (numberMonth >= 9 && numberMonth <= 11) {
         alert ("Осень");
        } else {
         alert ("Зима");
        }
    } else {
        alert ("Некорректный ввод. Введите номер месяца от 1 до 12.");
    } 
}