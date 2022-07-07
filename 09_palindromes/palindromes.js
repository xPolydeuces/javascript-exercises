const palindromes = function (str) {
    const strToArr = str.toLowerCase().split('');
    let newArr = [];
    for (let i = 0; strToArr.length > i; i++){
        if (![' ', ',', '.', '!'].includes(strToArr[i])){
            newArr.push(strToArr[i]);
        }
    }
    const arrToStr = newArr.join('');
    const reversedStr = newArr.reverse().join('');
    return arrToStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
