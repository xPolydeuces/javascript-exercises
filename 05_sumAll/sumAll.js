const sumAll = function(start, stop) {
    for (let i = 0; arguments.length > i; i++){
        if (typeof arguments[i] != "number" || arguments[i] < 0){
            return "ERROR";
        }
    }
    if(start > stop){
        [start, stop] = [stop, start];
    }
    const rangeArray =  Array.from({ length: (stop - start) / 1 + 1}, (_, i) => start + i);
    let sum = 0;
    for (let i = 0; rangeArray.length > i; i++){
        sum+= rangeArray[i];
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
