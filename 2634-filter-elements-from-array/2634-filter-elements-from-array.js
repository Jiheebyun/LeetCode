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





/*
fn의 함수는 arr의 요소하나를 인자로 받고,
return 값으로 true, false를 반환하므로,
if문을 이용하여 fn값이 true일 경우에, result에 arr 요소를 push한다.

*/