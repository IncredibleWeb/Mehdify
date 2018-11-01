(function() {

    let answer;     // keep Result here
    let input;      // keep X here

    // return true when answer is found
    function search(fixed, variate) {
        // short enumeration: do not deep if fixed start part is less than X
        if (fixed.length > 0) {
         let inputStart = (String(input).substring(0, fixed.length));
         if (fixed < inputStart) return false;
        }
        // recursive digits variation
        if (variate.length > 1) {
            // enumerate all possible numbers, started with `fixed`
            for (let i = 0; i < variate.length; i++) {
                let shorterVariate = variate.substring(0, i) + variate.substring(i + 1);
                let found = search(fixed + variate[i], shorterVariate);
                if (found) return true;
            }
        } else {
            // nothing to variate: get a number from string
            let number = Number(fixed + variate);
            // looking for a number that is greater than X, and it should be lowest
            if (number > input && (number <= answer || answer == input)) {
                console.debug("!!", number, input, answer);
                answer = number;
                // fist found number is the result
                return true;
            }
            console.debug(number, input, answer);
        }
    }

    function mehdify(x) {
        // sort digits to speed up search
        let s = String(x).split("").sort().join("");

        answer = x;     // by default, X
        input = x;
        search("", s);  // enumerate all the numbers built from X digits

        //console.log("Result:", answer);

        return answer;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();