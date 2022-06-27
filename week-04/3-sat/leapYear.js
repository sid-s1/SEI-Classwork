// can also do this with two if statements that return true;
// and one return false at the end of the function
function checkLeapYear (year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if (year % 4 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

// ! > && > || 

function checkLeapYearPt2 (year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}

function checkLeapYearPt3 (year) {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}