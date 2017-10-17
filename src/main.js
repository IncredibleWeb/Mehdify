(function() {

    // http://www.openjs.com/scripts/strings/setcharat_function.php
    String.prototype.setCharAt = function(idx, chr) {
        return (idx > this.length - 1) ? this : this.substr(0, idx) + chr + this.substr(idx + 1);
    };

    function getLeftDigits(val, pivot) { 
        var numDigits = val.length - (pivot + 1);
        var digits = new Array(numDigits);

        for (var i = 0; i < digits.length; i++) {
            digits[i] = val.charAt(i + (pivot + 1));
        }

        digits = digits.reverse(); 

        return digits;
    }

    function digitCanBeSwitched(numbers, pivot) {
        return numbers.charAt(pivot) < numbers.charAt(pivot + 1);
    }

    function mehdify(x) {
        // 1. Check input
        if (typeof x == 'undefined') {
            throw 'x is undefined!';
        }

        // 2. Convert to string
        var val = '' + x;

        //3. Scan from right to left, finding a digit > pivot.
        var beforeEnd = val.length -2;
        var pivot = beforeEnd;

        for (pivot; pivot >= 0; pivot--) {

            if (digitCanBeSwitched(val, pivot)) {

                // Get numbers left of pivot
                var digits = getLeftDigits(val, pivot);
                // Value to compare with
                var oldPivotVal = val.charAt(pivot);

                for (var i = 0; i < digits.length; i++) {

                    if (digits[i] > oldPivotVal) {
                        // Swap pivot value with the larger number found
                        val = val.setCharAt(pivot, String(digits[i]));
                        // Overwrite old larger value with smaller one
                        digits[i] = oldPivotVal;
                        break;
                    }

                }

                // Replace with values from sorted array
                for (var i = 0; i < digits.length; i++)
                    val = val.setCharAt(i + (pivot + 1), String(digits[i]));

                break;

            }

        }

        // If number is big already just return
        return parseInt(val);
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
