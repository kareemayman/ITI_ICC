class BankAccount {
  int? accountNumber;
  double? _balance;
  String? accountHolderName;

  void deposit() {
    print('deposit');
  }

  void withdraw() {
    print('withdraw');
  }

  void checkBalance() {
    print('checkBalance');
  }

  double? getBalance() {
    return _balance;
  }

  void setBalance(double newBalance) {
    _balance = newBalance;
  }
}

class SavingAccount extends BankAccount {
  double? interestRate;
  void applyInterest() {
    print('Interest Applied');
  }
}

class CurrentAccount extends BankAccount {
  double? overdraftLimit;
  void preventWithdrawal() {
    print('prevent withdrawal');
  }
}
