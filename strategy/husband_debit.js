class HusbandDebit extends Payment {
    constructor(iPay) {
        super(iPay)
    }
    Display() {
        console.log('Husband:');
        console.log('Use Debit card to pay :150$');
    }
}