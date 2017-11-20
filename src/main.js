(function() {

    function mehdify(x) {
        // assuming that x is always a positive integer.

        var digitis = x.toString().split('');
        var numberLength = digitis.length;
        var result = x;

        if (numberLength >= 2) {
            for (var j = numberLength; j >= 0; j--) {
                for (var i = numberLength - 2; i >= 0; i--) {
                    var temp = digitis[i];
                    digitis[i] = digitis[i + 1];
                    digitis[i + 1] = temp;
                    var num = +digitis.join('');

                    if (num >= x) {
                        result = num;
                        j = 0;
                        break;
                    }
                }   
            }
        }

        return result;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();