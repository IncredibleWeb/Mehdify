(function () {

  function mehdify(x) {
    
    x = x;
    var arrVal = x.toString().split('');// split to array value
    var numArr = arrVal.map(function(x) {
      return Number(x);
    });//create array of numbers

    if (numArr.length === 1) {
      return x; // single digit integer
    }
    var copy = numArr.slice();
    var y;


    for (var i = copy.length - 1; i >= 0; i--) {
      if (copy[i] > copy[i - 1]) {
        var smallAndArr = getMinNumberAndArray(copy[i - 1], copy.slice(i));
        smallAndArr[1].push(copy[i - 1]);
       
        var firstPart = copy.slice(0, i - 1);


        firstPart.push(smallAndArr[0]);
        smallAndArr[1].sort();
        smallAndArr[1].map(function(each) {
          firstPart.push(each);
        })
        //console.log(firstPart)
        y = Number(firstPart.join(''));
        break;
      }
    }
    if (y > x) {
      return y;
    } else {
      return x;
    }
    //console.log("Hello world!");
    //return -1;
  }

  function getMinNumberAndArray(num, numArr) {
    var finalArr = [];
    var sorted = numArr.sort();
    for (var i = 0; i < sorted.length; i++) {
      if (sorted[i] > num) {
        finalArr.push(sorted[i]);
        sorted.splice(i, 1);
        break;
      }
    }
    finalArr.push(sorted);
    return finalArr;
  }

  // required to export for tests
  // DO NOT TOUCH
  var exports = module.exports;
  module.exports = mehdify;
})();