const expect = require('chai').expect;

const polybius = require('../src/polybius.js');

describe('Polybius test', () => {
    // required tests 
    it('encode thinkful to Polybuis Square numbers', () => {
        const expected = '4432423352125413';
        const actual = polybius('thinkful');
        expect(actual).to.equal(expected);
    });
    it('test that spaces are maintained when encoding', () => {
        const expected = '3251131343 2543241341';
        const actual = polybius('hello world');
        expect(actual).to.equal(expected);
    });
    it('test that spaces are maintained when decoding', () => {
        const expected = 'hello world';
        const actual = polybius('3251131343 2543241341', false);
        expect(actual).to.equal(expected);
    });
    it('test that uppercase characters are converted to lowercase', () => {
        const expected = '4432423352125413';
        const actual = polybius('THINKFUL');
        expect(actual).to.equal(expected);
    });
    it('decode Polybuis Square numbers to thinkful', () => {
        const expected = 'th(i/j)nkful';
        const actual = polybius('4432423352125413', false);
        expect(actual).to.equal(expected);
    });
    // extra tests
    it('check if input is empty string', () => {
        const expected = false;
        const actual = polybius('');
        expect(actual).to.equal(expected);
    });
    it('check if input is undefined', () => {
        const expected = false;
        const actual = polybius();
        expect(actual).to.equal(expected);
    });
    it('test for non-alphabetical characters and return false', () => {
        const expected = false;
        const actual = polybius('hello!to@the#world');
        expect(actual).to.equal(expected);
    });
    it('testing for encode parametor not booleon', () => {
        const expected = false;
        const actual = polybius('thinkful', 'this is not a booleon');
        expect(actual).to.equal(expected);
    });
    it('testing for really long string of 200 characters', () => {
        const expected = false;
        const actual = polybius('abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&*()- abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&*()- abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&*()- abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&*()-');
        expect(actual).to.equal(expected);
    });
});
