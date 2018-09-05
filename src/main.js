(function() {

    function swap(a, i, j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    
    function findNext(a) {
        var i;
    
        // Find the first digit, starting  from the right, where its left-digit is less than the right
        for (i = a.length - 1; i > 0; i--) {
            if (a[i] > a[i - 1]) {
                break;
            }
        }
    
        // If no such digit is found, then all digits are in descending order means there cannot be a greater number with same set of digits
        if (i == 0) {
            return a;
        }
    
        var x = a[i - 1];
        var min = i;
    
        // Find to the right the smallest digit larger than digit at i
        for (var j = i + 1; j < a.length; j++) {
            if (a[j] > x && a[j] < a[i]) {
                min = j;
            }
        }
    
        // Swap the digits
        swap(a, i - 1, min);
    
        // Sort the digits after i in ascending order
        return a.slice(0, i).concat(a.slice(i, a.length).sort());
    }
    
    function mehdify(x) {
        // https://stackoverflow.com/a/9368616/3286487
        var digits = ("" + x).split("");
    
        mehdified = findNext(digits)
    
        var result = parseInt(mehdified.join(""));
        return result;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();