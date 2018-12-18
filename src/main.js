(function() {

  /**
   * Swaps two elements in array by index
   *
   * @param indexA
   * @param indexB
   * @return {Array}
   */
  Array.prototype.swap = function(indexA, indexB) {
    var val = this[indexA];
    this[indexA] = this[indexB];
    this[indexB] = val;
    return this;
  };

  /**
   * Converts each string element in array to int
   *
   * @return {Array}
   */
  Array.prototype.parseInt = function(){
    return this.map(function(str){ return parseInt(str); });
  };

  function mehdify(x) {
    var xAsString = x.toString();
    var xAsArray = xAsString.split("").parseInt();
    var firstDigitIndex = null;

    // From the right side, find the digit smaller than the previous digit
    for (var i=xAsArray.length; i>0; i--) {
      if(xAsArray[i] > xAsArray[i - 1]){
        firstDigitIndex = i - 1;
        break;
      }
    }

    // We have found an index number is not e.g. 4321 (No Solution)
    if(firstDigitIndex !== null){
      // We get the rest of the array after the index so we can find the smallest number in there
      var arrayAfterIndex = xAsArray.slice(firstDigitIndex + 1, xAsArray.length);
      var secoundDigitIndexLengthCorrection = xAsArray.length - arrayAfterIndex.length;

      // Find the smallest number in the array greater than the first digit
      var smallestNumberInArray = arrayAfterIndex[0];
      var secondDigitIndex = secoundDigitIndexLengthCorrection;

      // The loop below uses the right side of the array, so we need to add the left side left to determine the target index
      for (var i=0; i<arrayAfterIndex.length; i++) {
        if(arrayAfterIndex[i] < smallestNumberInArray && arrayAfterIndex[i] > xAsArray[firstDigitIndex]){
          smallestNumberInArray = arrayAfterIndex[i];
          secondDigitIndex = i + secoundDigitIndexLengthCorrection;
        }
      }

      // Swap both indexes to make a larger number
      const resultArray = xAsArray.swap(firstDigitIndex, secondDigitIndex);
      // Lets sort the right side of the array so we get the next biggest number, and not just a larger number
      const leftSideOfArray = resultArray.slice(0, firstDigitIndex + 1);
      const rightSideOfArray = resultArray.slice(firstDigitIndex + 1, resultArray.length).sort(function(a, b){return a - b});
      // Finally, make new X by concating both sides of the array
      const newX = leftSideOfArray.concat(rightSideOfArray);
      // We now convert our array back to an integer, and return it
      return parseInt(newX.join(""));
    }

    return x;
  }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();