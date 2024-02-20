const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('check if numbers are round', () => {
		assert.equal(calculateNumber(1, 3), 4);
	});
	it('check negative return', () => {
		assert.equal(calculateNumber(-1.3, -3.7), -5);
	});
	it('check if numbers round 2nd round', () => {
		assert.equal(calculateNumber(1, 3.7), 5);
	});
	it('check if numbers round 3rd round', () => {
		assert.equal(calculateNumber(1.2, 3.7), 5);
	});
	it('check if numbers round 4th round', () => {
		assert.equal(calculateNumber(1.5, 3.7), 6);
	});
});
