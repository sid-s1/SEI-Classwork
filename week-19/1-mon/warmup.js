const frequencyElements = (arr) => {
    const frequencyObj = {};
    for (const element of arr) {
        if (frequencyObj[element]) {
            frequencyObj[element] += 1;
        }
        else {
            frequencyObj[element] = 1;
        }
    }
    return frequencyObj;
};

const oddFrequencyElement = (obj) => {
    for (const key of Object.keys(obj)) {
        if (obj[key] % 2 !== 0) {
            return key;
        }
    }
};

const obj = frequencyElements([20, 1, -1, 2, -2, 3, 3, 3, 5, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
console.log(oddFrequencyElement(obj));