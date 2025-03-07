interface MyStack {
    q: number[];
    qPop: number[];
    push(x: number): void;
    pop(): number;
    top(): number;
    empty(): boolean;
}

var MyStack = function(this: MyStack) {
    this.q = [];
    this.qPop = [];
} as unknown as { new(): MyStack };

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x: number) {
    if(!this.empty()) this.q.push(this.qPop.shift())
    this.qPop.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    //qPop
    //q
    let pop = this.qPop.shift()
    while(this.q.length > 1) {
        this.qPop.push(this.q.shift())
    }
    let temp = this.qPop
    this.qPop = this.q
    this.q = temp
    return pop
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.qPop[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.qPop.length === 0) return true
    return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */