const arr = [1,2,3,4];

//const doubledArr = doubleArr(arr);

// function doubleArr(arr) {
//     const double = [];
//     for (const number of arr) {
//         const doubledNumber = number * 2;
//         double.push(doubledNumber);
//     }
//     return double;
// }

doubleArr(arr);  

function doubleArr(arr) {
    for (let i=0; i<arr.length; i++) {
        const doubledNumber = arr[i] * 2;
        arr[i] = doubledNumber;
    }
}

//^^^ above will result in arr's values changing directly
//^^^ instead of having to return or store value in something else

