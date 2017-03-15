(function () {
    function mehdify(x) {
        if (inputIsNotValid(x)) {
            return -1;
        }
        const answer = findAnswer(x);
        return answer;
    }

    /* Main logic function */
    function findAnswer(x) {
        const digits = numberToDigits(x);
        if (digitsIsInDescendingOrder(digits)) {
            return x;
        }

        if (digitsIsInAscendingOrder(digits)) {
            return digitsToNumber(swapLastTwoDigits(digits));
        }

        return solveGeneralCase(digits);
    }

    /* Core logic function */
    function solveGeneralCase(digits) {
        const len = digits.length;
        const last = digits[len - 1];
        let first = -1;
        for (let i = len - 1; i > 0; i--) {
            if (digits[i] < digits[last]) {
                first = i;
                break;
            }
        }
        if (first === -1) {
            return digitsToNumber(digits);
        }

        const swapedIndexesArray = swapLastTwoDigits(digits);
        const digitsWithSortedTail = sortArrayTail(first + 1, swapedIndexesArray);
        const answer = digitsToNumber(digitsWithSortedTail);
        return answer;
    }

    /* Helper functions: start */
    function numberIsPositiveSafeInteger(number) {
        return (Number.isFinite(number)) &&
            (Number.isInteger(number)) &&
            (number > 0) &&
            (number < Number.MAX_SAFE_INTEGER);
    }

    function inputIsNotValid(x) {
        return !numberIsPositiveSafeInteger(x) ? true : false;
    }

    function numberToDigits(number) {
        if (isNaN(number) || !numberIsPositiveSafeInteger(number)) {
            return [];
        }
        return number
            .toString(10)
            .split("")
            .map(function (digit) {
                return parseInt(digit);
            });
    }

    function digitsToNumber(digits) {
        let sum = 0;
        if (!(digits instanceof Array)) return sum;

        const last = digits.length - 1;
        for (let i = 0; i <= last; i++) {
            sum += digits[i] * Math.pow(10, last - i);
        }
        return sum;
    }

    function swapIdexesInArray(first, last, array) {
        if (!(first in array) || !(last in array)) {
            return array.slice();
        }
        let copy = array.slice();
        const temp = copy[first];
        copy[first] = copy[last];
        copy[last] = temp;
        return copy;
    }

    function swapLastTwoDigits(digits) {
        if (!(digits instanceof Array)) return [];
        const len = digits.length;
        if (len < 2) return digits.slice();

        return swapIdexesInArray(len - 1, len - 2, digits);
    }

    function digitsIsInDescendingOrder(digits) {
        const len = digits.length;
        if (len === 0) {
            return false;
        }
        for (let i = len - 1; i > 0; i--) {
            if (digits[i] > digits[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function sortArrayTail(start, array) {
        const head = array.slice(0, start - 1);
        const tail = array.slice(start);
        const sortedTail = tail.sort(function (a, b) { return b - a; });
        const digitsOfAnswer = head.concat(sortedTail);
        return digitsToNumber(digitsOfAnswer);
    }

    function digitsIsInAscendingOrder(digits) {
        const len = digits.length - 1;
        for (let i = 0; i < len - 1; i++) {
            if (digits[i] > digits[i + 1]) {
                return false;
            }
        }
        return true;
    }
    /* Helper functions: end */


    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
