(function() {

    function mehdify(x) {
        // assuming that x is always a positive integer.

        var digits = x.toString().split('');
        var numberLength = digits.length;
        var result = x;
        var right = [];
        var left =[];

        if (numberLength >= 2) {
            for (var j = numberLength - 1; j >= 0; j--) {
                right.push(digits[j]);
                if (!digits[j - 1] || digits[j] > digits[j - 1]) {
                    break;
                }
            }

            left = digits.splice(0, digits.length - right.length);
            
            // If the entire number is in decreasing order, there's no bigger number to be made
            if (left.length === 0) {
                return x;
            }

            var lastDigitOfLeft = left[left.length - 1];
            var firstSmallestDigitIndexOnRight;
            
            for (var i = 0; i < right.length; i++) {
                if (lastDigitOfLeft < right[i]) {
                    firstSmallestDigitIndexOnRight = i;
                    break;
                }
            }
            
            left[left.length - 1] = right[firstSmallestDigitIndexOnRight];
            right[firstSmallestDigitIndexOnRight] = lastDigitOfLeft;
            
            result = +left.concat(right).join('');

        }

        return result;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();