/**
 * @param {string} s
 * @return {boolean}
 * 
 * 
 * 
 * 
 * 
 */
var isPalindrome = function(s: string): boolean {
    if(s.trim() === "") return true
    const alphaRegex: RegExp = /[a-zA-Z0-9]+/;
    let sArr: Array<string> = s.split('')
    // filter array and remove non-alphanumeric characters
    sArr = sArr.filter((char) =>  alphaRegex.test(char))
    // convert each character to lowercase
    sArr = sArr.map((char) => char.toLowerCase())
    let i: number = 0
    let j: number = sArr.length-1
    // compare bold ends until each end meets. If unequal values are found it is not a palindrome
    while(i <= j) {
        if(sArr[i] !== sArr[j]) return false
        j--
        i++
    }

    return true 
};