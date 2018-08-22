(function () {

    function mehdify(num) {
        return next(num);

        /**
         * Find the next number from specified digits.
         * Scenarios: 
         * 1. 765321 => results 765321. An descending ordered number so that we cannot find out the next number.
         * 2. 123567 => results 123576, possible swapping: '6' and '7' An ascending orderd number, just swap 2 last digits to find out the next number.
         * 3. 245987 => results: 247589. swapping '5' and '7' and sort to get the minimum "partial" number.
         * 4. 12342 => results 12423, swapping '4' and '3' and sort to get the minimum "partial" number.
         * 
         * Possible algorithm:
         * The next number will be created by swapping 2 first smaller continuous digits and sort the rest of digits.
         * First, finding the first digit that is smaller than the next digit (from the right of the number), let say position X.
         * Next, findout the smallest digit from current position X but greater than digit[X], let say Y.
         * Then, swap X and Y values and order the remain right digits. 
         * Finally, merge into current number.
         * @param integer number to find next greater number.
         */
        function next(num) {
            if (isNaN(num) || num < 0) {
                return num;
            }

            var digits = Array.from(String(num), Number);
            var i = 0;
            for (i = digits.length - 1; i > 0; i--) {
                if (digits[i] > digits[i - 1]) {
                    break;
                }
            }
            if (i == 0) {
                return num;
            }

            var min = indexOfMinGreater(digits, i - 1);
            swap(digits, i - 1, min);
            //perform sorting the rest of digits only.
            var rdigits = digits.slice(i).sort();

            for (var j = 0; j < rdigits.length; j++) {
                digits[j + i] = rdigits[j];
            }

            return digits.join('');
        }

        /**
         * Find the position that has value greater than the current value's position but it is minium value.
         * Samples: 3,6,9,4 => current value = 3, the next minimum greater should be 4, not 6 or 9.
         * @param array an array of numbers to search
         * @param integer index to start search.
         */
        function indexOfMinGreater(elements, i) {
            var current = elements[i];
            var min = i + 1;
            for (var j = min; j < elements.length; j++) {
                if (elements[j] > current && elements[j] < elements[min]) {
                    min = j;
                }
            }
            return min;
        }

        /**
         * Swaps 2 elements's values of a specified integer array.
         * @param array array of numbers that need to swap.
         * @param integer x position to swap.
         * @param integer y position to swap.
         */
        function swap(elements, x, y) {
            var t = elements[x];
            elements[x] = elements[y];
            elements[y] = t;
        }
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();