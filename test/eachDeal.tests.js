const allDeals = require('../allDeals');
const assert = require('assert');



describe('allDeals function', function(){

    it('return ', function(){

        var deals = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50".split(',');

        var expectedDeals = [{"quantity": "1", "price": "R3"},
                            {"quantity": "2", "price": "R7"},
                            {"quantity": "3", "price": "R10"},
                            {"quantity": "5", "price": "R14.50"}];

        assert.deepEqual(expectedDeals, allDeals(deals));

    });

});
