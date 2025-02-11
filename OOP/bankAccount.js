class BankAccount {
    #balance = 0;

    deposit(value) {
        this.#balance += value;
    }

    withdraw(value) {
        if (this.#balance - value > 0) {
            this.#balance -= value;
        } else {
            this.#balance = 0;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 300
console.log(account.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
