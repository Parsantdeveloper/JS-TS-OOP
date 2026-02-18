
 class BankAccount {

   #balance = 0;
   
   deposit(amount){
    if(amount<=0) throw new Error("Deposit amount must be greater than zero");
    this.#balance+=amount;
    return this.#balance;
   }

   withdraw(amount){
    if(amount<=0) throw new Error("Withdrawal amount must be greater than zero");
    if(amount>this.#balance) throw new Error("Insufficient balance");
    this.#balance-=amount;
    return this.#balance;
   }
    
    showBalance(){
    return this.#balance;
    }
   
 }
 const account = new BankAccount();
 account.deposit(1000);
 console.log(account.showBalance())
