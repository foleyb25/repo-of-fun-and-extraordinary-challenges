/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * 
 * 
 */
var majorityElement = function(nums: Array<number>) {
    let majorityIndicator = nums.length >> 1
    //find value that appears more than this indicator
    let memo: {[index:number]: number} = {}
    for(let i = 0; i < nums.length; i++) {
        if(memo[nums[i]] === undefined) {
            memo[nums[i]] = 1
        } else {
            memo[nums[i]] += 1
        }
        if(memo[nums[i]] > majorityIndicator) return nums[i]
        
    }
};