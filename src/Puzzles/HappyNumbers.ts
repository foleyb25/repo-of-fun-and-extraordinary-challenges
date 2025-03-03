/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n: number) {
    if (n === 1) return true
    if(n===2) return false
    
    let memo = {[n]: "X"}
    while(true) {
        let nArr: Array<string> = n.toString().split('') //convert to array
        let sum: (number | any | bigint) = 0
        for(let i = 0; i < nArr.length; i++) {
            sum += Math.pow(parseInt(nArr[i]),2)
        }
        if(sum === 1) return true
        if(memo[sum] === "X") return false
        memo[sum] = "X"
        n = sum
    }
};