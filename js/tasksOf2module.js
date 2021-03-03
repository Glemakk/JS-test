// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// if (fruits.includes(fruits[0])) {
//     return 'Это верняк слива!';
// }

// console.log(fruits);
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// -------------8- LENGTH & lastElement-------------//
// Чаще всего, мы заранее в коде не знаем какая будет длина массива. Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);



// ------------------------------9 Length возврат First и LaseElement------//

// function getExtremeElements(array) {
  
//     // const xtremelastElement = array[array.length - 1];
//     // const xtremeFirstElement = array[0];

//     // return [xtremeFirstElement, xtremelastElement];
//       //             или просто 1 строка
    
// return [array[0], array[array.length-1]];
    
    
//   }

// console.log(getExtremeElements([1, 2, 3,]));
// console.log(getExtremeElements(['asdfdf', 'ff', 'dddd',]));



//-----------------------------------10              SPLIT и разделитель
//Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
  
//   words = message.split(delimeter);
 
//   return words;
// }

// console.log(splitMessage('message', ''));
// console.log(splitMessage('Манго спешит на поезд', ' '));
// console.log(splitMessage('лучшее_за_неделю', '_')); 

//---------------------------------11 СЛОВО УМНОЖИТЬ на цифру-------///
// function calculateEngravingPrice(message, pricePerWord) {

  
//     message = message.split(' ');
  
//     return message.length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));


//----------------------------13                 SLUG
//Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/массивы-для-новичков.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// function slugify(title) {
 
// return title.toLowerCase().split(' ').join('-'); 

// }

// console.log (slugify('Массивы для новичков'));




//-----------------------------14       SLICE
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);;
// const lastThreeEls = fruits.slice(-3);;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// ------------------------------15          CONCAT
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); 

// console.log(allClients);



//-------------------------------16              SLICE + CONCAT
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {

//   let allArray = firstArray.concat(secondArray);
//   let result = allArray.slice(0, maxLength);
  

//   return result;
    
//   }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
// console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));



//-------------------------------18          FOR  +  TOTAL
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
  
//   const min = 1;
//   const max = number;
//   let total = 0;

// for(let i = min; i <= max; i += 1) {
//   total += i;
//   console.log(total);
// }
//   return total;

// }

// console.log(calculateTotal(3));



//------------------------- 19 for с логированием кажлого элемента
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }


//---------------------- 20 FOR c TOTAL в массиве
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
 
// for(let i = 0; i < order.length; i += 1) {
//   total += order[i];
//   console.log(total);
// }

//   return total;
// }
  
//   console.log('Total: ', calculateTotalPrice([12, 85, 37, 4]));


  //---------------------21            For of     IF
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.
  
//   function findLongestWord(string) {
  
//   let newString = string.split(' ');
//   let longestWord = newString[0];
  
  
//   for(const word of newString) {
//    // console.log(word); 
  
//   if(word.length > longestWord.length) {
//     longestWord = word;
//    } 
//   }
 
// 	return longestWord;

// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));


//------------------------------------22         PUSH     Перечисление всех параметров
//Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
    
//     for (let i = min; i <= max; i += 1) { 
//       numbers.push(i);
//   }

//     return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(0, 17));


//-----------------------------------23  For of
//Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).              

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const filteredNumbers = [];
  
//   //for(let i = 0; i <= numbers.length; i += 1) 
//   for(const number of numbers){
//     if(number > value) {
//     filteredNumbers.push(number);

//     }
//   }

// return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//--------------23  FOR 
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



//-------------------------25   Возвращает общие числа из массива
//Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  const commonElements = [];
  
  for (const element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element)
    }
    
  
    // Пиши код выше этой строки
  }
  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


//---------------------------------26  Реыакторинг for на for of
// //Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// //***********************решение РЕФАКТОРИНГ**************** */
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const oneOrder of order) {
//     total += oneOrder;
//   }

//   // Пиши код выше этой строки
//   return total;
// }


//-------------------------------------------29

function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
const evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
    
return evenNumbers;    
    // Пиши код выше этой строки
  }

  console.log(getEvenNumbers(2, 5));
  console.log(getEvenNumbers(3, 11));
  console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(7, 7));
  


//-----------------------------------32 INCLUDES без массива
//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

//При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  // Пиши код ниже этой строки
 let result = false; 
for(let arr of array){
  if(arr === value) {
    result = true;
    return result;
	} 
   }
  return result;
  // Пиши код выше этой строки
}
  console.log(includes([1, 2, 3, 4, 5], 3));
    console.log(includes([1, 2, 3, 4, 5], 17));
    console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
    console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));