const avo = require('../avo');
const assert = require('assert');

describe('avo function', function(){

    it('returns a number within a string', function(){
        assert.equal(4, avo("1 for 3, 2 for 7, 3 for 10, 5 for 14.50.").length);
    });

});
