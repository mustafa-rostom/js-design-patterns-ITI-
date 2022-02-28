class SortAlgorithm {
    constructor() {
        this.arr = [5, 6, 2, 6, 9, 3, 5, 2]
    }

    ///Define Skeleton of an Algorithm in a Method
    SortAlgorithm() {
        this.compare() //subclass
        this.swap(this.arr)
    }

    swap(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (this.compare(arr[i], arr[j])) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
        console.log(arr)
    }

    compare() {

    }

}

class Asc extends SortAlgorithm {
    compare(i, j) {
        return i > j
    }
}

class Des extends SortAlgorithm {
    compare(i, j) {
        return i < j
    }
}

function Run() {
    let order1 = new Asc();
    order1.SortAlgorithm()

    console.log('///////////////////');

    let order2 = new Des();
    order2.SortAlgorithm()
}