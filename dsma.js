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

firstStringInSecond = function (string1, string2) {
  if (string2.indexOf(string1) !== -1) {
    return true;
  }
  //we need to handle circular variations of string 2
  var indices = [];
  //start at first char of string1
  var startChar = string1[0];
  //start index2 at where we first see startChar in string2
  var indexToAdd = string2.indexOf(startChar);

  while (indexToAdd != -1) {
    indices.push(indexToAdd);
    //2nd arg of indexOf let's us check for elements starting at a specific index. We don't want to check the index we just retrieved twice, so start at the next character.
    indexToAdd = string2.indexOf(startChar, indexToAdd + 1);
  }

  for (var j = 0; j < indices.length; j++) {
    var index2 = indices[j];

    for (var i = 0; i < string1.length; i++) {
      //we want to check every char of string1 against possible matching sequences of chars in string2
      if (string1[i] !== string2[index2 % string2.length]) {
        break;
      }
      index2++;
    }
    return true;
  }
  //if the program's gotten this far, it means that there were no matches, and all possible starting indices have been exhausted. :O
  return false;

};


