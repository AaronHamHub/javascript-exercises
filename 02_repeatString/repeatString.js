const repeatString = function(toRepeat, numRepeats) {
    if(numRepeats < 0)
    {
        return "ERROR";
    }
    
    let output = "";

    for(let i = 0; i < numRepeats; i++)
    {
        output += toRepeat;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
