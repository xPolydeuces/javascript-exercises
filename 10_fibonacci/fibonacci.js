const fibonacci = function(num) {
    if (typeof num == "string"){
        num = parseInt(num);
    }
    if(num < 0) return "OOPS";
    let num1 = 1, num2 = 1;
    let temp;
    for (let i = 1; num > i; i++){
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;
    }
    return num1;
};

console.log(fibonacci(15))

// Do not edit below this line
module.exports = fibonacci;
