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

swapTwoWords = function (twoWords) {
  var words = twoWords.split(" ");

  //concatenate second word with a comma and
  //first word
  return words[1] + ", " + words[0];
};

/*
  Let's do this the REG EX way:
  http://stackoverflow.com/questions/8688878/extracting-words-in-sentence-with-regex?rq=1
*/
swapTwoWords2 = function (twoWords) {
  twoWords.replace(/^(.*)\s+(\w+)$/, "$2, $1");
};

/*
rollyString = function (stringA, stringB) {

};
*/