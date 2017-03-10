(function() {

    /**
     * Calculate number that is bigger or equals for argument `x`.
     * @param {number} x - The input number.
     * @return {number}
     */
    function mehdify(x) {
        if (!isInputValid(x)) {
            return -1;
        }

        return -1;
    }
    
    /**
     * Validate input number. Check if number belongs to positive save integer range.
     * @param {number} number - The number to check.
     * @return {boolean} `true` if number is ok and `false` f number is not valid.
     */
    function isInputValid(number) {
        return (Number.isFinite(number)) && (Number.isInteger(number)) && (number > 0) && (number < Number.MAX_SAFE_INTEGER);
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
