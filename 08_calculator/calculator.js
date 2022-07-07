const add = function(...nums) {
    return nums[0] + nums[1]
};

const subtract = function(...nums) {
    return nums[0] - nums[1]
};

const sum = function(arr) {
    let arrSum = 0;
    for (let i = 0; arr.length > i; i++){
        arrSum += arr[i];
    }
    return arrSum;
};

const multiply = function(arr) {
    let arrSum = 1;
    for (let i = 0; arr.length > i; i++){
        arrSum *= arr[i];
    }
    return arrSum;
};

const power = function(...nums) {
    return nums[0] ** nums[1];
};

const factorial = function(num) {
    if (num == 0) return 1;
    let arrSum = 1;
    const rangeArray =  Array.from({ length: num + 1}, (_, i) => i);
    for (let i = 1; rangeArray.length > i; i++){
        arrSum *= rangeArray[i];
    }
    return arrSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
