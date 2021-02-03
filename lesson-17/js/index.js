const str = "teSt";
const arr = [1, 2, 4, 5];

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("t"));

const logg = "Hello world";

//Позволяет вырезать строку
console.log(logg.slice(6, 11));

// Не поддерживает минусовое значение
console.log(logg.substring(6, 11));

// Второй аргумент указывает длинну, а не конечный индекс
console.log(logg.substr(6, 5));

// Math - математические вычесления
const num = 12.2;
// Округление числа классическим способом
console.log(Math.round(num));

// parseInt превращает в числовой тип данных (целое число, до строчного значения)
const test = "12.2px";
console.log(parseInt(test));

// parseInt превращает в числовой тип данных (дробное число, до строчного значения)
console.log(parseFloat(test));
