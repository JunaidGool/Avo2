module.exports = function avo(avoString){

  var replace =  avoString.replace(/R/g, "");
  var avoArray = avoString.split(",");
  var avoCountResult = avoString.split(",").length;


  console.log( avoArray);

  return avoArray;

};
