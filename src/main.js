(function() {

    function mehdify(x) {
        // Add your code here
        // console.log("Hello world!");
        // return -1;

        function swap(array, x, y) {
        	var aux = array[x];
        	array[x] = array[y];
        	array[y] = aux;
        }

        function sortLastN(array, n) {
        	var tmp = [];
        	var last = n;
            var i;
            for(i=n; i<array.length; i++)
                tmp.push(array[i]);
            
        	tmp.sort(function(a, b) { return a-b; });
        	tmp.reverse();

        	for(i=tmp.length; i>0; i--)
        		array[array.length-i] = tmp[i-1];
        }

        // extract digits from number
        var digits = [];
        while(x > 0) {
        	digits.push(parseInt(x%10));
        	x = parseInt(x/10);
        }
        digits.reverse();

        // check if digits are sorted
        var sorted = true;
        var i;
        for(i=digits.length-1; i>0; i--) {
        	if(digits[i] > digits[i-1]) {
        		sorted = false;
        		break;
        	}
        }

        if(sorted) {
        	return parseInt(digits.join(''));
        } else {
        	// from right -> left find first pair digits[i] > digits[j]
        	var found = false;
        	for(i=digits.length-1; i>=0; i--) {
        		if(!found) {
        			for(var j=i-1; j>=0; j--) {
        				if(digits[i] > digits[j]) {
        					swap(digits, i, j);
        					// check if last digits are ordered ascending
        					if(i-j > 1) {
        						sortLastN(digits, j+1);
        					} if(i-j == 1) {
        						if(digits[i] > digits[i+1])
        							swap(digits, i, i+1);
        					}
        					found = true;
        					break;
        				}
	        		}	
        		} else {
        			break;
        		}
        	}
        	return parseInt(digits.join(''));
        }
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();