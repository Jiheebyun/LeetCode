/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const fnObj = {
        toBe(compareVal){
            if(val === compareVal){
               return true;
               }else{
                   throw new Error("Not Equal")
               }
        },
        notToBe(compareVal){
            if(val !== compareVal){
               return true;
               }else{
                   throw new Error("Equal")
               }
        },
    };
    return fnObj
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
    
    
/*
1.  클래스가 아닌데, "."을 이용하여 함수를 콜하고 있다 
    어떻게 하면, "."을 이용하여 함수를 콜할수있을까?
    -> 함수안에 객체를 선언하여 객체 안에 함수를 넣고, return 값으로 객체를 반환.

*/