(function() {

    /**
     * Calculate number that is bigger or equals for argument `x`.
     * @param {number} x - The input number.
     * @return {number}
     * * -1 if number is not valid or return number that is equarls or greater `x`
     */
    function mehdify(x) {
        if (inputIsNotValid(x)) return -1;

        const answer = findAnswer(x);
        return answer;
    }
    /**
     * Check is input is valid acording business rules.
     * @param {nunber} x 
     */
    function inputIsNotValid(x) {
        return !numberIsPositiveSafeInteger(x) ? true : false;
    }

    function findAnswer(x) {
        const digits = x.toString(10).split("").map(function(t){return parseInt(t)});
        if (digitsIsInDescendingOrder(digits)) {
            return x;
        }

        if (digitsIsInAscendingOrder(digits)) {
            return getNextFromAscendingOrderNumber(digits);
        }
    }

    function digitsIsInDescendingOrder(digits) {
        const len = digits.length - 1;
        for(var i = len - 1; i > 0; i--) {
            if(digits[i] > digits[i - 1]) {
                return false;
            }
        }
        return true;
    }

    //TODO: fix logic
    function digitsIsInAscendingOrder(digits) {
        const len = digits.length - 1;
        for(var i = 0; i < len -1; i++) {
            if(digits[i] > digits[i + 1]) {
                return false;
            }
        }
        return true;
    }


    getNextFromAscendingOrderNumber

    /**
     * Check if given number belongs to positive integer safe range.
     * @param {number} number - The number to check.
     * @return {boolean} `true` if number is positive integer and safe and `false` otherwise.
     */
    function numberIsPositiveSafeInteger(number) {
        return (Number.isFinite(number)) &&
               (Number.isInteger(number)) &&
               (number > 0) &&
               (number < Number.MAX_SAFE_INTEGER);
    }


/**
 * How it works
 * 2. algorithm
 * 3. validate answer/output
 * 
 * 2. algorithm
 * 2.1 check if it decendent order
 * 2.2 check if in indendent order
 * 2.3 modify number
 * 
 * use array if digits
 */
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
