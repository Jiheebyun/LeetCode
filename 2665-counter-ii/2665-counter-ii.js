/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init
    let objFn ={
        increment(){
            return ++num
        },
        reset(){
            return num = init
        },
        decrement(){
            return --num
            
        }
    }
    return objFn
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/*
**init의 값이 연산을 하고 난뒤에도 바뀌면 안된다.** 
*/