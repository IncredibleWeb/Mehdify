var assert = require('assert');
var mehdify = require('../dist/script.min.js');

describe('mehdify', function() {
    it('should return the next biggest integer using the same digits', function() {
        assert.equal(32241, mehdify(32214));
        assert.equal(491, mehdify(419));
        assert.equal(712, mehdify(271));
        assert.equal(81, mehdify(18));
        assert.equal(123465, mehdify(123456));
        assert.equal(2113456, mehdify(1654321));
        assert.equal(6521345, mehdify(6515432));
        assert.equal(6542335, mehdify(6535432));
        assert.equal(65211345, mehdify(65154321));
        assert.equal(2134556, mehdify(1655432));
        
    });
    it('should return X when there is no larger integer', function() {
        assert.equal(542, mehdify(542));
        assert.equal(321, mehdify(321));
        assert.equal(9100, mehdify(9100));
        assert.equal(654321, mehdify(654321));
    });
});