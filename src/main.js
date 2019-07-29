(function() {

  function mehdify(x) {
    var str = x + '';
    var strLength = str.length;
    if (strLength == 1) return +str;

    for (var i = strLength - 2; i >= 0; i--) {
      for (var j = strLength - 1; j >= i; j--) {
        for (var k = j - 1; k >= i; k--) {
          if (str[j] > str[k]) {
            var helper = swap(str, j, k);

            return +(helper.slice(0, k + 1) + helper.slice(k + 1).split('').sort().join(''));
          }
        }
      }
    }

    return +str;
  }

  function swap(str, i, j) {
    str = str.split('');
    var temp = str[i];

    str[i] = str[j];
    str[j] = temp;

    return str.join('');
  }
  
  // required to export for tests
  // DO NOT TOUCH
  var exports = module.exports;
  module.exports = mehdify;
})();