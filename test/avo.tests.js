const avo = require('../avo');
const assert = require('assert');

describe('avo function', function(){

    it('returns a number within a string', function(){
        assert.equal(4, avo("1 for R3, 2 for R7, 3 for R10, 5 for R14.50."));
    });

});
