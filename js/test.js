// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
 
//   const totalPrice = orderedQuantity*pricePerDroid+deliveryFee;

//   const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

 
//   return message;
// }

// ------------------------------------------------------------------
// function checkAge(age) {
//   let message;
  

//   if (age >= 18) { // Дополни эту строку
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;

// }
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
// ________-----------------------------------------------
  
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (available < ordered) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }

  // Пиши код выше этой строки
  return message;
}

console.log(checkStorage(150, 150));

