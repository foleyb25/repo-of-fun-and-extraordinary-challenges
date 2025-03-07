/**
 * @param {number[]} nums
 * @return {string[]}
 * 
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
 * Each range [a,b] in the list should be output as:
 * "a->b" if a != b
 * "a" if a == b
 * 
 */
var summaryRanges = function(nums: Array<number>) {
    if(!nums.length) return []
    function rangeBuilder(a:number,b:number) {
        if(a === b) return `${a}`
        return `${a}->${b}`
    }
    let res = []
    let startSequenceIndex = 0
    let j = 1
    while(j < nums.length) {
        if( nums[j] !== (nums[j-1]+1)) {
            //append range builder
            res.push(rangeBuilder(nums[startSequenceIndex], nums[j-1]))
            startSequenceIndex = j
        }
        j++
    }
    res.push(rangeBuilder(nums[startSequenceIndex], nums[j-1]))

    return res
};