findMissingNums = function (stringToCheck) {
  var digits = "1234567890";
  var missingNums = [];

  for (var index in digits) {
    if (stringToCheck.indexOf(digits[index]) === -1) {
      //we know that this digit is missing, so add that to
      //list of missing nums
      missingNums.push(digits[index]);
    }
  }
  return missingNums;
};

var missingNums = findMissingNums("9899100101103104105");