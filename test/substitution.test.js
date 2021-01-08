const expect = require('chai').expect;

const substitution = require('../src/substitution.js');

describe('substitution test', () => {
    it('spaces should be maintained', () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });
    it('the alphabet parameter must be string of exactly 26 characters or return false', () => {
        const expected = false;
        const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibe');
        expect(actual).to.equal(expected);
    });
    it('all of the characters in the alphabet parameter must be unique or return false', () => {
        const expected = false;
        const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibex');
        expect(actual).to.equal(expected);
    });
    it('encode thinkful to use cipher key', () => {
        const expected = 'jrufscpw';
        const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });
    it('decode cipher key to thinkful', () => {
        const expected = 'thinkful';
        const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false);
        expect(actual).to.equal(expected);
    });
    it('test for encode parametor not booleon', () => {
        const expected = false;
        const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev', 'this is not a booleon');
        expect(actual).to.equal(expected);
    });
    it('test for no cipher key', () => {
        const expected = false;
        const actual = substitution('thinkful');
        expect(actual).to.equal(expected);
    });
    it('test 0 to 9 is present in input, if so then return false ', () => {
        const expected = false;
        const actual = substitution('thinkful9', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });
    it('test if special characters are present, if so then return false ', () => {
        const expected = false;
        const actual = substitution('thinkful?', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });
 });