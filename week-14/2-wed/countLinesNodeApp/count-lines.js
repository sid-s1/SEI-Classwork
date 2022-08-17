const e = require('express');
const fs = require('fs');
const data = fs.readFileSync('./app.js', { encoding: 'utf-8' });
const lines = data.split('\n');

let comments = 0, code = 0, empty = 0;
const count = (line) => {
    if (line.startsWith('//')) {
        comments += 1;
    }
    else {
        if (line.length > 0) {
            code += 1;
        }
        else {
            empty += 1;
        }
    }
};

// alternate soln with filter
// comments = lines.filter(line => line.startsWith('//')).length;
// empty = lines.filter(line => line === '').length;
// code = lines.length - (comments + empty);

// alternate soln with reduce
// comments = lines.reduce((acc, currentValue) => currentValue.startsWith('//') ? acc + 1 : acc,0);
// empty = lines.reduce((acc,currentValue) => currentValue === '' ? acc + 1 : acc, 0);
// code = lines.length - (comments + empty);

lines.forEach(count);
console.log(`Comments - ${comments}, Code - ${code}, Empty - ${empty}`)