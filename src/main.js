(function() {

    function mehdify(x) {
        var i = 0;
                    var output = [];
                    var sNumber = x.toString();
					
                    for (i = 0; i < sNumber.length; i += 1) {
                        var aa = sNumber.charAt(i);
                        var a = parseInt(aa);
                        output.push(a);
                    }
                   var y = printNextHighest(output);
				   return y;
       
    }
     function swap(array, a, b) {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    function sort(array, start, end) {
        while (start < end) {
            swap(array, start++, end--);
        }
    }

    function printNextHighest(array) {

        var len = array.length;
        var i = len - 1;

        while (i > 0 && array[i - 1] > array[i]) {
            i--;
        }

        if (i === 0) {
            sort(array, 0, len - 1);
            var y = printNumber(array);
            console.log(result);
            return y;
        }

        swap(array, i - 1, len - 1);
        sort(array, i, len - 1);
        var y = printNumber(array);
        return y;
    }

    function printNumber(array) {
        var result = array.join("");
        result = parseInt(result);
        return result;
    }
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
