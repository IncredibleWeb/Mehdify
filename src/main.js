(function() {

  function mehdify(number) {
		// Add your code here
		console.log("START");
		
		let result = number;

		let arrayRepresentationOfGivenNumber = number.toString().split('').map(Number); 
		
		let digits = number.toString().split('');
		console.log('digits....' + arrayRepresentationOfGivenNumber);

		for (i = arrayRepresentationOfGivenNumber.length -1; i >= 0; i--) {
			
			if (arrayRepresentationOfGivenNumber[i] > arrayRepresentationOfGivenNumber[i-1]){
				
				let firstIndex = i-1;
				console.log('index of the first element to be swapped, x : ' + firstIndex);
							
				let secondIndex = findSecondIndex(arrayRepresentationOfGivenNumber);
				console.log('index of the second element to be swapped, y : ' + secondIndex);

				//swap elements
				let	swappedElementsArray = swapElements(arrayRepresentationOfGivenNumber, firstIndex, secondIndex);
				console.log('array with swapped elements, yet to be sorted: ' + swappedElementsArray);

				//sort the subarray starting at swappedElementsArray[x]
				resultArray = sortSubArrayOf(arrayRepresentationOfGivenNumber, swappedElementsArray, firstIndex);
					
				//transform the array back into a number
				result = resultArray.join('');
																			
				break;
			}
		}
		
		console.log('result.... ' + result);		
		return result;
  }
	
	function sortSubArrayOf(originalArray, arrayToBeSorted, firstIndex){		
		let subarray = arrayToBeSorted.slice(firstIndex + 1); 

		let subarraySorted = subarray.sort(function(a,b){return a - b})

		let firstArray = originalArray.slice(0, firstIndex + 1);
		
		let result = firstArray.concat(subarraySorted);
		
		return result;
	}
	
	function findSecondIndex(originalArray){
		let result = -1;
		
		let subarray = originalArray.slice(i); 
		console.log('subarray :' + subarray);
								
		let secondOne = findTheIndexOfTheSmallestIntegerBiggerThanATreshold(originalArray[i-1], subarray);
		console.log('secondOne.... '+secondOne);

		result = subarray.indexOf(secondOne) + (originalArray.length - subarray.length);
		console.log('secondIndex.... ' + result);
		
		return result;
	}
	
	function swapElements(intArray, firstIndex, secondIndex){
		let buffer = intArray[firstIndex];
		
		intArray[firstIndex] = intArray[secondIndex];
		intArray[secondIndex] = buffer;
				
		return intArray;
	}
	
	function findTheIndexOfTheSmallestIntegerBiggerThanATreshold(treshold, intArray){
		result = 10;
		
		for (i = 0; i < intArray.length; i++) {
			if (intArray[i] < result && intArray[i] > treshold){
				result = intArray[i];
			}
		}
		
		return result;
	}
	    
  // required to export for tests
  // DO NOT TOUCH
  var exports = module.exports;
  module.exports = mehdify;
})();