/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 * 
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * 
 */
var containsNearbyDuplicate = function(nums: Array<number>, k: number) {
    let obj: {[index: number]: number} = {} //{ nums[i] : i}
    for(let i = 0; i < nums.length; i++) {
        if( obj[nums[i]] >= 0) {
            if( Math.abs( obj[nums[i]] - i ) <= k ) {
                return true
            }
        }
        obj[nums[i]] = i
    }
    return false
};