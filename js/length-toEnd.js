// const courseTopic = 'JavaSript для начинающих';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic);
// console.log(firstElement);
// console.log(lastElement);
// console.log(courseTopicLength);


//31
// function getSubstring(string, length) {
//   const substring = string.slice(string, length); // Дополни эту строку
//   return substring;
// }

// console.log(getSubstring('hhjhhhhh', 3));

//33
// function formatMessage(message, maxLength) {
//   let result;
//   const fullMessage = message <= maxLength;
// if(message.length <= maxLength) {
//   result = `${message}`;
// }else{ result = message.slice(0, maxLength)+ '...';}
//   return result;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16));


//34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); 
//   return normalizedInput;
// }


//35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); 
//   return result;
// }
// console.log(checkForName('Егор Колбасов', 'Bгор'))



//36
// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//   // Пиши код выше этой строки
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Get best SPAM offers now!'));

//Втора версия записать код

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   const normalizedMessage = message.toLowerCase();
//     const hasSpam = normalizedMessage.includes('spam');
//     const hasSale = normalizedMessage.includes('sale');
//  result = hasSpam || hasSale;
//   // Пиши код выше этой строки
//   return result;
// }
// console.log(checkForSpam('Great sAle'));
// console.log(checkForSpam('Great spaM'));
// console.log(checkForSpam('Great'));


// НЕЗАКОНЧЕННА ПРОБА ВПИСАТЬ spamWords

// function checkForSpam(message) {
//   let result;
//   const normalizedMessage = message.toLowerCase();
//   const hasSpam = normalizedMessage.includes('spam');

//   result = hasSpam;
  
//   return result;
// }


// console.log(checkForSpam('sPam'));
// console.log(checkForSpam('SaLe'));
// console.log(checkForSpam('message'));
// console.log(normalizedMessage);