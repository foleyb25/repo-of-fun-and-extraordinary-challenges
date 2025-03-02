/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * Had to look this one up to achieve linear time and constant space.
 * This works by using the XOR operator to flip the bits. If a number is found twice, the bit will be flipped back to
 * it's original value of 0. If a number is found once this bit will hold until the end of the iteration (O(n) time)
 */
var singleNumber = function(nums: Array<number>) {
    let res: number = 0
    for(let i = 0; i< nums.length; i++) {
        res = res ^ nums[i]
    }
    return res

};