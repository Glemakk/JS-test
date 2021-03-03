//===================SWITCH========================//
// function getSubscriptionPrice(type) {
//     let price;
    

//  switch (type) { 
//     case 'starter': 
//       price = 0; 
//       break;
//     case 'professional': 
//       price = 20; 
//       break;
//     case 'organization': 
//       price = 50; 
//          break;
//      default: price = 'Та нет такой подписки, епта';
//   }
//   return price;
// }

// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));
// console.log(getSubscriptionPrice('ыап'));

//28
// Как можно записать черз if...else 
//if (password === null) {
//     message = 'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещён, неверный пароль!';
//   }

//--А теперь через switch--//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Отменено пользователем!';
//       break;
//     case ADMIN_PASSWORD:
//     message = 'Добро пожаловать!';
//       break;
//     default:
//     message = 'Доступ запрещён, неверный пароль!';
//   }
//   return message;
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));



function getShippingCost(country) {
    let message;
    
switch (country){
  case 'Китай': 
    message = `Доставка в ${country} будет стоить 100 кредитов`;
    break;
    case 'Чили': 
    message = `Доставка в ${country} будет стоить 250 кредитов`;
    break;
    case 'Австралия': 
    message = `Доставка в ${country} будет стоить 170 кредитов`;
    break;
    case 'Ямайка': 
    message = `Доставка в ${country} будет стоить 120 кредитов`;
    break;
  default: message = 'Извините, в вашу страну доставки нет';
}
  return message;
}
  
  console.log(getShippingCost('Китай'));
console.log(getShippingCost('Чили'));
console.log(getShippingCost('Австралия'));
console.log(getShippingCost('Германия'));
console.log(getShippingCost('Ямайка'));