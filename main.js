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
    openAccount: function(client) {
      var newBankAccount = Client(name, this);
      this.bankAccount.push(newBankAccount);
      return newBankAccount;
    },

    closeAccount: function(card) {
      var deleteCard = Card(amount, client, this)
      this.bankAccount.splice(deleteCard);
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

function Bankomat(bankName, sumInBankomat){
  return {
    bankName: bankName,
    sumInBankomat: sumInBankomat,
    withdraw: function(card, sum) {
      if (card.sum > sumInBankomat) {
        console.log("there is not enough money in the ATM");
        return;
      }
      if (card.bankName != bankName){
        console.log("its card of another bank");
      }
    },
    add: function(card, sum) {
      if (card.sum > sumInBankomat) {
        console.log("there is not enough money in the ATM");
      }
    },
    changePIN: function(card, oldPin, newPin){
      if (card.pin != oldPin){
        console.log("It's wrong pincode");
      } else {
        card.pin = newPin;
        return newPin;
      }
    }
  }
}
// - Банковская карточка (счет: integer, баланс: float, пинкод: string, владелец:
//   класс Client, банк: класс Bank)
//     методы:
//          transferMoney(card, amount) - переводит с одной карты на другую.
//     ВАЖНО! - при переводе деньги с объекта снимаются, а в другой объект добавляются
function Card(amount, balance, pin, client, bank) {
  return {
    amount: amount,
    balance: balance,
    pin: pin,
    client: client,
    bank: bank,
    moneyAmount: 0,

    addMoney: function(money) {
      this.moneyAmount += money;
    },
    withdrawMoney: function(money) {
      this.moneyAmount -= money;
    },
    transferMoney: function(card, amount){

    }
  }
}

// - Client (имя: строка, cards: массив открытых счетов)
//    методы:
//    showTotalBalance() - подсчитывает баланс со всех карт и выводит в консоль.
function Client(name) {
  return {
    name: name,
    cards: [],
    addCard: function(amount, balance, pin, client, bank) {
      var card = Card(amount, balance, pin, client, bank, this)
      this.cards.push(card);
    }
    // showTotalBalance: function(){
    //   var balance = 0;
    //   for (var i = 0; i < this.cards.length; i++) {
    //     balance += this.cards[i];
    //   }
    //   return balance;
    // }
  }
}


var privat = Bank('PrivatBank');
var otp = Bank('OTPBank');


var atm1 = Bankomat('PrivatBank', 10000);
var atm2 = Bankomat('OTP', 5000);


var steve = Client('Steve');
privat.openAccount(steve);
