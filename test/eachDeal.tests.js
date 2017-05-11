const allDeals = require('../allDeals');
const assert = require('assert');



describe('allDeals function', function(){

    it('return ', function(){

        var deals = "1 for 3, 2 for 7, 3 for 10, 5 for 14.50".split(',');

        var expectedDeals = [{"quantity": "1", "price": "3"},
                            {"quantity": "2", "price": "7"},
                            {"quantity": "3", "price": "10"},
                            {"quantity": "5", "price": "14.50"}];

        assert.deepEqual(expectedDeals, allDeals(deals));

    });

});
