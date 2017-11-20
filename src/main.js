(function() {

    function permutator (digitArray) {
        var results = [];
        var digitResults = [];

        function permute (arr, m) {
            m = m || [];
            if (arr.length === 0) {
                results.push(m);
            } else {
                for (var i = 0; i < arr.length; i++) {
                    var curr = arr.slice();
                    var next = curr.splice(i, 1);
                    permute(curr.slice(), m.concat(next));
                }
            }
        }

        permute(digitArray);

        for (var i = results.length - 1; i >= 0; i--) {
            digitResults.push(covertDigitArrayToInt(results[i]));
        }

        return digitResults.sort().filter(function(item, pos) {
            return digitResults.indexOf(item) == pos;
        });
    }

    function convertIntToDigitArray (number) {
        var digits = number.toString().split('');
        return digits.map(Number);
    }

    function covertDigitArrayToInt (arr) {
        return +arr.join('');
    }

    function mehdify(x) {
        // assuming that x is always a positive integer.
        var digits = convertIntToDigitArray(x);
        var permutations = permutator(digits);
        var numberIndex = permutations.indexOf(x);

        if (permutations[numberIndex + 1]) {
            ++numberIndex;
        }

        return permutations[numberIndex];
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
