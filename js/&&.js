// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));


//24 ||
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
 
// if(totalSpent >= 50000) {discount = GOLD_DISCOUNT;
//    }else if(totalSpent >= 20000 && totalSpent < 50000) {
//      discount = SILVER_DISCOUNT;
//    }else if(totalSpent >= 5000 && totalSpent < 20000){
//      discount = BRONZE_DISCOUNT;
//    }else{discount = BASE_DISCOUNT;
//     }
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(50000));

//============ТЕРНАРНЫЙ ОПЕРАТОР=========//
//25 тернарник
// function checkStorage(available, ordered) {
//   let message;
//     message = ordered > available ? 'На складе недостаточно товаров!': 'Заказ оформлен, с вами свяжется менеджер'
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
// message = password === ADMIN_PASSWORD ? 'Доступ разрешен':'Доступ запрещён, неверный пароль!';
//   return message;
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));


