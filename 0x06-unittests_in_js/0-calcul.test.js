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
});
