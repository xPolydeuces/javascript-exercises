const caesar = function(text, s) {
    let result = "";
    for(let i = 0; text.length > i; i++){
        char = text[i];
        if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90 && char.charCodeAt(0) < 97){
            result += char;
            continue;
        } 
        if (char.toUpperCase() === char){
            result += String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
        }else{
            result += String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = caesar;
