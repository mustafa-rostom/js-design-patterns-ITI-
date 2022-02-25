class Payment {
    constructor(iPay) {
        this._PaymentMethod = iPay
    }
    set PaymentMethod(iPay) {
        this._PaymentMethod = iPay;
    }
    pay() {
        this._PaymentMethod.pay();
    }
    Display() {}
}