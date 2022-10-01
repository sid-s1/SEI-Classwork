const currencyNotes = [1000, 500, 200, 100, 50, 20, 10, 5];

const choinChange = (amount) => {
    const change = [];
    let index = 0;
    while (index !== currencyNotes.length) {
        while (amount / currencyNotes[index] >= 1) {
            change.push(currencyNotes[index]);
            amount = amount - currencyNotes[index];
        }
        index++;
    }
    console.log(change);
};

choinChange(800) // $8
// Returns [500, 200, 100] for $5 note and $2, $1 coins

choinChange(100) // $1
// Returns [100]

choinChange(90) // 90c
// Returns [50, 20, 20]

choinChange(2345) // $23.45
// Returns [1000, 1000, 200, 100, 20, 20, 5]