const maxPrice = require('../findMax');
const assert = require('assert');



describe('findMax function', function(){

    it('returns maxPrice ', function(){

      assert.equal(3.50, maxPrice([{"quantity": "2", "price": "7"}]));
  });



});
