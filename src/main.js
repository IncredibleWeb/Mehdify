(function() {

    function mehdify(x) {
        // Add your code here
        var arrayNumbers = x.toString().split('');
        var xLenght = arrayNumbers.length;
        var i = 0
        var j = 0

        // (*)-> Find the first digit that is  smaller than the digit next to it, if there one break the for and pass to next 
        // FOR loop from right side to the left 
        for (i = xLenght -1; i > 0; i--)
        {
            if (arrayNumbers[i] > arrayNumbers[i-1])
            { 
                break;
            }
        } 
    
        // (*)-> If all digits are in descending order return x, it's the biggest number possible

        if (i == 0)
        {
            return parseInt(x,10); 
        }

        // (*)-> If not, find the smallest digit in the right side that is greater than (i-1)
        else
        {    
            var y = arrayNumbers[i-1] 
            var smallest = i; 

            for (j = i+1; j < xLenght ; j++) {
                if (arrayNumbers[j] > y && arrayNumbers[j] < arrayNumbers[smallest])
                {
                    smallest = j; 
                }
            }
            
            // (*)-> Swap the digits
            swap(arrayNumbers, i - 1, smallest);

            // (*)-> Sort the rest of the digits  in ascending order
            var arrayNumberSorted = selectionSort(arrayNumbers, i, xLenght)
            return parseInt(arrayNumberSorted.join(''),10); 

        }

        // SWAP FUNCTION ARRAY
        function swap(items, firstIndex, secondIndex){
            var temp = items[firstIndex];
            items[firstIndex] = items[secondIndex];
            items[secondIndex] = temp;
        }

        // SELECTION SORT
        function selectionSort(data, index, len)
        {
            var nextSwap;  //the index of next value
            var temp;
            
            for(var i = index; i < len -1 ; i++)
            {
                nextSwap=i;
                for(var j = i + 1; j < len; j++)
                {
                    if( data[j] < data[nextSwap] ) 
                    {
                        nextSwap = j; 
                    }
                }

                temp = data[i];
                data[i] = data[nextSwap];
                data[nextSwap] = temp;
            
            }
            return data;
        }
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();