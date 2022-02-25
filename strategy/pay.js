//interface

class IPay {
    pay() {};
}

class WifeIsHere extends IPay {
    pay() {
        console.log('====================wife is here======================');
    }
}
class WifeIsNotHere extends IPay {
    pay() {
        console.log('====================congrats wife is not here ================');
    }
}