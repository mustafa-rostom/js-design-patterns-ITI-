class IBehavior {
    withdraw() {}
    deposit() {}
}

class Silver extends IBehavior {

    withdraw() {
        console.log('-30%')
    }
    deposit() {
        console.log('+10%')
    }

}

class Gold extends IBehavior {

    withdraw() {
        console.log('-20%')
    }
    deposit() {
        console.log('+30%')
    }
}

class Platinum extends IBehavior {

    withdraw() {
        console.log('-15%')
    }
    deposit() {
        console.log('+70%')
    }
}

class BankState {
    constructor() {
        this._state = new Silver();
    }

    set State(iState) {
        this._state = iState;
    }

    get State() {
        return this._state;
    }

    withdraw() {
        return this._state.withdraw();
    }

    deposit() {
        return this._state.deposit();
    }

}

function Run() {
    let CurrentState = new BankState();

    console.log(CurrentState.State);

    CurrentState.withdraw();
    CurrentState.deposit();

    ///State Transition
    CurrentState.State = new Platinum();

    console.log(CurrentState.State);
    CurrentState.withdraw();
    CurrentState.deposit();
}