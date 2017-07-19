(function() {

    function mehdify(x) {
        // Add your code here
        var array = x.toString().split('');
        var position = getPosition(array);
        var result = getMehdifiedNumberByPosition(array, position);
        return result;
    }

    function getPosition(array)
    {
        var position = array.length - 1;

        for (; position > 0; position--)
        {
            if(array[position] > array[position - 1])                    
                return position - 1;
                
        }
        return -1;
    }

    function getMehdifiedNumberByPosition(array, position)
    {
        var startArray = [];
        var endArray = [];
        var transformedEndArray = [];
        var divider = array[position];
        var dividerNotPushed = true;

        if (position === -1)
            return Number(array.join(''));
        
        for (var i = 0; i < array.length; i++)
        {
            if(i < position)
                startArray.push(array[i])

            if(i > position)
                endArray.push(array[i])
        }

        transformedEndArray.push(0);

        for (var i = endArray.length - 1; i >= 0; i--)
        {               
            if(divider < endArray[i] && dividerNotPushed) {
                transformedEndArray[0] = endArray[i];
                transformedEndArray.push(divider);
                dividerNotPushed = false;
            }                    
            else 
                transformedEndArray.push(endArray[i]);
            
        }

        return Number(startArray.join('') + transformedEndArray.join(''));

    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();