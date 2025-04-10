const removeFromArray = function(array, ...args) {
    let output = [];
    for(let i = 0; i < array.length; i++)
    {
        let shouldAddElement = true;
        for(let j = 0; j < args.length; j++)
        {
            if (array[i] === args[j])
                {
                shouldAddElement = false;
                break;
            }
        }
        if(shouldAddElement)
        {
            output.push(array[i]);
        }
    }

    console.log(output.toString());

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
