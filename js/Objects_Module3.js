const hotel = {
    name: 'Resort Spa',
    stars: 5,
    capacity: 250,
    manager: 'Chuck Norris'

};

const inputName = 'color';
const inputValue = 'tomato';

const inputPickerData = {
    [inputName]: inputValue,
};

console.log(inputPickerData);




const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  hobbies: ['swiming', 'music', 'sci-fi'],
};
//Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например, если необходимо получить значение страны пользователя, записываем user.location.country, где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.

const location = user.location;
console.log(location); 
const country = user.location.country;
console.log(country);

const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies);



const add = function (...args) { console.log(args);
  // массив всех аргументов 
};  
add(1, 2, 3); add(1, 2, 3, 4, 5);
  
const add1 = function(value, ...args) {
  console.log(value); // первый аргумент
  console.log(args); // массив всех остальных аргументов
};

add1(10, 1, 2, 3);
add1(15, 1, 2, 3, 4, 5);


//--------------------------------------
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
  {
    title: 'Сон смешного человека',
    author: 'Федор Достоевский',
    rating: 7.75,
  },
];

for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}