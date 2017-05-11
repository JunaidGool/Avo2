const pricePerDeal = require('../pricePerDeal');
const assert = require('assert');



describe('pricePerDeal function', function(){

    it('returns price per deal ', function(){

      assert.equal(3, pricePerDeal([{"quantity": "1", "price": "3"}]));
  });



    });




    var expectedDeals = [{"quantity": "1", "price": "3"},
                        {"quantity": "2", "price": "7"},
                        {"quantity": "3", "price": "10"},
                        {"quantity": "5", "price": "14.50"}];
