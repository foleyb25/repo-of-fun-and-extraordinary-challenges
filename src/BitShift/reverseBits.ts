/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 
 * Easiest way but interviewers probably won't be looking for this solution
 * 
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 */
var reverseBitsEasy = function(n: number) {
    return parseInt(n.toString(2).padStart(32,"0").split('').reverse().join(''), 2)
};

var reverseBits = function(n: number) {
    let res: number = 0
    let i: number = 0
    /**
     * You cannot just exclusive or (^) n with 32 1's. This is because the 0's are truncated so the bit positions are off.
     */
    while(i < 32) {
        //shift result to put a "0" in Least Significant Bit (LSB). This will result in a "0" or "1" based on n's LSB
        res = res << 1 
        res = res | (n & 1) //Or operation with n's LSB. n, which bit's will shift right, is &'d with "1" to give a result of 1 or 0
        //Shift all bit's to the right of n and do not preserve the significant bit (we want 0's trailing for an accurate result). These represent the truncated bits mentioned above.
        n = n >>> 1
        i++
    }
    // this last operation converts the result from a signed to unsigned number since this is what the problem asks. We don't want negatives
    return res >>> 0
};

/**
 * 
 * This is an alternative way of doing it. Add on the previous bits to the logical shift left of incoming "0" or "1"
 * 
 */
var reverseBitsAlt = function(n: number) {
    let res = 0;
    let pow = 31;
    while(n > 0){
        let rightMost = n & 1;
        res = res + (rightMost << pow);
        pow--;
        n = n >>>1
    }
    return res >>> 0
};