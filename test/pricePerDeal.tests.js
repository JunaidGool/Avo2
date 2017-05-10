const pricePerDeal = require('../pricePerDeal');
const assert = require('assert');



describe('pricePerDeal function', function(){

    it('returns price per deal ', function(){

      assert.equal(3, pricePerDeal([{"quantity": "1", "price": "R3"}]));
  });



    });
