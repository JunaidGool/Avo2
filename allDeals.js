module.exports = function allDeals (avoArray){
  var allDeals = [];
  

  for (i = 0; i < avoArray.length; i++){

    var currentDeal = avoArray[i].split("for");


    var quantity = currentDeal[0].trim();
    var price = currentDeal[1].trim();



    allDeals.push({quantity: quantity,
                   price: price});

    console.log(allDeals);

  }
  return allDeals
};


  // allDeals.push(avoArray[i]);
