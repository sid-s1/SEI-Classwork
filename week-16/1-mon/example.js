const mostCommonWord = (arr) => {
    const obj = {};
    for (const word of arr) {
        if (obj[word]) {
            obj[word] += 1;
        }
        else {
            obj[word] = 1;
        }
    }

    let answer = '';
    let max = 0;
    for (const key of Object.keys(obj)) {
        if (obj[key] > max) {
            answer = key;
            max = obj[key];
        }
    }
    return answer;
};

module.exports = mostCommonWord;