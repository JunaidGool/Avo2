module.exports = function avo(avoString){

  // var avoString  = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
  var avoArray = avoString.split(",");
  var avoCountResult = avoString.split(",").length;

  console.log( avoArray);

  return avoArray;

};
