interface MyStack {
    stackPop: number[];
    stackHold: number[];
    push(x: number): void;
    pop(): number;
    top(): number;
    empty(): boolean;
}

/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 */
var MyQueue = function(this: MyStack) {
    this.stackPop = []
    this.stackHold = []
} as unknown as {new():MyStack};


/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x: number) {
    this.stackPop.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.empty()) return
    while(this.stackPop.length > 1) {
        this.stackHold.push(this.stackPop.pop())
    }
    let pop = this.stackPop.pop()
    while(this.stackHold.length) {
        this.stackPop.push(this.stackHold.pop())
    }
    return pop
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stackPop[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (!this.stackPop.length)
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */