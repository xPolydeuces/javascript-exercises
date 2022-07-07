const removeFromArray = function(...args) {
    const oldArray = args[0];
    let newArray = [];
    for (let i = 0; oldArray.length > i; i++){
        if (!args.includes(oldArray[i])){
            newArray.push(oldArray[i])
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
