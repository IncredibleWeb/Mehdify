var assert = require('assert');
var mehdify = require('../dist/script.min.js');

describe('mehdify', function () {
    it('should return the next biggest integer using the same digits', function () {
        assert.equal(32214, mehdify(32142));
        assert.equal(491, mehdify(419));
        assert.equal(712, mehdify(271));
        assert.equal(81, mehdify(18));
    });
    it('should return X when there is no larger integer', function () {
        assert.equal(542, mehdify(542));
        assert.equal(321, mehdify(321));
        assert.equal(9100, mehdify(9100));
    });
});