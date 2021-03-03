// Оператор присвоения с добавлением/вычитанием/умножением/делением

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// 18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity;
//   if(totalPrice > customerCredits){
//     message = 'Недостаточно средств на счету!';
//   }else{message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
//        }
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(3000, 5, 23000));

//19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message = 'Отменено пользователем!';
//   } else if (password === 'jqueryismyjam') { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

// console.log(checkPassword('password'));
// console.log(checkPassword(null));
// console.log(checkPassword('jqueryismyjam'));

//20
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if(ordered === 0){message = 'В заказе еще нет товаров';
    }else if (ordered > available) {
      message =  'Слишком большой заказ, на складе недостаточно товаров!';
    }else{
      message = 'Заказ оформлен, с вами свяжется менеджер';}
  // Пиши код выше этой строки
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));