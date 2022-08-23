/*
 * Типов транзакций всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        const makeTransaction = {
            id: this.transactions.length,
            type,
            amount,
        };
        return makeTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.balance += amount;

        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
        return this.transactions;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Снятие такой суммы не возможно, недостаточно средств.');
            return;
        } this.balance -= amount;
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
        return this.transactions;
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        for (let transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
          }
        } 
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let total = 0;
        for (let transaction of this.transactions) {
            if (type === transaction.type) {
                total += transaction.amount;
          }
        } return total;
  },
};

console.log(account.createTransaction(19, 'withdraw'));
console.log(account.deposit(19));
console.log(account.withdraw(18));
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('withdraw'));