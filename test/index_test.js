const assert = require('assert');
const Calculate =  require('../index.js');

describe('Calculate', () => {
  describe('.add', () => {
    it('returns the value of two numbers added together', () => {
      //Set up
       const expected = 5;
      //Exercise
       const result = Calculate.add(2,3);
      //Verify
       assert.ok(result == expected);
    });
  });
  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      //Set up
       const expected = 1;
      //Exercise
       const result = Calculate.subtract(2,3);
      //Verify
        assert.ok(result ==expected);
    });
  });
  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
        //Set up
        const expected = 6;
        //Exercise
        const result = Calculate.multiply(2, 3);
        //Verify
        assert.ok(result == expected);
    });
  });
  describe('.divide', () => {
    it('returns the first number divided by the second number', () => {
        //Set up
        const divident = 10;
        const divisor = 5;
        const expected = 2;
        //Exercise
        const result = Calculate.divide(10, 5);
        // Verify
        assert.equal(result, expected);
    });
    it('throws an error when the divisor is 0', () => {
        //Set up
        const expected = Error;
        //Exercise
        const result = () => {
          Calculate.divide(10, 0);
        };
        //Verify
        assert.throws(result, expected);
    });
  });
  describe('.absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
        //Set up
        const expected = 3;
        //Exercise
        const result = Calculate.absoluteValue(-3);
        //Verify
        assert.equal(result,expected);
    });
  });
});
