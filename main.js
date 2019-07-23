// - Банк (название банка, массив открытых счетов).
//     методы:
//         openAccount(client) - принимает аргументом объект клиента и создает
// объект кредитной карты, привязывая ее к клиенту и банку. ВАЖНО! - в одном банке
// можно открыть только один счет. Если клиент делает это повторно, то вывести сообщение
// //     closeAccount(card) - удаляет объект карточки из памяти (и объект карты
// из массива cards у клиента)
function Bank(bankName) {
  return {
    bankName: bankName,
    bankAccount: [],
    openAccount: function(name) {
      var newBankAccount = Client(name, this);
      this.bankAccount.push(newBankAccount);
      return newBankAccount;
    }

  }
}

// - Банкомат (название банка, сумма денег (кол-во всех денег, которое можно снять)
//     методы:
//           withdraw(card, sum) - принимает аргументами объект банковской карточки и
//     сумму денег, которую нужно снять. ВАЖНО! - если сумма больше той, что есть
//     в банкомате, то вывести сообщение. Если карточка от другого банка (карта и
//       банкомат привязываются к банку), то вывести сообщение)
//           add(card, sum) - принимает аргументами объект банковской карточки и сумму
//     денег, которую нужно положить на карту. ВАЖНО! - если сумма больше той, что
//      есть в банкомате, то вывести сообщение.
//           changePIN(card, old PIN, new PIN) - смена пинкода карты. Получает аргументом
//      объект карты, пинкод от карты и новый пинкод. Если пинкод карты не совпадает
//      с тем, что был передан в метод, то вывести сообщение)

function Bankomat(bankName, totalBankomatSum){
  return {
    bankName: bankName,
    totalBankomatSum: totalBankomatSum,
    withdraw: function(card, sum) {
      if (card.sum > totalBankomatSum) {
        console.log("there is not enough money in the ATM");
        return
      }
    },
    add: function(card, sum) {
      if (card.sum > totalBankomatSum) {
        console.log("there is not enough money in the ATM");
      }
    },
    // changePIN: function(card, pin, newPIN){
    //   if (new)

  }
}

// - Банковская карточка (счет: integer, баланс: float, пинкод: string, владелец:
//   класс Client, банк: класс Bank)
//     методы:
//          transferMoney(card, amount) - переводит с одной карты на другую.
//     ВАЖНО! - при переводе деньги с объекта снимаются, а в другой объект добавляются
function Card(amount, balance, pin) {
  return {
    amount: amount,
    balance: balance,
    pin: pin
    // transferMoney: function(card, amount){
    //
    // }
  }
}

// - Client (имя: строка, cards: массив открытых счетов)
//    методы:
//    showTotalBalance() - подсчитывает баланс со всех карт и выводит в консоль.
function Client(name) {
  return {
    name: name,
    cards: [],
    // showTotalBalance: function{
    //
    // }
  }
}


var privat = Bank('PrivatBank');
console.log(privat);

var atm = Bankomat('PrivatBank', 10000);
console.log(atm);

var steve = Client('Steve');
console.log(steve);

var card1 = Card(1234, 500, '2222');
console.log(card1);

steve.openAccount('Steve')
