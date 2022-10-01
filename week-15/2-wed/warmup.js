const arr1 = [1, 4, 5, 8, 10];
const arr2 = [0, 2, 3, 6, 9];
const arr3 = [];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3.sort((a, b) => {
//     return a - b;
// }));

const compare = (value) => {
    arr2.forEach((element) => {
        if (element < value) {
            arr3.push(element);
            arr3.push(value);
        }
        else {
            arr3.push(value);
            arr3.push(element);
        }
    });
};

arr1.forEach(compare);

console.log(arr3);