// const add = function (a, b, c, d, ...args) {
//     console.log(a, b, c, d);
//     console.log(args);
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));

//* записыыается total чтоб подсчитать произвольное кол-во чисел, как аргументов и возврашает их общюю суммму */

const add = function (...args) {
    console.log(args);
    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));

// * Напиши ф - цию filterNumbers(array[, number1, ...]) кот - я:
// *- первым аргументом принимает массив чисел;
// *-после 1-го аргумента может быть произвольное кол-во др. аргументов, кот-е ьудут числами. 
// * -функция должна вернуть новый массив в кот-м будут только те аргументыб начиная со второго, для кот-х есть аналог в оригинальном массиве.

const filterNumbers = function (array, ...args) {
    console.log('array: ', array);
    console.log('args: ', args);
    const uniqueElements = [];

    for (element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);

            console.log(`${element} есть везде!`);
        }
    }
    return uniqueElements;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 8, 56));

// ПОПРОБОВАТЬ НАЙТИ СЛОВА ПО ТОМУ ЖЕ ПРИНЦИПУ