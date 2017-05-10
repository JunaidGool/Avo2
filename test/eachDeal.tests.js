const eachDeal = require('../eachAvoDeal');
const assert = require('assert');



describe('eachDeal function', function(){

    it('return ', function(){
        assert.deepEqual(["1 for R3, 2 for R7, 3 for R10, 5 for R14.50."], eachDeal(["1 for R3, 2 for R7, 3 for R10, 5 for R14.50."]));
    });

});
