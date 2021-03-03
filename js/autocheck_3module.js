//--------------------------------7
//Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: 'Ямайка'};
// apartment.location.city = 'Кингстон';



//------------------------------11
//Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if(apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key);
// }
  // Пиши код выше этой строки
// }

// console.log(keys);
// console.log(values);
// console.log(apartment);

//-----------------------------------------------

// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// // for (const key of keys) {
//   // Ключ
//   console.log(keys);
//   // Значение свойства
//   console.log([keys]);
// }

//--------------------------------------------13
//Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for(const key of keys) {
  
//  values.push(apartment[key]);
// }
// console.log(values);

//-------------------------------16
//Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// const keys = Object.values(salaries);
//   console.log(keys);
//   for(const key of keys) {
//     totalSalary += key;
//  }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//------------------------------------17
//Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for(const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// };



//---------------------------18
//Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for(const product of products)
//   if(product.name === productName) {
//     return product.price}
//   return null;

// }

//-----------------------------------19
//Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const propValues = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//   console.log(product); 
    
//     for (const key of keys) {
//       if (key === propName) {
//         propValues.push(product[key])
//       }
//     }
//     }
//   console.log(names);
//   return propValues;
// };
  
//   // Пиши код выше этой строки
// console.log(getAllPropValues('name'));


//--------------------------------20
//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
// for(const product of products) {
//   const values = Object.values(product);
//   for(const value of values) {
//   if (value === productName) {
//     totalPrice = product.price * product.quantity;
//     return totalPrice;
//   }
// }
// }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Сканер'));
// console.log(calculateTotalPrice('sdfs'));

// //ТОЖЕ САМОЕ, НО БЕЗ ПЕРЕМЕННЫХ. СОКРАЩАЕМ КОД--------------------------------------------------------------

// function calculateTotPrice(productName) {
//   // Пиши код ниже этой строки
// for(const product of products) {
//   // const values = Object.values(product);
//   // for(const value of values) {
//   if (product.name === productName) {
//     return product.price * product.quantity;
    
//   }
// }
// // }
//   return 0;

//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Сканер'));
// console.log(calculateTotalPrice('sdfs'));




//===================ДЕСТРУКТУРИЩАЦИЯ==================//
//-----------------------21
//Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow} = highTemperatures;
// //const yesterday = highTemperatures.yesterday;
// //const today = highTemperatures.today;
// //const tomorrow = highTemperatures.tomorrow;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;


//-------------------------22
//В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;
//const icon = highTemperatures.icon;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(yesterday, today, tomorrow, icon);

//--------------------23
//Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const{
//   yesterday: highYesterday, 
//   today: highToday, 
//   tomorrow: highTomorrow, 
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures;
// //const highYesterday = highTemperatures.yesterday;
// //const highToday = highTemperatures.today;
// //const highTomorrow = highTemperatures.tomorrow;
// //const highIcon = highTemperatures.icon;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


//------------------------------------24
//Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// //for (const color of colors) {
//  // hexColors.push(color.hex);
//   //rgbColors.push(color.rgb);
//   for (const {hex, rgb} of colors) {
// 	hexColors.push(hex);
// 	rgbColors.push(rgb);
// }

//------------------------------------------25
//Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {today:{high:highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}
// } = forecast;
// //const highToday = forecast.today.high;
// //const lowToday = forecast.today.low;
// //const todayIcon = forecast.today.icon;

// //const highTomorrow = forecast.tomorrow.high;
// //const lowTomorrow = forecast.tomorrow.low;
// //const tomorrowIcon = forecast.tomorrow.icon;

//---------------------------------------------------26
//Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow,  high: tomorrowHigh}
//         } = forecast;
//  // const todayLow = forecast.today.low;
//  // const todayHigh = forecast.today.high;
//  // const tomorrowLow = forecast.tomorrow.low;
//  // const tomorrowHigh = forecast.tomorrow.high;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


//==================================SPREAD==========================//

//-----------------------------------------27
//================Операция spread при передаче аргументов===============//
//запись Math.max(...[14, -4, 25, 8, 11]), после интерпретации превращается в Math.max(14, -4, 25, 8, 11) - синтаксис ... возвращает распакованный массив, то есть распыляет его элементы как отдельные аргументы.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);

//-----------------------------------28
//===========================Spread при создании нового массива=====//
//В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//----------------------------29
//========================Spread при создании нового объекта===========//






//------------------------------30
//Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// //const task = {completed, category, priority, ...data};

//   return {completed, category, priority, ...data};
//   // Пиши код выше этой строки
// };





//========================REST================================//
//--------------------------------------31
//===========================rest для сбора всех аргументов функции=====//
//Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// Пиши код ниже этой строки
// function add(...args) {
//  // console.log(args);
//   let total = 0;
//   for(const arg of args) {
//     total += arg;
//   }
//   return total;
//   // Пиши код выше этой строки
// };
// add(15, 27);
// console.log(add(15, 27));

//--------------------------------------32--------------------------//
//Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// Пиши код ниже этой строки
function addOverNum(overNum, ...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > overNum) {
    total += arg;
  }
  }
  return total;
  
  // Пиши код выше этой строки
};



//------------------------------------33--------------------
//==================Задача. Массив совпадений===========//
//Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

function findMatches(arrays, ...args) {
  const matches = []; 
  // Не изменяй эту строку
  for(const arg of args) {
    for(const array of arrays) {
  // console.log(array);
   console.log(arg);
  if(arg === array) {
    matches.push(arg);
  }
}
}
  // Пиши код выше этой строки
  return matches;
};

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

//---------------------34
const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
  // Пиши код выше этой строки
};



//-------------------------------------35
//=====================Доступ к свойствам объекта в его методах=========//
//Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const bookIndex = this.books.indexOf(oldName);
// 	this.books.splice(bookIndex, 1, newName);
	
	
//     // Пиши код выше этой строки
//   },
// };

//----------------------------39
//=============================Задача. Удаляем зелье======//
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Пиши код выше этой строки
//   },
// };


//------------------------------40
//=====================Задача. Обновляем зелье===============
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//  const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };


//-------------------------41
//======================Задача. Расширяем инвентарь===============
//Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  
  addPotion(potionName) {
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for(let i = 0; i < this.potions.length; i += 1) {
      if(potionName === this.potions[i].name) {
      this.potions.splice(i, 1)
      }
    }
    
  },
  updatePotionName(oldName, newName) {
 for(const potion of Object.values(this.potions)) {
    if (oldName === potion.name) {
     potion.name = newName
     }
   }
  },
  // Пиши код выше этой строки
};

atTheOldToad.addPotion('Невидимка', 620);
console.table(atTheOldToad.updatePotionName('Зелье скорости', 'Трава прущяя'));

