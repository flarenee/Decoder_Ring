const expect = require('chai').expect;

const caesar = require('../src/caesar.js');

describe('Cassar test', () => {
    it('check if input is empty string or undefined', () => {
        const expected = false;
        const actual = caesar('', 3);
        expect(actual).to.equal(expected);
    }); 
    it('check if shift is undefined', () => {
        const expected = false;
        expect(
            caesar('thinkful')
        ).to.equal(expected);
    }); 
    it('check if shift is 0', () => {
        const expected = false;
        expect(
            caesar('thinkful', 0)
        ).to.equal(expected);
    }); 
    it('check if shift is less than 25', () => {
        const expected = false;
        expect(
            caesar('thinkful', -26)
        ).to.equal(expected);
    }); 
    it('check if shift is greater than 25', () => {
        const expected = false;
        expect(
            caesar('thinkful', 52)
        ).to.equal(expected);
    });
    it('converts thinkful to wklqnixo ', () => {
        const expected = 'wklqnixo';
        const actual = caesar('thinkful', 3);
        expect(actual).to.equal(expected);
    });
    it('converts wklqnixo to thinkful ', () => {
        const expected = 'thinkful';
        const actual = caesar('wklqnixo', 3, false);
        expect(actual).to.equal(expected);
    });
    it('handles spaces in my input', () => {
        const expected = 'd e f';
        const actual = caesar('a b c', 3);
        expect(actual).to.equal(expected);
    });
    it('handles non-alphabetical characters in my input', () => {
        const expected = 'd$e%f!';
        const actual = caesar('a$b%c!', 3);
        expect(actual).to.equal(expected);
    });
    it('handles uppercase characters', () => {
        const expected = 'def';
        const actual = caesar('ABC', 3);
        expect(actual).to.equal(expected);
    });
 });