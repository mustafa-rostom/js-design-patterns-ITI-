class login {
    checkCredentails(CibAccountCredentails) {
        if (this.checkCredentails) {
            console.log('CIB login system:checking credentails...');
        }
    }
    confirmCredentails() {
        console.log('valid credentails')
    }
}
class CIBSystem1 {
    validAcount() {
        console.log('CIB system : valid account info');
    }
}

class centeralBank {
    checkCredentails(toAccountId, toBank) {
        console.log('the central bank:checking the centrals bankId_45662 on Abozaapi ');
    }
    validCentrals() {
        console.log('valid centerals ...');
    }
    transferMoney(moneyAmount, toBank) {
        console.log(`the central bank: Transfering ${moneyAmount} to ${toBank}`);
    }
    confirmTransfer() {
        console.log('Done');
    }
}
class CIBSystem2 {
    transferMoney(moneyAmount) {
        console.log(`CIB system2:Transfering :${moneyAmount} to the central bank`);
    }
    confirmTransfer() {
        console.log(`CIB System2:Done`);
    }
}
class TransferFacade {
    constructor() {
        this.login = new login();
        this.CIBSystem1 = new CIBSystem1();
        this.CIBSystem2 = new CIBSystem2();
        this.centeralBank = new centeralBank()
    }

    transfer(CibAccountCredentails, amount, toBank, toAccountId) {
        this.login.checkCredentails(CibAccountCredentails)
        this.login.confirmCredentails();

        this.CIBSystem1.validAcount();

        this.centeralBank.checkCredentails(toAccountId, toBank);
        this.centeralBank.validCentrals();

        this.CIBSystem2.transferMoney(amount);
        this.CIBSystem2.confirmTransfer();
    }
}

function withFacade() {
    //client
    let user = new TransferFacade();
    user.transfer({ NID: 111, BID: 2000, password: "welcomefacadde" }, 5000, "AboZabi", 222)
}