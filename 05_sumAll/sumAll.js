const sumAll = function(num1, num2) {

    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(num1 < 0 || num2 < 0) return "ERROR";

    // Assume num1 is bigger, if we are wrong then swap them
    let bigger = num1;
    let smaller = num2;
    if (num1 < num2)
    {
        bigger = num2;
        smaller = num1;
    }

    let sum = 0;
    for (let i = smaller; i <= bigger; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
