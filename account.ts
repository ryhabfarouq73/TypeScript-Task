class account
{
    Acc_Number:number;
    Balance:number;
    constructor(_acc:number,_bal:number)
    {
        this.Acc_Number = _acc;
        this.Balance = _bal

    }
    debitAmount():string{
        return 'this is debitamount fun';
    }
    creditAmount():string{
        return 'this is creditAmount fun ';
    }
    getBalance():string{
        return `your balance is ${this.Balance}`;
    }

    
}
let A1 = new account(3,2000);

interface Iaccount{
    Date_Of_Opening:string;
    addCustomer();
    removeCustomer();

}

class Saving_Account extends account implements Iaccount{
    Min_Balance:number;
    Date_Of_Opening:string;
    constructor(_acc:number,_bal:number,_min:number,_dat:string){
        super(_acc,_bal);
        this.Min_Balance=_min;
        this.Date_Of_Opening=_dat;
    }
    addCustomer(){}
    removeCustomer(){}
}

class Current_Account extends account implements Iaccount{
    Interest_rate:number;
    Date_Of_Opening:string;
    constructor(_acc:number,_bal:number,_int:number,_dat:string){
        super(_acc,_bal);
        this.Interest_rate=_int;
        this.Date_Of_Opening=_dat;
    }
    addCustomer(){}
    removeCustomer(){}
}