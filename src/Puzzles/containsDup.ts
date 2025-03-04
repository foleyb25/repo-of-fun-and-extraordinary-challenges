/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 */
var containsDuplicate = function(nums: Array<number>) {
    nums.sort((a: number,b: number) => a-b)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) return true
    }

    return false
};


var containsDuplicateHash = function(nums: Array<number>) {
    let obj: {[index: number]:boolean}=  {}
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) return true
        obj[nums[i]] = true
    }
    return false
};