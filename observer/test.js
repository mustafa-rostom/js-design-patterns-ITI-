class IStoreManager {
    constructor() {
        this.observers = []
    }

    // add event listener
    Attach(Observer) {
        this.observers.push(Observer);
        console.log('Customer wants to notify')
    }

    //remove event listener
    Dettach(Observer) {
        for (var i in this.observers)
            if (this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    // invoke
    Notify() {
        for (var i in this.observers) {
            this.observers[i].update(this);
        }
    }
}

class StoreManager extends IStoreManager {
    // store manager created
    constructor() {
        super()
    }

    SendEmails() {
        this.Notify()
    }
}




class Icustomar {
    constructor() {}
    update() {

    }
}

class Ali {
    constructor() {
        console.log('new customar Ali')
    }
    update() {
        console.log('Ali new mail with iphone12')
    }
}

class Ahmed {
    constructor() {
        console.log('new customar Ahmed')
    }
    update() {
        console.log('Ahmed new mail with iphone12')
    }
}

class Ibrahim {
    constructor() {
        console.log('new customar Ibrahim')
    }
    update() {
        console.log('Ibrahim new mail with iphone12')
    }
}


function Run() {
    var customar1 = new Ali();
    var customar2 = new Ahmed();
    var Store = new StoreManager();
    Store.Attach(customar1);
    Store.Attach(customar2);
    Store.SendEmails();
}