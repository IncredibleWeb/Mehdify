(function() {

    function mehdify(x) {
        // Add your code here
        //Make the array from the given number
        var d = x.toString().split('');

        // from the  most right digit find the first smaller digit
        var p = -1;
        for (var i = d.length - 1; i > 0; i--) {
            if (+d[i] > +d[i - 1]) {
                p = i - 1;
                break;
            }
        }

        // if a smaller digit is found countinue further
        if (p != -1)
        {
            var ar = d.splice(p);            
            var v = ar.splice(0, 1)[0];
             
            var y = null, min = null;
            for (var i = 0; i < ar.length; i++) {
                if (ar[i] > v) {
                    if (y == null || ar[i] < y) {
                        y = ar[i];
                        min = i;
                    }
                }
            }
        }
        if (min == null) return x;

        ar.splice(min, 1);
        ar.push(v);
        ar = ar.sort();
       
        return +d.concat([y]).concat(ar).join('');;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();