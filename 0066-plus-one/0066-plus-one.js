/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = '';
    const num = digits.forEach((num, idx)=>{ result += num.toString() });

    return (BigInt(result) + 1n).toString().split("");
};



/*
var plusOne = function(digits) {
    let result = '';
    const num = digits.forEach((num, idx)=>{ result += num.toString() });
    result = parseInt(result) + 1
    return result.toString().split('');
};

여기서 문제는 Number()의 한계가 있어 
6145390195186705543 + 1 할경우에 
예상한 결과값은 6145390195186705544였는데, 
6145390195186705000 출력됬다.


*/ 