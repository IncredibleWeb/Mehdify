(function() {

    function mehdify(x) {
        // Add your code here

        // 1)Seperate number to char
        var ar = x.toString().split('');
        var n = ar.length;

        var i;

        // 2.1) If all digits sorted in descending order, then output is always x
        for (i = n - 1; i > 0; i--) 
        {
            if (ar[i] > ar[i - 1]) {
                break;
            }
        }

        if (i == 0) 
        {
            // 2.2) If all digits sorted in descending order, then output is always x
            return x;
        } 
        else
        {
            var x = ar[i - 1], min = i;
             
            // 3) Search the smallest digit on right side of the ar (i-1), this digit that is greater than number[i-1]
            for (var j = i + 1; j < n; j++) 
            {
                if (ar[j] > x && ar[j] < ar[min]) 
                {
                    min = j;
                }
            }
 
            // 4) Swap the found smallest digit with number[i-1]
            swap(ar, i - 1, min);
 
            // 5) Sort the digits after (i-1) in ascending order
            sort(ar, i, n)
            
            // 6)Concatenate char to string and convert to the number
            return parseFloat(ar.join(''));            
        }
    }
    
    function swap(ar, i, j) 
    {
        var temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
    }
    
    function sort(arr, idx, len) {
        // Implement selection sort
        for (var i = idx; i < len; i++) {
            var indexOfMin = i;
        
            for (var j = i+1; j <arr.length; j++) {
              if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
              }
            }
        
            if (indexOfMin !== i) {
                var lesser = arr[indexOfMin];
              arr[indexOfMin] = arr[i];
              arr[i] = lesser;
            }
          }
        
          return arr;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();