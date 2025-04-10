const reverseString = function(toReverse) {
    let output = toReverse.split("");

    for(let i = 0; i < output.length / 2; i++)
    {
        let temp = output[i];
        output[i] = output [output.length - i - 1];
        output[output.length - i - 1] = temp;
    }

    return output.join("");
};

// Do not edit below this line
module.exports = reverseString;
