/**
 * @param {number} n
 * @return {number}
 * 
 * Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).
 * 
 */
var hammingWeight = function(n: number) {
    let i = 32
    let res = 0
    while(i--) {
        if( (n & 1) === 1 ) {
            res++
        }
        n = n >>> 1
    } 
    return res
};