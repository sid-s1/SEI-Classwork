// const decodeMessage = (message) => {
//     let result = "";
//     for (let index = 0; index < message.length; index++) {
//         if (message[index] !== " ") {
//             const decodedCharacter = String.fromCharCode(message.charCodeAt(index) - 3);
//             result += decodedCharacter;
//         }
//         else {
//             result += " ";
//         }
//     }
//     console.log(result);
// };

// decodeMessage("FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH");

const decodeMessage = (message) => {
    const originalSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const encodedSet = "DEFGHIJKLMNOPQRSTUVWXYZABC";
    let result = "";
    for (let index = 0; index < message.length; index++) {
        result += (originalSet[encodedSet.indexOf(message[index])] ? originalSet[encodedSet.indexOf(message[index])] : message[index]);
    }
    console.log(result);
};

decodeMessage("FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.")