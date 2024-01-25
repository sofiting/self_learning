class Account {
  protected userName: string;
  protected password: string;
  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }
  protected printAccount() {
    console.log(`UserName: ${this.userName}, Password: ${this.password}`);
  }
}

class BankAccount extends Account {
  public balance: number;
  constructor(userName: string, password: string, balance: number) {
    super(userName, password);
    this.balance = balance;
  }

  public printBankAccount() {
    super.printAccount();
    console.log(`Balance: ${this.balance}`);
  }
}

const bankAccount = new BankAccount("sofia", "223344", 23434);
bankAccount.printBankAccount();
