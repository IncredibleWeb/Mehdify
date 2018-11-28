(function() {
    
        var c = x;
		var d = x.toString().split('').map(function (x) { return parseInt(x);}).sort();
		var m = parseInt(d.reverse().join('')) + 1;

		while (true) {
			c++;
			var i = c.toString().split('').map(Number).sort().reverse();
			if (d.join('') === i.join('')) {
				return c;
			} else if ( c === m ) {
				return x;
			}
		}
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
