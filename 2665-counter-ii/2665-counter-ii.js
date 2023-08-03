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

num++ -> 변수를 먼저 할당한 뒤에 연산을 수행
ex) let x = 3;
    const y = x++; 
          3을 y에 먼저할당한뒤 x + 1 대한 연산을 수행한다.
          
++num -> 연산을 먼저 수행한뒤에 변수에 할당/대입을 한다.
ex) let x = 3;
    const y = ++x;
          1 + x의 연산을 수행한뒤에 y에 값을 할당 한다.
*/