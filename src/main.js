(function() {
	
    function mehdify(x) {

	    var numArray = x.toString().split('');  
		var s = -1;   
	
		  for (var i = numArray.length-1; i > 0; i--) {
			if (+numArray[i] > +numArray[i-1]) {
			  s = i-1;
			  break;
			}
		  }
  
		  if (s == -1) 
			  return x;    
    
		  var cahngePart = numArray.splice(s);   
		  var pivot = cahngePart.splice(0, 1)[0]; 
		  
		  var efNumber = null, efNumberindex = null;
		  for (var i = 0; i < cahngePart.length; i++) {
			if (cahngePart[i] > pivot) {
			  if (efNumber == null || cahngePart[i] < efNumber) {
				efNumber = cahngePart[i];
				efNumberindex = i;
			  }
			}
		  }

		  if (efNumberindex == null) 
			  return x;
		  
		  cahngePart.splice(efNumberindex, 1);
		  cahngePart.push(pivot);
		  cahngePart = cahngePart.sort();
		  
		  var result = +numArray.concat([efNumber]).concat(cahngePart).join('');
		  if (result < x) 
			  return x;
		  
		return result;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();