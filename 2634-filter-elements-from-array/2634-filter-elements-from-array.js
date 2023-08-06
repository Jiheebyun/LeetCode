/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   let result = [];
    arr.map((el,idx)=>{
        if(fn(arr[idx],idx)){
           result.push(arr[idx]);
           }    
    })
    return result
};