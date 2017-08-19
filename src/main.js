(function() {

    // return the next biggest integer using the same digits
    function mehdify(x) {

        x = Array.from(x.toString()).map(Number);   // convert integer to an array of digits

        // find pilot (the element just before the decreasing sequence at the end of the array)
        var i = x.length - 1;
        while (x[i-1] > x[i]) {
            i--;
            if (i < 1) {
                return parseInt(x.join(""));   // whole the sequence is decreasing so there is no larger integer
            }
        }
        var pilot = x[i-1];

        // take the decreasing sequence at the end of the array and reverse it
        var y = x.slice(i, x.length);
        y.reverse();

        // find position of the element in the reversed sequence, which will be swaped with the pilot
        var j = 0;
        while (j < y.length && y[j] <= pilot) {
            j++;
        }
        // combine resulting parts of the integer together
        x = x.slice(0,i-1).concat(y.slice(j,j+1), y.slice(0,j), pilot, y.slice(j+1, y.length));
        return parseInt(x.join(""));
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
