module.exports = function pricePerDeal (allDeals){


  var price = allDeals[1];
  var quantity = allDeals[0];

  var pricePerDeal = price / quantity;

  console.log(pricePerDeal)

  return pricePerDeal

};
