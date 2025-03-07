/**
 * @param {number} n
 * @return {boolean}
 * 
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 * 
 */
var isPowerOfTwo = function(n: number) {
    if(n === 1) return true
    let nToBinary = n.toString(2)
    if (nToBinary[nToBinary.length-1] === "1") return false
    if (nToBinary[0] !== "1") return false
    let i = 1
    while(i < nToBinary.length - 1) {
        if(nToBinary[i] === "1") return false
        i++
    }

    return true
    
};