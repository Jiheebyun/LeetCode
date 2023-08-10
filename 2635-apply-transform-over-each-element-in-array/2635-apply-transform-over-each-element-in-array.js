/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    for(let i = 0;arr.length > i ; i++ ){
        result.push(fn(arr[i],i))
    }
    return result
    
};