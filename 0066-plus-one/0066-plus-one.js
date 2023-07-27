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

Javascript uses 64 bits to store numbers 
as small as the size of an atom up to the number of atoms in the universe.
As that is quite a broad range it cannot be stored accurately, 
therefore the numbers are stored in an imprecise way but can represent a very broad range. 
In your case 6145390195186705000 is the inaccurate version 
JS is able to store as 6145390195186705543 cannot be stored.

Ref : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt




**문자열로 이루어진 숫자를 BigInt() 안에 넣어야한다. **
let a = '9999999999999999'
let b = 9999999999999999

cc = BigInt(a)       (o)
:9999999999999999n
ff = BigInt(b)       (x)
10000000000000000n


*/ 
