function caesar(input, shift, encode = true) {
    if (!input || !shift || shift < -25 || shift > 25) {
        return false;
    }
    const LOWERCASE_A_CHAR_CODE = 97;
    const LOWERCASE_Z_CHAR_CODE = 122;
    const ALPHABET_LENGTH = 26;    
    let result = "";
    if (encode) {
        let stringToEncode = input.toLowerCase();
        for (let i = 0; i < stringToEncode.length; i++) {
            const code = stringToEncode.charCodeAt(i);
            if (code < LOWERCASE_A_CHAR_CODE || code > LOWERCASE_Z_CHAR_CODE) {
                result += stringToEncode[i];
                continue;
            }
            // if shifting to right then past Z return to beginning of alphabet;
            let shiftedCode = code + shift;
            if (shiftedCode > LOWERCASE_Z_CHAR_CODE) {
                shiftedCode -= ALPHABET_LENGTH;
            } 
            // if shifting to left then before A return to end of alphabet;
            if (shiftedCode < LOWERCASE_A_CHAR_CODE) {
                shiftedCode += ALPHABET_LENGTH;
            }
            result += String.fromCharCode(shiftedCode);
        }
    } else {
        //this is the decode logic
        let stringToDecode = input.toLowerCase();
        for (let i = 0; i < stringToDecode.length; i++) {
            const code = stringToDecode.charCodeAt(i);
            if (code < LOWERCASE_A_CHAR_CODE || code > LOWERCASE_Z_CHAR_CODE) {
                result += stringToDecode[i];
                continue;
            }
            let shiftedCode = code - shift;
            // if shifting to left then before A return to end of alphabet;
            if (shiftedCode < LOWERCASE_A_CHAR_CODE) {
                shiftedCode += ALPHABET_LENGTH;
            }  
            // if shifting to right then past Z return to beginning of alphabet;
            if (shiftedCode > LOWERCASE_Z_CHAR_CODE) {
                shiftedCode -= ALPHABET_LENGTH;
            } 
            result += String.fromCharCode(shiftedCode);
        }
    }
    console.log (!"");
    console.log (result);
    return result;    
}
module.exports = caesar;