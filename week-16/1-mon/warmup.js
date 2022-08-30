function checkValidity(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a)
        return false;
    else
        return true;
}

const triangleType = (x, y, z) => {
    if (!checkValidity(x, y, z)) {
        return 'invalid man, come on'
    }
    else {
        if (x === y && x === z) {
            return 'equilateral triangle'
        }
        else if ((x === y && x !== z) || (x === z && x !== y) || (y === z && y !== x)) {
            return 'isosceles triangle'
        }
        else {
            'nona pona'
        }
    }
};

const rightAngled = (x, y, z) => {
    const maxSide = Math.max(x, y, z);
    const newArr = [];
    const arr = [x, y, z];
    for (const element of arr) {
        if (element !== maxSide) {
            newArr.push(element);
        }
    }
    const hypotenuse = Math.sqrt((newArr[0] * newArr[0]) + (newArr[1] * newArr[1]));
    if (maxSide === hypotenuse) {
        return 'right angled'
    }
    else {
        return 'left angled'
    }
};


console.log(triangleType(5, 5, 5));
console.log(triangleType(5, 5, 8));
console.log(rightAngled(3, 4, 5));

module.exports = { triangleType, rightAngled };