(function() {

    function mehdify(x) {
        var permutations = [];
        var permute = function(arr, m) {
            if (m === void 0) { m = []; }
            if (arr.length === 0) {
                permutations.push(parseInt(m.join("")));
            } else {
                for (var i = 0; i < arr.length; i++) {
                    var curr = arr.slice();
                    var next = curr.splice(i, 1);
                    permute(curr.slice(), m.concat(next));
                }
            }
        };
        //generate permutations
        permute(x.toString().split(""));

        //get next highest value
        return permutations.sort().reduce(function(acc, val) { return acc <= x ? val : acc; });
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();