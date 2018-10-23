//# sourceMappingURL=5-interfaces.js.map

interface Animal {
    name: string;
    numberOfLegs: number;
}

let lassie : Animal = {
    name: "Lassie",
    numberOfLegs: 4
}

// It is completely acceptable for an Object to have more properties than its Interface. 

// Implementation
interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on: ", d)
    }
}

let myApples : Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
