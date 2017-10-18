(function() {

    function mehdify(x) {
        var array = x.toString().split("");
        var i = array.length - 1;
        // count from the right to find the position of the first integer not in a descending sequence
    	while (i > 0 && array[i - 1] >= array[i]) {
        		i--;
    	}
	
	    // integers in number are already in descending order
    	if (i <= 0) {
        		return x;
    	}
	
    	var j = array.length - 1;
	
	    // count from the right to find the position of the larget integer less than the value at i
    	while (array[j] <= array[i - 1]) {
        		j--;
    	}
	
    	var temp = array[i - 1];
    	array[i - 1] = array[j];
    	array[j] = temp;
	
    	j = array.length - 1;
	
    	while (i < j) {
        		temp = array[i];
        		array[i] = array[j];
        		array[j] = temp;
        		i++;
        		j--;
    	}
        return array.join("");
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();