module.exports = function pricePerDeal (allDeals){

  for (i=0; i<allDeals.length;i++){
    var quantity = allDeals[i].quantity;
    var price = allDeals[i].price;

    var pricePerDeal = price / quantity;

    console.log(pricePerDeal);

    return pricePerDeal;

  }
};
