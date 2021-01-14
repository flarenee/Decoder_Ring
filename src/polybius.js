function polybius(input, encode = true) {
    // no input given
    if (!input) {
        return false;
    }
    const specialSymbolsAndNumbers = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?012356789]+/;
    if (encode === true && specialSymbolsAndNumbers.test(input)) {
        return false;
    }
    console.log ( input);
    const alphabet = [
        { char: 'a', pos: 11 },{ char: 'b', pos: 21 },{ char: 'c', pos: 31 },{ char: 'd', pos: 41 },{ char: 'e', pos: 51 },
        { char: 'f', pos: 12 },{ char: 'g', pos: 22 },{ char: 'h', pos: 32 },{ char: 'i', pos: 42 },{ char: 'j', pos: 42 },{ char: 'k', pos: 52 },
        { char: 'l', pos: 13 },{ char: 'm', pos: 23 },{ char: 'n', pos: 33 },{ char: 'o', pos: 43 },{ char: 'p', pos: 53 },
        { char: 'q', pos: 14 },{ char: 'r', pos: 24 },{ char: 's', pos: 34 },{ char: 't', pos: 44 },{ char: 'u', pos: 54 },
        { char: 'v', pos: 15 },{ char: 'w', pos: 25 },{ char: 'x', pos: 35 },{ char: 'y', pos: 45 },{ char: 'z', pos: 55 },
    ];
    let inputArray = input.toLowerCase().split('');
    let result = "";
    if (encode === true) {
        //encode input string
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === ' ') {
                result += " ";
            } else {
                let found = false;
                for (let j = 0; j < alphabet.length; j++) {
                    if (inputArray[i] === alphabet[j].char) {
                        result += alphabet[j].pos;
                        found = true;
                    }
                }
                if (found === false) {
                    result += inputArray[i];
                }
            }            
        }
    } else if (encode === false) {
        // decode input string
        for (let i = 0; i < input.length; i += 2) {
            if (input[i] === " ") {
                result += " "
                i -= 1
            } else {
                let decode = `${input[i]}${input[i+1]}`
                for (let q = 0; q < alphabet.length; q++) {
                    if (decode == alphabet[q].pos) {
                        if (alphabet[q].pos === 42 && alphabet[q].char === 'i') {
                            result += '(i/j)';
                            q++;
                        } else {
                            result += alphabet[q].char;
                        }
                    }
                }
            }
        }    
    } else {
        return false;
    }
    return result;
}

module.exports = polybius;
