//======КОНСПЕКТ========//

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers);


//============================================
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
//==============================================

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 4;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }
//===========================================================

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]);

//===============================================================

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.table(total);

//===============================================

// const a = ['Mango'];
// // Присвоение по ссылке.
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push('Poly');
// console.log(a); // ['Mango', 'Poly']

// // b изменилось тоже, потому что b, как и a,
// // просто содержат ссылку на одино и то же место в памяти
// console.log(b); // ['Mango', 'Poly']

// // Результат повторяется
// b.push('Ajax');
// console.log(a); // ['Mango', 'Poly', 'Ajax']
// console.log(b);

//====================================================

// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split(''));

//===========================================

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//     //это console.log будет выполняться на каждой итерации четное или не четное. Если его убрать, то будет только нижний лог выводиться
//     console.log(number);
//     //Если сюда вставить continue; ,то идем от обратного. Если не четное, то потом все четное. (Видео 1:10 Модуль 2. Занятие 3. Массивы. Репета)

//     //внутри if мы логируем, что хотим и выводиться только это
//     if (number % 2 === 0) {
//         console.log(`${number} - четное!!`);
//         total += number;
//     }
// }
// console.log('Total: ', total);

//=============ОБЛАСТЬ ВИДИМОСТИ=============================//
// const value = 50;

// const add = function(num) {
//   const value = 10;
//   const innerValue = 5;

//   return num + value + innerValue;
// };

// // value объявлен глобально и поэтому доступен
// console.log(value); // 50

// console.log(add(20)); // 35

// // Ошибка, переменная innerValue не объявлена в этой области
// // видимости, она доступна только внутри фукции add
// console.log(innerValue);

//============HOISTIGN=========//

// console.log(value); // undefined
// value = 5;

// if (true) {
//   console.log(value); // 5
//   var value = 10;
//   console.log(value); // 10
// }

// value = 15;
// console.log(value); // 15

//===========Стрелочные Функции ========//

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3);