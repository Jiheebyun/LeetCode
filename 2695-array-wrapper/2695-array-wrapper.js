/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
        this.arrnum = nums;
    
//     valueOf(num){
//         return  this.arrnum.reduce((sum, num) =>{ return sum + num }, 0);
//     }
    
//     toString(){
//         return `[${this.arrnum.map((el)=>{ return String(el).join(',') })}]`
//     }
    
};

ArrayWrapper.prototype.valueOf = function() {
    return  this.arrnum.reduce((sum, num) =>{ return sum + num }, 0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.arrnum.join(',')}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
/*

**join()**
배열 -> 하나의 문자열
const arr = ['바람', '비', '물'];
console.log(arr.join());
// '바람,비,물'
console.log(arr.join(''));
// '바람비물'
console.log(arr.join('-'));
// '바람-비-물'

**ProtoType** 
https://bgeun2.tistory.com/11

*/ 