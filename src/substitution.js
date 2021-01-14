function substitution(input, alphabet, encode = true) {
    if (!input || !alphabet || alphabet.length != 26) {
        return false;
    }
    // test if alaphabet characters are unique
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (i === j) { continue; }
            if (alphabet[i] === alphabet[j]) { return false; }
        }
    }
    const LOWERCASE_A_CHAR_CODE = 97;
    const LOWERCASE_Z_CHAR_CODE = 122;
    const SPACE_CHAR_CODE = 32;
    let stringToConvert = input.toLowerCase();
    let result = '';
    let code = '';
    for (let i = 0; i < input.length; i++) {
        const testChar = stringToConvert.charCodeAt(i);
        if (testChar === SPACE_CHAR_CODE) { continue };
        if (testChar < LOWERCASE_A_CHAR_CODE || testChar > LOWERCASE_Z_CHAR_CODE) {
            return false;
        }
    }
    if (encode === true) {
        // this is the encode logic
        for (let i = 0; i < stringToConvert.length; i++) {
            if (stringToConvert[i] === ' ') {
                result += ' ';
                continue;
            } else {
                code = stringToConvert.charCodeAt(i) - 97;
                result += alphabet[code];
            }
        }
    } else if (encode === false) {
        //this is the decode logic
        let stringToConvert = input.toLowerCase();
        console.log (stringToConvert);
        for (let i = 0; i < stringToConvert.length; i++) {
            code = stringToConvert[i];
            if (stringToConvert[i] === ' ') {
                result += " ";
                continue;
            } else {
                const decodedChar = alphabet.indexOf(code) + 97;
                result += String.fromCharCode(decodedChar);
            }
        }
    } else {
        // this is unacceptable
        return false;
    }
    return result;    
}

module.exports = substitution;
