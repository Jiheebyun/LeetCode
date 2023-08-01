/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    
    return arr.sort( (a,b)=>{return fn(a) - fn(b)} );
    
};


/*
Ascending order /오름차순
************************************************************
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
************************************************************


Descending order/ 내림차순
************************************************************
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => b - a);
console.log(numbers); // [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
************************************************************



*/