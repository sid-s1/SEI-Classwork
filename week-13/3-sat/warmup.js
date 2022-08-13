const conv = (value) => {
    if (value === "A" || value === "B" || value === "C") {
        return 2;
    }
    else if (value === "D" || value === "E" || value === "F") {
        return 3;
    }
    else if (value === "G" || value === "H" || value === "I") {
        return 4;
    }
    else if (value === "J" || value === "K" || value === "L") {
        return 5;
    }
    else if (value === "M" || value === "N" || value === "O") {
        return 6;
    }
    else if (value === "P" || value === "Q" || value === "R" || value === "S") {
        return 7;
    }
    else if (value === "T" || value === "U" || value === "V") {
        return 8;
    }
    else {
        return 9;
    }
}

const convertPhoneNumber = (givenArray) => {
    const mappedString = givenArray[1].substring(0, 6).split('').map(conv).join('');
    const finalString = `${givenArray[0]} ${mappedString.substring(0, 3)} ${mappedString.substring(3)}`;
    return finalString;
}

convertPhoneNumber([1800, 'PLAYTECH']);


// function convertPhoneNumber(givenArray) {
//     const num = givenArray[0];
//     const toConv = givenArray[1].substring(0, 6);
//     const arrToConv = [];
//     for (const char of toConv) {
//         arrToConv.push(char);
//     }
//     const converted = arrToConv.map(conv);
//     let result = "";
//     for (const char2 of converted) {
//         result += char2;
//     }
//     return num + " " + result;
// }

// convertPhoneNumber([1800, 'PLAYTECH']);