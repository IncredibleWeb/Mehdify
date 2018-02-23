(function() {

    function mehdify(x) {
        var arr = x.toString().split("");
        for (i = arr.length - 1; i >= 0; i--) {
            for (j = i - 1; j >= 0; j--) {
                var a = arr.slice(0, j).join("");
                var b = arr[i];
                var c = arr.slice(j, i).concat(arr.slice(i + 1)).sort().join("");
                var result = parseInt(a + b + c);
                if (result > x) return result;
            }
        }
        return x;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();