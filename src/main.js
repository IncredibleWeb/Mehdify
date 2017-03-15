(function () {
    /**
     * Return the next integer that cosists of digits on x and bigger than x.
     * @param {number} x Safe positive integer.
     * @returns {number} If it is possible to generate number that is bigger than x or x otherwise.
     */
    function mehdify(x) {
        if (inputIsNotValid(x)) {
            return x;
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
        const point = findArrayBreakingPoint(digits);
        if (point == -1) {
            return digitsToNumber(digits);
        }
        const smallest = findSmallestBiggerIndex(digits, point);
        const swappedDigits = swapIdexesInArray(point, smallest, digits);
        const {head, tail} = splitArrayAtIndex(swappedDigits, point);
        const sortedTail = tail.sort();
        const answer = digitsToNumber(head.concat(sortedTail));
        return answer;
    }

    /* Model Helper Function: start */
    function findArrayBreakingPoint(array) {
            const last = array.length -1;
            let left = last -1;
            let right = last;
            while(left >= 0) {
                if (array[left] < array[right]) {
                    return left;
                }
                left--;
                right--;
            }
            return -1;
        }

    function findSmallestBiggerIndex(array, point) {
        const len = array.length;
        let min = point + 1;
        for(let i = point + 1; i < len; i++) {
            if (array[i] < array[min] && array[min] > array[point]) {
                min = i;
            }
        }
        return min;
    }
    /* Model Helper Function: end */

    /* General Helper Functions: start */
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
            .split('')
            .map(function (digit) {
                return parseInt(digit);
            });
    }

    function digitsToNumber(digits) {
        let sum = 0;
        if (!(digits instanceof Array)) {
            return sum;
        }
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

    function digitsIsInAscendingOrder(digits) {
        const len = digits.length - 1;
        for (let i = 0; i < len - 1; i++) {
            if (digits[i] > digits[i + 1]) {
                return false;
            }
        }
        return true;
    }

    function splitArrayAtIndex(array, index) {
        var head = array.slice(0, index + 1);
        var tail = array.slice(index + 1);
        return { head, tail };
    }
    /* General Helper Functions: end */


    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
