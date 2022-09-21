class Dice {
    arr = [];
    constructor() {

    }
    roll(number) {
        if (!number) {
            return Math.ceil(Math.random() * 6);
        }
        else {
            while (number != 0) {
                this.arr.push(Math.ceil(Math.random() * 6));
                number--;
            }
            return this.arr;
        }

        // or use below
        // const array = new Array (numberOfRolls);
        // return [...array].map(() => Math.ceil(Math.random() * 6));
    }
}

const dice = new Dice();
console.log(dice.roll());
console.log(dice.roll(3));