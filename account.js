class account {
    constructor(_acc, _bal) {
        this.Acc_Number = _acc;
        this.Balance = _bal;
    }
    debitAmount() {
        return 'this is debitamount fun';
    }
    creditAmount() {
        return 'this is creditAmount fun ';
    }
    getBalance() {
        return `your balance is ${this.Balance}`;
    }
}
let A1 = new account(3, 2000);
