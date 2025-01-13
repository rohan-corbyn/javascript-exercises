const fibonacci = function(index) {
    
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (index == 0) return 0;
    if (index < 0) return "OOPS";
    
    let firstPrev = 1;
    let secondPrev = 0;

    for(let i = 2; i <= index; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
